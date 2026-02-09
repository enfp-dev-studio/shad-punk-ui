import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shad-Punk/ui",
  description: "Mech combat & cyberpunk UI component library — Edgerunners + Armored Core",
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/augmented-ui.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=Share+Tech+Mono&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="edgerunners"
          themes={["edgerunners", "armored-core"]}
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
