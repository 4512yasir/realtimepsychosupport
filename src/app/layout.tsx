import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Real Time Psychosupport CBO",
    template: "%s | Real Time Psychosupport CBO",
  },

  description:
    "Real Time Psychosupport CBO provides accessible, affordable, and evidence-informed mental health and psychosocial support for individuals, families, and communities in Mathare and beyond.",

  keywords: [
    "Real Time Psychosupport",
    "mental health Kenya",
    "psychosocial support Kenya",
    "mental health Mathare",
    "counselling Nairobi",
    "community mental health",
    "youth mental health",
    "trauma support",
    "psychological first aid",
  ],

  authors: [
    {
      name: "Real Time Psychosupport CBO",
    },
  ],

  creator: "Real Time Psychosupport CBO",

  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Real Time Psychosupport CBO",
    title: "Real Time Psychosupport CBO",
    description:
      "Healing Minds. Restoring Hope. Empowering Communities.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}