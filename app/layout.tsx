import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Others from "@/components/Others";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glass Press | Home",
  description: "See through news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="w-8/12 mx-auto flex justify-around h-screen">
          <div className="border-r border-gray-300 w-3/12">
            <Sidebar />
          </div>
          <div className="w-6/12">{children}</div>
          <div className="border-l w-3/12  border-gray-300">
            <Others />
          </div>
        </div>
      </body>
    </html>
  );
}
