import type { Metadata } from "next";
import { Andika, Arvo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo-sans",
  display: "swap",
});

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-andika-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trillionclues - Mobile Developer",
  description:
    "Frontend and Mobile Developer specializing in React, Flutter, and modern web technologies.",
  keywords: [
    "frontend developer",
    "mobile developer",
    "nextjs",
    "react",
    "flutter",
  ],
  creator: "Trillionclues",
  openGraph: {
    title: "Trillionclues - Mobile Developer",
    description:
      "Frontend and Mobile Developer specializing in React, Flutter, and modern web technologies.",
    siteName: "Trillionclues Portfolio",
    url: "https://trillionclues.dev",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillionclues - Mobile Developer",
    description:
      "Frontend and Mobile Developer specializing in React, Flutter, and modern web technologies.",
    images: ["https://trillionclues.dev/og.png"],
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${arvo.variable} ${andika.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
