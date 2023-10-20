import SignOutButton from "@/components/SignOutButton";
import ViewAccounts from "@/components/ViewAccounts";
import ViewUsers from "@/components/ViewUsers";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ViewAccounts />
      <ViewUsers />
      <div className="fixed right-1 bottom-1">
        <SignOutButton />
      </div>
    </main>
  );
};

export default page;
