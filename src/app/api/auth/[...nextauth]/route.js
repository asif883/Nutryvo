import { mongoDB } from "@/lib/mongoDB";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const db = await mongoDB();
        const currentUser = await db.collection("users").findOne({ email });

        if (!currentUser) return null;

        const passwordMatched = await bcrypt.compare(password, currentUser.password);
        if (!passwordMatched) return null;

        return currentUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
        };
      }
      return session;
    },
    async signIn({user , account}) {
      if(account.provider === 'google'){
        const {name , email, image } = user
        try {
          const db = await mongoDB()
          const userCollection = db.collection("users")
          const userExits = await userCollection.findOne({email})
            if(!userExits){
              const newUser = {
              name,
              email,
              image,
              role : "member"
              };
            const res = await userCollection.insertOne(newUser)
          }
          return true
        } catch (error) {
          console.log(error);
        }
      }else{
        return true;
      }
    }
  },
  pages: {
    signIn: "/login",
  },
  
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
