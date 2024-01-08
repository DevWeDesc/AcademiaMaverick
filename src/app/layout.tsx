import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../../Context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academia Maverick",
  description: "Academia Maverick",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={inter.className}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
