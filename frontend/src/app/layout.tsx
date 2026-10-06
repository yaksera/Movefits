import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Move Fits — The Architecture of Movement",
  description:
    "MoveFit is a restorative sanctuary engineered for disciplined physical mastery, bespoke musculoskeletal conditioning, and quiet cognitive stillness.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${archivo.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        {/* Flags JS so animated elements stay hidden until GSAP reveals them (no flash of content) */}
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        {children}
      </body>
    </html>
  );
}
