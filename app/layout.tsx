import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "H&T Mobile Automotive Repair | Mobile Mechanic in South Sacramento | (916) 628-0533",
  description:
    "Mobile mechanic serving South Sacramento. Tri comes to your home, apartment or work for diagnostics, alternators, brakes, oil changes, tune-ups and smog prep. All work guaranteed. 4.9 stars from 49 Google reviews. Call (916) 628-0533.",
  openGraph: {
    title: "H&T Mobile Automotive Repair | South Sacramento Mobile Mechanic",
    description: "We come to you. 4.9 stars from 49 Google reviews, all work guaranteed. Call (916) 628-0533.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
