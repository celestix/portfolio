import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "i love rust. it's my favorite language",
  description: "PROUD RUST USER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
