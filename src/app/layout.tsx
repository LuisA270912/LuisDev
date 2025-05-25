import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Luis Dev",
  description: "Portafolio personal de Luis, desarrollador Full Stack especializado en crear aplicaciones web modernas y escalables.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
