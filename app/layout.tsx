import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "London Marathon 2025",
  description: "Fundraising for the London Marathon 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dim">
      <body>
        {children}
      </body>
    </html>
  );
}
