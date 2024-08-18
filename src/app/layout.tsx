import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const url = "https://example.com"; // Replace the URL
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "ABC Pre Registration | Join the ABC Beta Users",
  description: "Pre-register for ABC and become a beta user. Get early access and be part of the exclusive ABC community.",
  keywords: ["ABC Pre Register", "ABC Beta", "ABC Swami", "Early Access", "Exclusive Community"],
  openGraph: {
    title: "ABC Pre Registration - Join the ABC Beta Users",
    description: "Pre-register for ABC and get early access. Become a beta user and be part of the exclusive ABC community.",
    url,
    type: "website",
    images: [
      {
        url: `${url}/banner.png`, // Corrected string interpolation
        width: 1200,
        height: 630,
        alt: "ABC Pre Register Banner",
      },
    ],
    siteName: "ABC Pre Register",
  },
  alternates: {
    canonical: url,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ABCTwitterHandle", // Replace with ABC Twitter handle later
    title: "ABC Pre Registration | Join the ABC Beta Users",
    description: "Pre-register for ABC and get early access. Become a beta user and be part of the exclusive ABC community.",
    images: [`${url}/banner.png`],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${url}/favicon.ico`} />
      </head>
      <body className={poppins.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div className="max-w-[393px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
