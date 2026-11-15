import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajeev Yadav — Frontend Developer & UI Builder",
  description: "Personal developer portfolio of Rajeev Yadav — Frontend Developer & UI Builder from Varanasi, India. Specialized in React, Next.js, TypeScript, and modern CSS architecture.",
  authors: [{ name: "Rajeev Yadav" }],
  keywords: ["Rajeev Yadav", "Frontend Developer", "React Developer", "Next.js", "Portfolio", "Varanasi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
