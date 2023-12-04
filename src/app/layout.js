import { Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import dynamic from "next/dynamic";
const Playfair = Playfair_Display({ subsets: ["latin"], variable: "--play" });

const Footer = dynamic(() => import("@/components/footer/Footer"));
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Playfair.variable} font-play`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
