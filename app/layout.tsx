import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Wissemann",
  description: "James's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script async src="https://www.tracklyze.com/insight-core.js" data-site-id="6bcfe402-fc7b-497e-a4de-9d9b63deacea"></script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`inter.className flex min-h-screen flex-col py-8`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MainNav></MainNav>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
