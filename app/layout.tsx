import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClickCrew - Launching Soon",
  description: "We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.",
  keywords: ["ClickCrew", "freelancers", "brands", "connect", "collaboration"],
  authors: [{ name: "ClickCrew" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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
