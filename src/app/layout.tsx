import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { PlainThemeProvider } from "@/features/plain-theme/providers";

import "./globals.css";


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
    <html lang="en" suppressHydrationWarning>
      <body className="simple:font-serif">
        {/* Plain Theme Provider handles the "plain theme" that turns the site into a plain HTML looking site */}
        <PlainThemeProvider>
          {/* Theme Provider handles "theme switching" which allows for Light, Warm, and Dark mode */}
          <ThemeProvider
            attribute="data-theme"
            enableSystem={true}
            disableTransitionOnChange={false}
            defaultTheme="system"
          >
            {children}
          </ThemeProvider>
        </PlainThemeProvider>
      </body>
    </html>
  );
}
