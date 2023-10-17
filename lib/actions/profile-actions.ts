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

    const providerAccountIds = accounts.map(account => account.providerAccountId);
    console.log(providerAccountIds);
    
    revalidatePath("/");
    console.log("Retrieved providerAccountIds successfully!");
    return providerAccountIds;
  } catch (error) {
    console.error('Error retrieving providerAccountIds:', error);
}
}
    // if (accounts && accounts.length > 0) {
    //   console.log('Provider Account IDs:');
    //   accounts.forEach((account) => {
    //     console.log(`Account ID: ${account.id}, Provider Account ID: ${account.providerAccountId}`);
    //   });
    // }






    

// export async function getAccount() {
//   try {
//     const DisId =  account.providerAccountId

//     const retrievedAccount = await prisma.account.findMany({
//       where: { providerAccountId: DisId },
//     });
   
//     if (retrievedAccount) {
//       console.log("Retrieved retrievedAccount successfully!");
//       revalidatePath("/");
//       return retrievedAccount;
//     };
//   } catch (error) {
//     console.error('Error retrieving retrievedAccount:', error);
// }
// }



// export async function getCurrentProviderAccountId() {
//   try {
//     const session = await getServerSession();

//     if (session && session.user?.email) {
//       const email = session.user.email;

//       // Find the user by email
//       const user = await prisma.user.findFirst({
//         where: { email: email },
//       });

//       if (user) {
//         // Find the account for the user
//         const account = await prisma.account.findFirst({
//           where: {
//             userId: user.id,
//           },
//         });

//         if (account) {
//           const DisId = account.providerAccountId;
//           return DisId
//         }
//       }
//     }
//     revalidatePath("/");
//     console.log("Retrieved providerAccountId for the current user successfully!");
//   } catch (error) {
//     console.error('Error retrieving providerAccountId:', error);
//   }
// }



// export async function CheckIfIdsAreEqual() {
//   const session = await getServerSession();
//   let accountProviderId = null;
// try {
//   if (session && session.user?.email) {
//     const email = session.user.email;

//     const account = await prisma.account.findFirst({
//       where: {
//         userId: email, 
//       },
//     });
     
//     if (account) {
//       if (account.providerAccountId) {
//         accountProviderId = account.providerAccountId;
//         console.log("accountProviderId:", accountProviderId);
//       } else {
//         console.log("account.providerAccountId is null");
//       }
//     } else {
//       console.log("No account found for the user");
//     }
//       const user = await prisma.user.findFirst({
//         where: {
//           email: email,
//         },
//       });
  
//       if (user) {
//         const userDiscordId = user.uploadeddiscordid;
//         console.log("userDiscordId:", userDiscordId);

//         if (userDiscordId && accountProviderId && userDiscordId === accountProviderId) {
//           return true;
//         } else {
//           return false;
//         }
//     }
//     // return true if both userDiscordId & accountProviderId are not null and equal the same exact string
//   }
// } catch (error) {
//   console.error("Error finding accountproviderid:", error);
// }

// return false; // Return false if there was an error or if the conditions aren't met
// }





// export async function GetUploadedDisId() {
//   const session = await getServerSession();

//   try {
//     if (session && session.user?.email) {
//       const email = session.user.email;

//       const retrievedField = await prisma.user.findUnique({
//         where: { email: email },
//         select: {
//           uploadeddiscordid: true,
//         },
//       });
//       return retrievedField; // Return the user data
//     }
//     revalidatePath("/");
//     console.log("Retrieved field Succesfully successfully!");
//   } catch (error) {
//     console.error("Error retrieving field:", error);
//   }
// }

















// export async function SetDiscordIdtoAccountProviderId() {
//     try {
//       const session = await getServerSession();
//       if (session && session.user?.email) {
//         const email = session.user.email;
  
//         // Find the user by email
//         const user = await prisma.user.findFirst({
//           where: { email: email },
//         });
        
//         if (user) {
//           // Find the user's account with the matching userId
//           const account = await prisma.account.findFirst({
//             where: {
//               userId: user.id,
//             },
//           });
  
//           if (account) {
//             // Update the user's discordId to match the providerAccountId
//             const updatedUser = await prisma.user.update({
//               where: { email: email },
//               data: {
//                 discordId: account.providerAccountId,
//               },
//             });
  
//             return updatedUser; // Return the updated user data
//           }
//         }
//       }
//       console.log("Discord profile, email, user, or account not found.");
//     } catch (error) {
//       console.error("Error updating Discord ID:", error);
//     }
//   }