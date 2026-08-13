import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-C2KFNYCETX";
const META_PIXEL_ID = "1390254599695379";

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
              if (window.fbq) { fbq('track', 'Lead'); }
            });
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
