import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ul style={{display:"flex", gap:"20px", backgroundColor:"lightblue", justifyContent:"space-around", fontSize:"20px", color:"blue"}}> 
            <li><Link href="/">Home</Link></li> &nbsp; |
            <li><Link href = "/contact">Contact</Link></li>&nbsp; |
            <li><Link href = "/about">About</Link></li>&nbsp; |
            <li><Link href = "/feedback">Feedback</Link></li>&nbsp; |
            <li><Link href="/country">Country</Link></li>
        </ul>
        {children}
      </body>
    </html>
  );
}