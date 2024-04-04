import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '471a3ff891242f4b54ab',
      clientSecret: 'c8dde95252908f1c421d624d8e05dc6cbabb9c2b',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions);