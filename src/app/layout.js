import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/LineIcons.2.0.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/tailwind.css";
import "../../public/assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume Builder",
  description: "Resume Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
