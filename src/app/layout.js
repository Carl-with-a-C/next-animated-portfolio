import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "../components/transitionProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carl Clifton Portfolio",
  description:
    "Portfolio page of Carl Clifton, Manchester based front end developer and graphic designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <body className={`${inter.className} text-[#271624]`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
