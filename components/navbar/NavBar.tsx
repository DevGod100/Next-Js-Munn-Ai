import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import SignInButton from "../SignInButton";
import UserAccountNav from "./UserAccountNav";
import { NavItemsJobSeekers } from "./NavItems";
import { HoverAccount } from "./HoverAccount";



const NavBar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-purple-600 px-2 py-1 text-xl font-semibold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Munn.<span className="text-purple-800">Ai</span>
          </p>
        </Link>
        <div className="flex justify-end">
          <div className="flex mr-40">
        {/* <NavItemsJobSeekers/> */}
        </div>

        <div className="flex items-center">
          {session?.user ? (
            <HoverAccount user={session.user} />
            // <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
            )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
