import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/SharedItems/Navbar";
import Footer from "@/Components/SharedItems/Footer";
import AuthProvider from "@/context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nutryvo – Your Smart Companion for Daily Wellness",
  description: "",
  icons: "/assets/nutryvo.logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
         <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <AuthProvider>
            <Navbar/>
            <div className="min-h-screen">
              {children}
            </div>
            <Footer/>
          </AuthProvider>
        </body>  
    </html>
  );
}
