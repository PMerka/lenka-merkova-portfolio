import type { Metadata } from "next";
import { Inter, Arimo, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const cinzel_init = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cinzel",
});

const arimo_init = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "Lenka Měrková",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${cinzel_init.variable} ${arimo_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
