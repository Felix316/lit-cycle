import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";


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
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}