import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
