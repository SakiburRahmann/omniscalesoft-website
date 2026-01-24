import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmniScaleSoft | Software that Scales",
  description: "Engineering the next generation of digital infrastructure.",
};

import { PageTransition } from "@/components/layout/page-transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased selection:bg-black selection:text-white`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
