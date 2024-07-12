import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

import { authConfig } from "./auth.config";
import { userModel } from "./models/user_models";
import dbConnect from "./service/mongo";
import mongoClientPromise from "./service/mongoClinetPromise";
// for google refresh token
async function refreshAccessToken(token) {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens?.access_token,
      accessTokenExpires: Date.now() + refreshedTokens?.expires_in * 1000,
      refreshToken: refreshedTokens?.refresh_token,
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  // session: {
  //   strategy: "jwt",
  // },
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await dbConnect();
        try {
          const user = await userModel.findOne({ email: credentials?.email });
          console.log(user);
          if (user) {
            const isMatch = user?.password === credentials.password;

            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FB_APP_ID,
      clientSecret: process.env.FB_APP_SECRET,
    }),
  ],
  // for jwt token handel
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(`JWT token: ${JSON.stringify(token)}`);
      console.log(`JWT Account: ${JSON.stringify(account)}`);

      if (account && user) {
        return {
          accessToken: account?.access_token,
          accessTokenExpires: Date.now() + account?.expires_in * 1000,
          refreshToken: account?.refresh_token,
          user,
        };
      }

      console.log(
        `Token Will Expire at ${new Date(token.accessTokenExpires)})`
      );

      if (Date.now() < token?.accessTokenExpires) {
        console.log(`At ${new Date(Date.now())}, Using old access token`);
        return token;
      }

      console.log(`Token Expired at ${new Date(Date.now())}`);
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token?.user;
      session.accessToken = token?.access_token;
      session.error = token?.error;

      console.log(`Returning Session ${JSON.stringify(session)}`);
      return session;
    },
  },
});
