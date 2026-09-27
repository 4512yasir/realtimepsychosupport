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
    default: "Real Time Psychosupport CBO | Where Expertise Meets Compassion",
    template: "%s | Real Time Psychosupport CBO",
  },

  description:
    "Real Time Psychosupport CBO is a community-driven organization in Mathare, Nairobi, providing accessible, affordable, and evidence-informed mental health and psychosocial support to individuals, families, schools, workplaces, and vulnerable communities.",

  keywords: [
    "Real Time Psychosupport CBO",
    "Real Time Psychosupport",
    "Where Expertise Meets Compassion",
    "mental health Kenya",
    "mental health Mathare",
    "psychosocial support Kenya",
    "community mental health",
    "counselling Nairobi",
    "youth mental health",
    "school mental health",
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
    title: "Real Time Psychosupport CBO | Where Expertise Meets Compassion",
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