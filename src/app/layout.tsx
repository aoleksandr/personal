import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksandr Akhriutin",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800 p-10">
        {children}
      </body>
    </html>
  );
}
