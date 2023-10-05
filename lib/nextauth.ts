import { NextAuthOptions, DefaultSession } from "next-auth";
import { getServerSession } from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import DiscordProvider from "next-auth/providers/discord";

const scopes = ["identify"];

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
      }
}


export const authOptions : NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        jwt: async ({token}) => {
            const db_user = await prisma.user.findFirst({
                where: {
                    email: token?.email
                }
            })
            if({db_user}) {
                token.id = db_user.id
            }
            return token
        },
        session: ({session, token}) => {
            if(token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        } 
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET  as string,
            authorization: { params: { scope: scopes.join(" ") } },
        })
    ]
}

export const getAuthSession = () => {
    return getServerSession(authOptions)
}