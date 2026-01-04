import type { Metadata } from "next";
import {
  Inter,
  Arimo,
  Amatic_SC,
  IBM_Plex_Sans,
  Oooh_Baby,
} from "next/font/google";
import "./globals.css";
import metadataJSON from "/content/metadata.json";

const inter = Inter({ subsets: ["latin"] });

const cinzel_init = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-cinzel",
});

const oooh_Baby = Oooh_Baby({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--oooh-baby",
});

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amaticSC",
});

const arimo_init = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  icons: {
    icon: metadataJSON.favicon,
  },
  title: metadataJSON.title,
  description: metadataJSON.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${cinzel_init.variable} ${arimo_init.variable} ${amaticSC.variable} ${oooh_Baby.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
