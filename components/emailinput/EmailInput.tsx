import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import ClientSideEmailInput from "./ClientSideEmailInput";

const prisma = new PrismaClient();

const EmailInput = () => {
    async function theServerAction(data: FormData) {
      "use server";
      const session = await getServerSession();
      const emailContact = data.get("emailContact") as string;
  
      try {
        if (session && session.user?.email) {
          const email = session.user.email;
  
          await prisma.user.update({
            where: { email: email },
            data: {
              emailcontact: emailContact,
            },
          });
        }
        revalidatePath("/");
        console.log("emailContact updated successfully!");
      } catch (error) {
        console.error("Error updating emailContact:", error);
      }
    }
    return (
      <div >
        <form action={theServerAction}>
          <ClientSideEmailInput />
        </form>
      </div>
    );
  };
export default EmailInput