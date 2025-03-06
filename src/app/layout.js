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
  title: "Mohammad Asad Portfolio | Full Stack Developer in Udaipur",
  description: "Mohammad Asad - Full Stack Developer based in Udaipur, specializing in modern web development and creative design.",
  keywords: [
    "Mohammad Asad Portfolio",
    "mohammad asad Portfolio",
    "Full Stack Developer in Udaipur",
    "Web Developer Udaipur",
    "Frontend Developer Udaipur",
    "Website Developer Udaipur",
    "Freelance Web Developer Udaipur",
    "Website Designer Udaipur",
    "Web Development Services Udaipur"
  ],
  author: "Mohammad Asad",
  openGraph: {
    title: "Mohammad Asad Portfolio | Full Stack Developer in Udaipur",
    description: "Explore Mohammad Asad's portfolio, a Full Stack Developer from Udaipur delivering modern web solutions.",
    url: "https://my-project-port.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://my-project-port.vercel.app/img/favicon/developer.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Asad Portfolio Image"
      }
    ],
    site_name: "Mohammad Asad Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    site: "@asad_portfolio",
    creator: "@asad_portfolio",
    title: "Mohammad Asad | Full Stack Developer Portfolio",
    description: "Explore Mohammad Asad's web development projects and services in Udaipur.",
    images: ["https://my-project-port.vercel.app/img/favicon/developer.png"]
  }
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
