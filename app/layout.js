
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "বাজার দর | নিত্যপণ্যের আজকের দাম",
  description:
    "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম এক নজরে দেখুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
