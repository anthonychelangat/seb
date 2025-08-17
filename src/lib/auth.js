import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { getUserByEmail } from "./actions";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
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

      //  authorization: {
      //    prompt: "consent",
      //    access_type: "offline",
      //   response_type: "code",
      // },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  //  callbacks: {
  //    async signIn({ user, account, profile }) {
  //      console.log(user);
  //      if (account.provider === "google") {
  //        try {
  //          const gituser = await executeQuery(
  //            "select * from users where email=?",
  //            [user.email]
  //          );
  //          console.log(gituser);
  //          if (!gituser.affectedRows) {
  //            const newUser = await executeQuery(
  //              "insert into users(username,email,photo) values(?,?,?)",
  //              [profile.email, profile.login, profile.avater]
  //            );
  //          }
  //        } catch (error) {
  //          console.log("there was an error while logging in");
  //          throw new Error(error);
  //        }
  //      }
  //
  //      return true;
  //    },
  //  },
});
