import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from "next-auth/providers/twitter";
import InstagramProvider from "next-auth/providers/instagram";
import GitHubProvider from "next-auth/providers/github";
import SpotifyProvider from "next-auth/providers/spotify";
export const authOptions ={
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID as string, 
        clientSecret: process.env.GOOGLE_SECRET as string
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID as string,
        clientSecret: process.env.FACEBOOK_SECRET as string
      }),
      InstagramProvider({
        clientId: process.env.INSTAGRAM_CLIENT_ID as string,
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      }),
      
    ],
    secret : process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/auth/signin',     
    }
  }

export default NextAuth(authOptions);


//http://localhost:3000/api/auth/callback/instagram