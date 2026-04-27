import type { Metadata } from "next";
import "./globals.css";
import StickyButtons from "@/components/StickyButtons";

export const metadata: Metadata = {
  title: "The Stellaar – Premium Family Club | Nagpur",
  description: "Experience the best club in Nagpur. The Stellaar is Nagpur's most exclusive premium family club offering luxury fitness, fine dining, and event banquets. Limited memberships available.",
  keywords: "Best club in Nagpur, Premium family club Nagpur, Swimming pool membership Nagpur, Banquet hall Ajni Nagpur, Premium gym Nagpur, luxury club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-black text-white">
        {children}
        <StickyButtons />
      </body>
    </html>
  );
}
