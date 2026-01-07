import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the Navbar we created

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ambra | Compassionate Counseling",
  description: "Find balance and clarity with professional, personalized therapy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}
      >
        <Navbar />
        {/* 'pt-20' adds padding to the top so the fixed navbar doesn't overlap your page content */}
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}