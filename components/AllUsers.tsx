import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function AllUsers() {

    const allUsers = await prisma.user.findMany({});

  return (
    <div>

      <pre>{JSON.stringify(allUsers, null, 2)}</pre>

    </div>
  );
}
