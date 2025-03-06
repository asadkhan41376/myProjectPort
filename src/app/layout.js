import { Inter } from "next/font/google";
import "./globals.scss";
import ScrollTop from "@/components/ScrollTop";
import CustomCurser from "@/components/customCurser";
import "@fontsource/jost"; // Defaults to weight 400
import "@fontsource/jost/100.css"; // Specify weight
import WebLayOut from "@/layout";
// import "@fontsource/jost/100-italic.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Asad | Full Stack Developer Portfolio",
  description: "Welcome to Mohammad Asad's portfolio website showcasing web development projects, skills, and services.",
  keywords: [
    "Mohammad Asad",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Web Development Services",
    "SEO Optimized Website"
  ],
  author: "Mohammad Asad",
  robots: "index, follow",
  openGraph: {
    title: "Mohammad Asad | Full Stack Developer Portfolio",
    description: "Explore Mohammad Asad's web development projects and services.",
    url: "https://my-project-port.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://my-project-port.vercel.app/img/favicon/developer.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Asad Portfolio Website",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@asad_portfolio",
    creator: "@asad_portfolio",
    title: "Mohammad Asad | Full Stack Developer Portfolio",
    description: "Explore Mohammad Asad's web development projects and services.",
    image: "https://my-project-port.vercel.app/img/favicon/developer.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/favicon/developer.png" sizes="any" />
      </head>
      <body className={inter.className} >
    
      
<WebLayOut>
      <CustomCurser className="hide_mobile"/>
        {children}
        <ScrollTop/>
        </WebLayOut>
      
   
        </body>
      
    </html>
  );
}
