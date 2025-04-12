import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Aguda | Software Engineer",
  description: "",
  keywords: [],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  other: {
    'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet, notranslate, noimageindex',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex,nofollow,noarchive,nositelinkssearchbox,nosnippet,notranslate,noimageindex" />
        <meta name="googlebot" content="noindex,nofollow,noarchive,nositelinkssearchbox,nosnippet,notranslate,noimageindex" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
