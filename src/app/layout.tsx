import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "LitCycle",
  description: "Buy, sell, and trade your favorite books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}