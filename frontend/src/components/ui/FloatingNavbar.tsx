"use client";
import React, { ReactNode, useEffect, useState } from "react";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { LayoutDashboard, LogOut, UserRound } from "lucide-react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./button";

const gradientLineClass =
  "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: ReactNode;
  }[];
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
  console.log(session);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      className={cn(
        "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-black bg-white  z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span>{navItem.name}</span>
        </Link>
      ))}

      {session.data ? (
        <>
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white  rounded-full cursor-pointer">
                {session.data.user?.image ? (
                  <>
                    <Image
                      src={session.data.user?.image}
                      alt={session.data.user?.name || "User Profile"}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span
                      className={
                        "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"
                      }
                    />
                  </>
                ) : (
                  <FaUser />
                )}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white text-black overflow-y-auto dark:text-white dark:bg-black">
                <ul className="grid  gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/profile" className="flex-row items-center gap-2">
                        <UserRound />
                        Profile
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/dashboard" className="flex-row items-center gap-2">
                        <LayoutDashboard />
                        Dashboard
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Button
                        onClick={() => signOut()}
                        className="flex-row justify-start items-center gap-2 bg-red-500 text-white w-full cursor-pointer hover:bg-red-700"
                      >
                        <LogOut className="text-white" />
                        Logout
                      </Button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </>
      ) : (
        <>
          {" "}
          <Link
            href="/login"
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full cursor-pointer"
          >
            <span className="active:text-xs">Login</span>
            <span className={gradientLineClass} />
          </Link>
        </>
      )}
    </div>
  );
};
