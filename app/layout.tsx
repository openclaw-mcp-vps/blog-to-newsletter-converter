import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog to Newsletter Converter – Instant AI-Powered Conversion",
  description: "Transform your blog posts into newsletter-optimized format with subject lines, CTAs, and mobile-friendly layouts instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e0322187-b276-487e-aa32-95bbb49907d4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
