import { Inter } from "next/font/google"; // ← change font name here
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const mainFont = Inter({ // ← and here
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata = {
  title: "MicrobeWise | Explore the Microbial World",
  description:
    "An interactive platform for learning microbiology, infectious diseases, and public health.",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className={mainFont.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        {/* Lets keyboard users skip straight past the navbar */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-crimson focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}