"use server";
// import DiscordProfile from "next-auth/providers/discord";


import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function GetFullProfile() {
  const session = await getServerSession();

  try {
    if (session && session.user?.email) {
      const email = session.user.email;

      const retrievedUser = await prisma.user.findUnique({
        where: { email: email },
      });
      return retrievedUser; // Return the user data
    }
    revalidatePath("/");
    console.log("Retrieved all fields Succesfully successfully!");
  } catch (error) {
    console.error("Error retrieving fields:", error);
  }
}


export async function getAllProviderAccountIds() {
  try {
    const accounts = await prisma.account.findMany();

    if (accounts && accounts.length > 0) {
      console.log('Provider Account IDs:');
      accounts.forEach((account) => {
        console.log(`Account ID: ${account.id}, Provider Account ID: ${account.providerAccountId}`);
      });
   return accounts;
    }
    revalidatePath("/");
    console.log("Retrieved providerAccountIds successfully!");
  } catch (error) {
    console.error('Error retrieving providerAccountIds:', error);
}
}

export async function getCurrentProviderAccountId() {
  try {
    const session = await getServerSession();

    if (session && session.user?.email) {
      const email = session.user.email;

      // Find the user by email
      const user = await prisma.user.findFirst({
        where: { email: email },
      });

      if (user) {
        // Find the account for the user
        const account = await prisma.account.findFirst({
          where: {
            userId: user.id,
          },
        });

        if (account) {
          const DisId = account.providerAccountId;
          return DisId
        }
      }
    }
    revalidatePath("/");
    console.log("Retrieved providerAccountId for the current user successfully!");
  } catch (error) {
    console.error('Error retrieving providerAccountId:', error);
  }
}
















export async function SetDiscordIdtoAccountProviderId() {
    try {
      const session = await getServerSession();
      if (session && session.user?.email) {
        const email = session.user.email;
  
        // Find the user by email
        const user = await prisma.user.findFirst({
          where: { email: email },
        });
        
        if (user) {
          // Find the user's account with the matching userId
          const account = await prisma.account.findFirst({
            where: {
              userId: user.id,
            },
          });
  
          if (account) {
            // Update the user's discordId to match the providerAccountId
            const updatedUser = await prisma.user.update({
              where: { email: email },
              data: {
                discordId: account.providerAccountId,
              },
            });
  
            return updatedUser; // Return the updated user data
          }
        }
      }
      console.log("Discord profile, email, user, or account not found.");
    } catch (error) {
      console.error("Error updating Discord ID:", error);
    }
  }