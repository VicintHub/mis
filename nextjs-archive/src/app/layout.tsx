import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MIV Strategic Initiative — National Transformation Outreach",
    template: "%s | MIV Strategic Initiative",
  },
  description: "We convene the leaders who shape academia, security, business, and traditional governance — bringing leadership development, capacity building, and practical support to Nigeria's key sectors.",
  icons: {
    icon: "/images/favicon.avif",
  },
  openGraph: {
    title: "MIV Strategic Initiative — National Transformation Outreach",
    description: "Equipping leaders of integrity across Nigeria's strategic sectors—academia, security, business, and traditional leadership.",
    url: "https://mivstrategicinitiative.com.ng",
    siteName: "MIV Strategic Initiative",
    images: [
      {
        url: "/images/msi-logo.webp",
        width: 1200,
        height: 630,
        alt: "MIV Strategic Initiative Banner",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${ibmPlexMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink font-sans selection:bg-navy selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
