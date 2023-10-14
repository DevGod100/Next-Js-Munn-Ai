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
            if (token && token.provider === 'discord') {
                const discordToken = process.env.DISCORD_TOKEN; // Access your Discord token from environment variables 
                const response = await fetch('https://discord.com/api/users/@me', {
                    headers: {
                        Authorization: `Bearer ${discordToken}`,
                    },
                });

        if (response.ok) {
          const discordUserData = await response.json();
          console.log(discordUserData);

          // Save the Discord user data to the user's database record
          const db_user = await prisma.user.findFirst({
            where: {
              email: token?.email,
            },
          });

          if (db_user) {
            // Update the discordId field with the Discord user ID
            await prisma.user.update({
              where: {
                id: db_user.id,
              },
              data: {
                discordId: discordUserData.id, // Assuming discordUserData has the user's Discord ID
              },
            });
          }
        }
      }
      return token; // Return the token at the end of the callback

    },
        session:  ({session, token}) => {
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