import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../../Context/AppContext";
import localFont from "next/font/local";

const winstone = localFont({
  src: "../fonts/freeWinstone.otf",
  variable: "--font-free-winstone",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academia Maverick",
  description: "Academia Maverick",
  verification: { google: "lHi74h9ib--2z_24ahizget1uL6kIkM6Igwj6gtFhqE" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="" sizes="32x32" />
      </head>
      <AppContextProvider>
        <body className={`${winstone.className} bg-black`}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
