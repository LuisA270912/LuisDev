import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "./globals.css";

// Crea la constante inter correctamente
const inter = Inter({
  subsets: ['latin'], // Aquí puedes elegir los subsets que necesites
});

export const metadata: Metadata = {
  title: "Luis Dev",
  description: "Portafolio personal de Luis, desarrollador Full Stack especializado en crear aplicaciones web modernas y escalables.",
  icons: {
    icon: "/favicon.ico", // ruta dentro de /public
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
  
        {children}      
      </body>
    </html>
  );
}
