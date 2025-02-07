import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "@/utils/fonts";
import { Providers } from "@/providers/AuthProvider";

export const metadata: Metadata = {
  title: "Umurava App",
  description: "Umurava skills challenge ( Landing page and Dashboard )",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={`${workSans.className} antialiased`} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
