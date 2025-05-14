import { Lato } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
