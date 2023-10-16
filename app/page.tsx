// import AccountProviderId from "@/components/AccountProviderId";
import Hero from "@/components/Hero";
import ViewAccounts from "@/components/ViewAccounts";
import ViewUsers from "@/components/ViewUsers";

export default function Home() {
  return (
    // <main  className="flex min-h-screen flex-col items-center justify-between p-24">
    <main  className="min-h-screen w-full p-2">
      {/* <ViewUsers /> */}
      <ViewAccounts />
      {/* <AccountProviderId/> */}
      <Hero />
    </main>
  )
}


