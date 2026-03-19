import type { Metadata } from "next";
import "@/app/index.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const title = "CodeNyx | 36-Hour Hackathon by GDG on Campus CVR College of Engineering";
const description =
  "CodeNyx is a 36-hour hackathon organized by GDG on Campus CVR College of Engineering, where student developers, designers, and innovators come together to build, compete, and create. Hack through the night, ship bold ideas, and make your mark.";
const authors = [
  { name: "Eswar Dudi" },
  { name: "Mantripragada Komal Sathvik" },
  { name: "Sadhu Sreeja" },
];
const creator = "GDG on Campus CVR College of Engineering";
const url = "https://code-nyx.tech";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "GDG on Campus CVR College of Engineering",
    "CodeNyx",
    "36 hour hackathon",
    "Hackathon",
    "Ideathon",
    "GDG",
    "GDG Events",
    "CVR",
    "GDG on Campus CVR",
  ],
  authors,
  creator,
  icons: "https://code-nyx.tech/favicon.ico",
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: "CodeNyx | 36-Hour Hackathon by GDG on Campus CVR",
    locale: "en_US",
    images: [{ url: "https://code-nyx.tech/ss.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@gdsccvr",
    images: ["https://code-nyx.tech/ss.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black">
            <Navbar />
            <div id="root">{children}</div>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
