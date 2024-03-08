import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "../components/transitionProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carl Clifton Portfolio App",
  description:
    "Portfolio page of Carl Clifton, Manchester based front end developer and graphic designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[#271624]`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
