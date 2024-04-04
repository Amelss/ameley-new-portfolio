import "@/styles/globals.css";
import Layout from "@/components/Layout";
import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat-Black.ttf",
      weight: "900",
    },
    {
      path: "../public/fonts/Montserrat-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Montserrat-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Montserrat-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Montserrat-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Montserrat-Thin.ttf",
      weight: "100",
    },
  ],

  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Layout>
        
        <Component {...pageProps} />
      
      </Layout>
      
    </main>
    
  );
}
