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

// Usage: Call the function to retrieve all providerAccountIds
// getAllProviderAccountIds();


















        // select: {
        //   id: true,
        //   image: true,
        //   name: true,
        //   email: true,
        //   // discordId: true,
        // },

// export async function UpdateDiscordId() {
//   try {
//     const session = await getServerSession();
    
//     if (session && session.user?.email) {
//       const discordProfile = session.user.discordId;
      
//       if (discordProfile) {
//         const email = session.user.email;
        
//         // Find the user by email and update the Discord ID
//         const updatedUser = await prisma.user.update({
//           where: { email: email },
//           data: {
//             discordId: discordProfile, // Save the Discord ID to the database
//           },
//         });

//         return updatedUser; // Return the updated user data
//       }
//     }
//     console.log("Discord profile or email not found.");
//   } catch (error) {
//     console.error("Error updating Discord ID:", error);
//   }
// }