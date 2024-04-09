import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogoutBtn from "./LogoutBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar"> 
          <Link href="/" className="logo">몽골포럼</Link> 
          <Link href="/list">리스트</Link>
          {session
            ? <>
                <img src={session.user.image} alt="썸네일" style={{width: "50px", height: "auto"}} />
                <span>{session.user.name}</span>
                <span>{session.user.email}</span>
                <LogoutBtn />
              </>
            : <LoginBtn />
          }
        </nav>
        {children}
      </body>
    </html>
  );
}
