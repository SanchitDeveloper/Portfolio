import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Sanchit Chauhuan | Full Stack Developer',
  description:
    'Portfolio of Sanchit Chauhuan, a full stack developer specializing in modern web applications with beautiful animations and exceptional user experiences.',
  keywords: [
    'developer',
    'web developer',
    'full stack',
    'portfolio',
    'React',
    'Next.js',
    'frontend',
    'animations'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
