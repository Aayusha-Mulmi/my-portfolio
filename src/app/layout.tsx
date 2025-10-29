import { Metadata } from "next";
import { Philosopher, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Aayusha Mulmi",
  description: "Aayusha Portfolio",
   icons: {
    icon: "/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable}, ${philosopher.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
