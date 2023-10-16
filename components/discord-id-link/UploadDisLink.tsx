import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientUploadDiscordId from "./ClientUploadDiscordId";

const prisma = new PrismaClient();

const UploadDisLink = () => {
  async function theServerAction(data: FormData) {
    "use server";
    const session = await getServerSession();
    const uploadedDiscordId = data.get("uploadedDiscordId") as string;

    try {
      if (session && session.user?.email) {
        const email = session.user.email;

        await prisma.user.update({
          where: { email: email },
          data: {
            uploadeddiscordid: uploadedDiscordId,
          },
        });
      }
      revalidatePath("/");
      console.log("uploadedDiscordId updated successfully!");
    } catch (error) {
      console.error("Error updating uploadedDiscordId:", error);
    }

    try {
      if (session && session.user?.email) {
        const email = session.user.email;
    
        const account = await prisma.account.findFirst({
          where: {
            userId: email, // Assuming the user's email is used to find the account
          },
        });
    
        if (account) {
          const accountProviderId = account.providerAccountId;
          revalidatePath("/");
        }
      }
    } catch (error) {
      console.error("Error finding accountproviderid:", error);
    }
  }

  return (
    <div>
      <form action={theServerAction}>
          <ClientUploadDiscordId /> 
      </form>
    </div>
  );
};

export default UploadDisLink;

























// import { getServerSession } from "next-auth";
// import { PrismaClient } from "@prisma/client";
// import { revalidatePath } from "next/cache";
// import ClientUploadDiscordId from "./ClientUploadDiscordId";

// const prisma = new PrismaClient();

// const UploadDisLink = () => {
//   async function theServerAction(data: FormData) {
//     "use server";
//     const session = await getServerSession();
//     const uploadedDiscordId = data.get("uploadedDiscordId") as string;

//     try {
//       if (session && session.user?.email) {
//         const email = session.user.email;

//         await prisma.user.update({
//           where: { email: email },
//           data: {
//             uploadeddiscordid: uploadedDiscordId,
//           },
//         });
//       }
//       revalidatePath("/");
//       console.log("uploadedDiscordId updated successfully!");
//     } catch (error) {
//       console.error("Error updating uploadedDiscordId:", error);
//     }

//     try {
//       if (session && session.user?.email) {
//         const email = session.user.email;
    
//         const account = await prisma.account.findFirst({
//           where: {
//             userId: email, // Assuming the user's email is used to find the account
//           },
//         });
    
//         if (account) {
//           const accountProviderId = account.providerAccountId;
       
//           const areIdsEqual = accountProviderId === uploadedDiscordId;
//       console.log("Are accountProviderId and uploadedDiscordId equal?", areIdsEqual);

//           revalidatePath("/");
//         }
//       }
//     } catch (error) {
//       console.error("Error finding accountproviderid:", error);
//     }
//   }

//   return (
//     <div>
//       <form action={theServerAction}>
//           <ClientUploadDiscordId /> 
//       </form>
//     </div>
//   );
// };

// export default UploadDisLink;



        {/* <div className="py-2">
          <div className="flex flex-col">
            <Label className="text-gray-500 py-2">Discord ID</Label>
            <div className="flex">
              <Input
                type="text"
                name="uploadedDiscordId" //for the form data!!!
                placeholder="Your Discord Id account..."
                // value={'ssssssfS'}
                required
              />
              <Button type="submit" className="self-center"></Button>
            </div>
          </div>
        </div> */}