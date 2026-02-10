import type { Metadata } from "next";
import Script from "next/script";
import { Nanum_Myeongjo } from "next/font/google";
import ScrollToTop from "./ScrollToTop";
import TopBanner from "./TopBanner";
import "./globals.css";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-myeongjo",
});

export const metadata: Metadata = {
  title: "심리 검사 서비스",
  description: "심리 검사 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased hanji-background ${nanumMyeongjo.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Y6DZNTRN0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Y6DZNTRN0');
          `}
        </Script>
        <ScrollToTop />
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
