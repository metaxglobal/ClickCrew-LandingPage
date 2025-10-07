import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickCrew - Launching Soon",
  description: "We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.",
  keywords: ["ClickCrew", "freelancers", "brands", "connect", "collaboration"],
  authors: [{ name: "ClickCrew" }],
  icons: {
        icon: '/favicon.png', // Path to your PNG favicon in the public directory
      },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
