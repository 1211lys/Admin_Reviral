import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Snb from "./components/Snb";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "리바이럴 어드민",
  description: "리바이럴 어드민 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <Snb />
        <div className="ml-[200px]">{children}</div>
      </body>
    </html>
  );
}
