import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
  interface User {
    _id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "yourmail@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Missing email or password");
          return null;
        }

        try {
          const baseApi = process.env.BASE_API;
          if (!baseApi) {
            console.error("BASE_API not configured in environment variables");
            throw new Error("Internal configuration error");
          }

          const res = await fetch(`${baseApi}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email.trim(),
              password: credentials.password,
            }),
          });

          const result = await res.json();
          console.log("Result from backend", result.data.user);
          if (result.success) {
            return result.data.user;
          } else {
            console.log("Something Went wrong", result);
            return null;
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.error(
            "🔥 Error during login authorize():",
            error?.message || error
          );
          return null;
        }
      },
    }),
  ],

  //to modify signIn/session... etc function
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user?._id;
        token.role = user?.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user._id = token?._id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  //to redirect our own custom login route
  pages: {
    signIn: "/login",
  },
};