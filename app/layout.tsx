import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAKERU | 先行案内はLINEから",
  description: "市販の糸を巻くだけ。純チタン製フロス交換ハンドルKAKERUの公開日・先行価格をLINEでお届けします。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "市販の糸を巻くだけ。| KAKERU",
    description: "公開日・先行価格・限定数をLINEでいち早くお届けします。",
    type: "website",
    images: [{ url: "/og-white.png", width: 1200, height: 630, alt: "KAKERU 先行案内はLINEから" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "市販の糸を巻くだけ。| KAKERU",
    description: "純チタン製フロス交換ハンドル。先行案内はLINEから。",
    images: ["/og-white.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
