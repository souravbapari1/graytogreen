import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      token: string;
      user_type: string;
      // Add any other properties you want to include
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    token: string;
    user_type: string;
    // Add any other properties you want to include
  }
}
