import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"


export default NextAuth({
  session: {
    jwt: true
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: "df8562624c19cbd48900",
      clientSecret: "0363ec3fd1683190dfba47bd90076836b77f9071",
    }),
    GoogleProvider({
      clientId:
        "981297777900-68vkg3kirt6cdl1n884odqilgvftgtls.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  

 
  // callbacks :{
  //   async jwt(token,user){
  //       if(user){
  //         token.id = user.id
  //       }
  //       return token
  //   },
  //   async session(session,token){
  //     session.user.id = token.id
  //     return session
  //   }
  // }
});
