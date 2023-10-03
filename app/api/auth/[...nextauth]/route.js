

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Student from "../../../../models/student";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await Student.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          // Include the user's role in the session
          const userWithRole = {
            ...user.toObject(),
            role: user.role,
          };

          return Promise.resolve(userWithRole); // Resolve the entire user object
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    sessionCallback: async (session, user) => {
      session.user = { ...user, role: user.role };
      return Promise.resolve(session);
    },
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.role =user.role
      }
      return token
    },  
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.accessToken = token.accessToken
      session.user.role = token.role
      
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET, // Your secret should be set in your environment variables
  pages: {
    signIn: "/login", // Customize the sign-in page route as needed
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
