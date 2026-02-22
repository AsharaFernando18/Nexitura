import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexitura | Digital Backbone of Tomorrow's Business",
  description: "Web & App Development, AI Automation, Design & Strategy — under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen cursor-default md:cursor-none`}>
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
