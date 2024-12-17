import type { Metadata } from "next";
import "./globals.css";

import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import { Toaster } from "sonner";

// SEO meta tags
export const metadata: Metadata = {
  title: "Akivee GSphere - Digital Marketing Solutions",
  description:
    "Akivee GSphere helps businesses grow with tailored digital marketing strategies, including SEO, web design, and email marketing.",
  keywords:
    "digital marketing, SEO optimization, web design, email marketing, business growth, branding solutions , logo design",
  openGraph: {
    title: "Akivee GSphere - Digital Marketing Solutions",
    description:
      "Helping businesses thrive through innovative marketing solutions.",
    url: "https://www.akivee.com",
    images: [
      {
        url: "/images/logo.png", // Replace with the actual logo URL
        width: 800,
        height: 800,
        alt: "Akivee GSphere Logo",
      },
    ],
    siteName: "Akivee GSphere",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akivee GSphere - Digital Marketing Solutions",
    description:
      "Driving growth for businesses through tailored digital marketing.",
    images: ["/images/logo.png"], // Replace with the actual logo URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={` antialiased`}>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
