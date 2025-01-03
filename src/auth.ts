import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authUser, getUsers } from "./request/worker/auth";
import { genPbFiles } from "./request/actions";
import { setLastLogin } from "./request/worker/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        try {
          const user = await authUser({
            email: credentials!.email as string,
            password: credentials!.password as string,
          });

          if (!user) {
            throw new Error("User not found.");
          }

          await setLastLogin(user.record.id);

          return {
            email: user?.record.email,
            id: user?.record.id,
            image: genPbFiles(user?.record, user!.record.avatar),
            name: user!.record.first_name + " " + user!.record.last_name,
            role: user!.record.role,
            token: user!.token,
            user_type: user!.record.user_type,
          };
        } catch (error) {
          console.log(error);

          throw new Error("User not found.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  trustHost: true,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.token = user.token as string;
        token.user_type = user.user_type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      session.user.token = token.token as string;
      session.user.user_type = token.user_type as string;

      return session;
    },
  },
});
