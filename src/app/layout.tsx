import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mina Cade · Frontend Engineer",
  description:
    "Portfolio for Mina Cade, a frontend engineer crafting React and Angular experiences with inclusive, high-impact design systems.",
  openGraph: {
    title: "Mina Cade · Frontend Engineer",
    description:
      "Three years of React and Angular delivery — cross-framework systems, rapid experiments, and accessible product experiences.",
    url: "https://agentic-13fd9097.vercel.app",
    siteName: "Mina Cade Portfolio",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://agentic-13fd9097.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
