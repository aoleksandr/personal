import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksandr Akhriutin",
  description: "Personal website",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨‍💻</text></svg>"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased p-10">
        {children}
      </body>
    </html>
  );
}
