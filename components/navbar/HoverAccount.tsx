"use client";

import * as React from "react";
import Link from "next/link";

import { User } from "next-auth";
import { signOut } from "next-auth/react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import UserAvatar from "./UserAvatar";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";

type Props = {
  user: Pick<User, "name" | "email" | "image">;
};

export function HoverAccount({ user }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <UserAvatar user={user} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                {user.email && (
                  <p className="w-[200px] truncate text-sm text-zinc-700">
                    {user.email}
                  </p>
                )}
              </div>
            </div>

            <DropdownMenuSeparator />

              <div className="p-2">
                <NavigationMenuLink
                  className="text-red-600 cursor-pointer flex items-center"
                  onClick={(e: any) => {
                    e.preventDefault();
                    signOut().catch(console.error);
                  }}
                > Sign out 
                <LogOut className="w-4 h-4 ml-2"/>
                </NavigationMenuLink>
              </div>

            <DropdownMenuSeparator />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
