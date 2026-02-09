import type { Metadata } from "next";
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
        <ScrollToTop />
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
