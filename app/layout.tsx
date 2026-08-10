import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zahnarztpraxis Klaus Blumenthal · Saarbrücken",
  description:
    "Ganzheitliche Zahnmedizin in Saarbrücken. Prophylaxe, Zahnerhalt, Zahnersatz, Parodontose, Endodontie und ästhetische Zahnheilkunde. Laufertstraße 12, 66115 Saarbrücken.",
  metadataBase: new URL("https://zahnarzt-blumenthal.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper-100 text-ink-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
