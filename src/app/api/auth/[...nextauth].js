import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { getUserByEmail } from "@/lib/actions";
import CredentialsProvider from "next-auth/providers/credentials";
import executeQuery from "@/lib/utils";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const email = credentials.email;
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
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const existing = await executeQuery(
          "select id from users where email=?",
          [profile.email]
        );

        if (existing.length === 0) {
          await executeQuery("insert into users(username,email) values(?,?)", [
            profile.name,
            profile.email,
          ]);
        }
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
