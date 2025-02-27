import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sofia-sans",
});

export const metadata: Metadata = {
  title: "Wooma | Secure Your Rental Deposit",
  description: "Wooma helps UK tenants protect their deposits against unfair landlord practices. Coming soon!",
  themeColor: "#00C802",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sofiaSans.className} ${sofiaSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
