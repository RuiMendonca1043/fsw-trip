import { NextAuthProvider } from "@/providers/auth";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/Header";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FSW-Trips",
  description: "Agenda a tua próxima viagem!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
