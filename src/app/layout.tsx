import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SideMenu from "@/components/layout/SideMenu";

const inter = Tajawal({ subsets: ["arabic"], weight:['400', '700', '500'], variable:'--tajawal' });

export const metadata: Metadata = {
  title: "حصن المسلم من أذكار الكتاب والسنة",
  description: "كتاب حصن المسلم من أذكار الكتاب والسنة يجمع أذكار وأدعية النبي صلى الله عليه وسلم الصحيحة في مختلف مجالات الحياة اليومية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow flex bg-slate-100 max-h-screen h-0 overflow-hidden relative">
          <SideMenu/>
          <div className="container mx-auto py-10 px-4 max-h-screen overflow-y-auto">
          {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
