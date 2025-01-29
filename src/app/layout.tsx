import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Umurava App",
  description: "Umurava skills challenge ( Landing page and Dashboard )",
};

export default function RootLayout({ children }: { children: React.ReactNode, types: string }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
