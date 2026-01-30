// import { Geist, Geist_Mono } from "next/font/google";
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const overpassMono = Overpass_Mono({
  variable: "--bold",
  subsets: ["latin"],
  weight: "300",
});
const overpassMono2 = Overpass_Mono({
  variable: "--bold",
  subsets: ["latin"],
  weight: "400",
});
const overpassMonoBold = Overpass_Mono({
  variable: "--bold",
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Neon Game Reviews & Social",
  description: "Neon Game Reviews: Congregate and Requiem",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${overpassMono.className} ${overpassMono2.className} ${overpassMonoBold.className}`}
        >
          <Nav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
