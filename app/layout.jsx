import "./globals.css"// make sure path is correct
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DevAuth App",
  description: "A simple auth system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Navbar />
        {/* The Navbar component is included here to ensure it appears on all pages */}
        {children}
      </body>
    </html>
  );
}

