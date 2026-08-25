import { Syne, Source_Sans_3 } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sujay Subramanyam",
    template: "%s | Sujay Subramanyam",
  },
  description:
    "Portfolio of Sujay Subramanyam — design, software development, and product work across case studies, writing, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
