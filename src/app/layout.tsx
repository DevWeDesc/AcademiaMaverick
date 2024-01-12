import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../../Context/AppContext";

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
      <link rel="icon" sizes="32x32" />
      <AppContextProvider>
        <body className={inter.className}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
