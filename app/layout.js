import { Inter } from "next/font/google";
import "./globals.css";
import ogImg from '/ogimg.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "10th & 12th बोर्ड का रिजल्ट घोषित",
  description: "10th & 12th बोर्ड का रिजल्ट घोषित 2024 ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta property="og:title" content="जल्दी Result यहाँ देखे..."/>
<meta property="og:site_name" content="Result check"/>
<meta property="og:url" content="htttps//:google.com"/>
<meta property="og:type" content="website"/>
<meta property="og:description" content="10th & 12th बोर्ड का रिजल्ट घोषित 2024 ..."/>
<meta property="og:image" content={ogImg}/>
<meta property="og:image" content=""/>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
