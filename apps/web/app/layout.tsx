import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {Inter} from "next/font/google"


const inter = Inter({subsets: ["latin"], weight: ["400", "700"]})




export const metadata: Metadata = {
  title: "Carepulse",
  description: "A management tool for your patients",
};
import { frFR } from "@clerk/localizations";
import { cn } from "./lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={frFR}>
      <html lang="en">
        <body className={cn('overflow-hidden min-h-screen antialiased', inter.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
