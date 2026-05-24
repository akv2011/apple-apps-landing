import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniket — Native macOS Apps",
  description:
    "Two native macOS applications built with Swift 6, SwiftUI, and on-device machine learning. Privacy-first software that never sends your data to the cloud.",
  keywords: [
    "Swift",
    "SwiftUI",
    "macOS",
    "on-device ML",
    "Apple Silicon",
    "Humanizer",
    "Voice Journal",
    "privacy",
    "MLX",
    "WhisperKit",
  ],
  authors: [{ name: "Aniket" }],
  openGraph: {
    title: "Aniket — Native macOS Apps",
    description:
      "Privacy-first macOS apps built with Swift 6 & on-device machine learning.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Display font: Fraunces — variable serif with optical sizing */}
        {/* Body font: Inter Tight — refined humanist sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
