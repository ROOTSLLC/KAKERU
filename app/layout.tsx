import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAKERU | 純チタン製フロス交換ハンドル",
  description: "あなたの歯間に合わせられる。市販のフロス糸を替えるだけの純チタン製フロス交換ハンドル。",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5THNBV4');`,
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5THNBV4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
