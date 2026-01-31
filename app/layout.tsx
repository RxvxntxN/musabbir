import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: "Musabbir's Portfolio",
  description: "Welcome to Musabbir's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <body>
        <ThemeProvider
        attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
