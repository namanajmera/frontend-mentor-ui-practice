import {
  Geist,
  Geist_Mono,
  Outfit,
  Montserrat,
  Fraunces,
  Poppins,
  Barlow_Semi_Condensed,
  Manrope,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adjust weights as needed
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700"], // Include only 500 and 700
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"], // Only 700
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlowSemiCondensed",
  subsets: ["latin"],
  weight: ["200", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${montserrat.variable} ${fraunces.variable} ${poppins.variable} ${barlowSemiCondensed.variable} ${manrope.variable} antialiased h-screen w-full`}
      >
        {children}
      </body>
    </html>
  );
}
