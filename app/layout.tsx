import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-C2KFNYCETX";

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
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');

            document.addEventListener('click', function (event) {
              var link = event.target.closest('.lineButton');
              if (!link) return;
              gtag('event', 'line_registration_click', {
                link_url: link.href,
                link_text: link.textContent.trim()
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
