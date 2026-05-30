import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morgan O'Loughlin",
  description: "Data scientist, global health enthusiast, and builder of things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-card-border py-6 text-center text-sm text-muted">
          <div className="flex justify-center gap-6">
            <a href="mailto:moloughlin16@gmail.com" className="hover:text-accent transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/morgan-oloughlin/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
