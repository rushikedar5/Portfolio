import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rushi | Developer Portfolio",
    template: "%s | Rushi",
  },
  description: "TypeScript backend developer building AI-powered applications.",
  openGraph: {
    title: "Rushi | Developer Portfolio",
    description: "TypeScript backend developer building AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      {/* 1. Body gets the dark theme background and min-h-screen */}
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-300 antialiased font-sans">
        
        {/* 2. NavBar MUST be inside the body */}
        <NavBar />
        
        {/* 3. Main wrapper uses flex-grow to push the footer down */}
        <main className="flex-grow relative z-10 w-full">
          {children}
        </main>
        
        {/* 4. Footer MUST be inside the body */}
        <Footer />
        
      </body>
    </html>
  );
}