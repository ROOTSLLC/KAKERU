import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAKERU | 純チタン製フロス交換ハンドル",
  description: "市販の糸を巻くだけ。日本製・純チタン製のフロス交換ハンドル KAKERU。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "磨いたあとのスッキリ感が、変わる。| KAKERU",
    description: "市販の糸を巻くだけ。日本製・純チタン製のフロス交換ハンドル。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
