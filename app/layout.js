import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "10th & 12th बोर्ड का रिजल्ट घोषित",
  description: "10th & 12th बोर्ड का रिजल्ट घोषित 2024 ...",
  openGraph: {
    title: 'जल्दी Result यहाँ देखे...',
    description: '10th & 12th बोर्ड का रिजल्ट घोषित 2024 ...',
    url: 'https://google.com',
    siteName: "result.org",
    type: 'website',
    images: [
      {
        url: './ogimg.png',
        alt: "Result"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
