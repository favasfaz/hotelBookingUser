import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
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
});
