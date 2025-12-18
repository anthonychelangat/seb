import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { getUserByEmail } from "@/lib/actions";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials === null) return null;
        const email = credentials?.email;
        const users = await getUserByEmail(email);

        if (users) {
          const [password] = users.map(u => u.password);
          const isMatch = password === credentials?.password;

          if (isMatch) {
            const [user] = users;
            return user;
          } else {
            throw new Error("Check your password");
          }
        } else {
          throw new Error("User not found");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
