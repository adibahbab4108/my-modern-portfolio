"use client";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //<SessionProvider/> context hook enable to use useSession() to retrieve user only in client component. Wrap the whole project with this AuthProvider in root component
  return <SessionProvider>{children}</SessionProvider>;
}
