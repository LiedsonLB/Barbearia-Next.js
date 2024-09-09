import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbershop Next",
  description: "Barbershop Next teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark`}
      >
        {children}
      </body>
    </html>
  );
}
