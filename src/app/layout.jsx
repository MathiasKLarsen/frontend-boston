import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata = {
  title: "BostonGaming",
  description: "BostonGaming webstore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${lato.variable} antialiased min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
