import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S-lon Lanka | Water for Life - Thermoplastic Piping Systems",
  description: "Experience the premium scrollytelling showcase of S-lon Lanka. Pioneering high-quality, lead-free uPVC, Quickflow cPVC, HDPE pipes, rainwater gutters, and water pumps in Sri Lanka since 1957.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased select-none bg-slonBlue">
        {children}
      </body>
    </html>
  );
}
