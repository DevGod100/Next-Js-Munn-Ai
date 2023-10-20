// import AccountProviderId from "@/components/AccountProviderId";
import CTA1 from "@/components/CTA1";
import CTA2 from "@/components/CTA2";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MakeMoney from "@/components/MakeMoney";
import SimpleCTA from "@/components/SimpleCTA";
import UnderHero from "@/components/UnderHero";
import ViewAccounts from "@/components/ViewAccounts";
import ViewUsers from "@/components/ViewUsers";

export default function Home() {
  return (
    // <main  className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen w-full p-2">
      {/* <ViewUsers /> */}
      {/* <ViewAccounts /> */}
      {/* <AccountProviderId/> */}
      <Hero />
      <UnderHero />
      <CTA1 />
      <CTA2 />
      <SimpleCTA />
      <Featured />
      <MakeMoney />
      <Footer />
    </main>
  );
}
