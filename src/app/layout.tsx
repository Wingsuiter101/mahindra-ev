import type { Metadata, Viewport } from "next";
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
  title: "Mahindra EV SUVs Premium Launch Strategy",
  description: "A premium Next.js Tailwind Framer Motion presentation deck for Mahindra EV SUVs.",
  icons: {
    icon: [
      { url: "/Mahindra-Logo.png", type: "image/png" },
    ],
    apple: "/Mahindra-Logo.png",
    shortcut: "/Mahindra-Logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased dark`}
    >
      <body className="flex min-h-dvh flex-col bg-black text-white">{children}</body>
    </html>
  );
}
