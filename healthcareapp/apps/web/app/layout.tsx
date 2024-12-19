import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
