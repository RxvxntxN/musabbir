// app/layout.tsx

// NO 'use client' directive here!
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Montserrat } from 'next/font/google';
import './globals.css';
import ContactWrapper from '@/app/components/ContentWrapper'; // We will create this next

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

// This is now valid because layout.tsx is a Server Component
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
          //disableTransitionOnChange
        >
          {children}
          {/* new wrapper component here */}
          <ContactWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
