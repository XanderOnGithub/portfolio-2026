import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import { PlainThemeProvider } from "@/features/plain-theme/providers";
import { NavBar } from "@/features/navigation/components/navbar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xander Reyes",
  description: "Portfolio website for Xander Reyes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`simple:font-serif ${inter.className}`}>
      <body>
        {/* Plain Theme Provider handles the "plain theme" that turns the site into a plain HTML looking site */}
        <PlainThemeProvider>
          {/* Theme Provider handles "theme switching" which allows for Light, Warm, and Dark mode */}
          <ThemeProvider
            attribute="data-theme"
            enableSystem={true}
            disableTransitionOnChange={false}
            defaultTheme="system"
          >
          <div className="flex flex-col max-w-5xl mx-auto">
            <NavBar />
            {children}
          </div>
          </ThemeProvider>
        </PlainThemeProvider>
      </body>
    </html>
  );
}
