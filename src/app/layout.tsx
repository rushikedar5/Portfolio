import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased font-sans transition-colors duration-300">
        <NavBar />
        <main className="relative w-full min-h-screen bg-grid flex flex-col items-center">
          {/* Wrapper to align with Navbar */}
          <div className="w-full max-w-7xl mx-auto flex">
            
            {/* Left Spacer */}
            <div className="hidden lg:block w-[240px] border-r border-transparent lg:border-neutral-200 dark:lg:border-neutral-800" />
            
            {/* MAIN CONTENT COLUMN */}
            <div className="flex-1 w-full max-w-4xl mx-auto bg-white dark:bg-neutral-950/80 shadow-sm border-r border-transparent lg:border-neutral-200 dark:lg:border-neutral-800 pb-12">
              {children}
              <Footer />
            </div>

            {/* RIGHT SIDEBAR */}
            <Sidebar />
          </div>
        </main>
      </body>
    </html>
  );
}