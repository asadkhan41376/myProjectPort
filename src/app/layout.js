import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";
import CustomCurser from "@/components/customCurser";
import "@fontsource/jost"; // Defaults to weight 400
import "@fontsource/jost/100.css"; // Specify weight
// import "@fontsource/jost/100-italic.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio_Asad",
  description: "Portfolio_Asad",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/favicon/developer.png" sizes="any" />
      </head>
      <body className={inter.className} >
    
      
      <Header/>
      <CustomCurser className="hide_mobile"/>
        {children}
        <ScrollTop/>
        <Footer/>
   
        </body>
      
    </html>
  );
}
