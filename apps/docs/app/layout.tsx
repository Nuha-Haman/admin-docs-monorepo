import type { Metadata } from "next";

import "ui/globals.css";

export const metadata: Metadata = {
  title: "Documentation Site",
  description: "Monorepo documentation site using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
