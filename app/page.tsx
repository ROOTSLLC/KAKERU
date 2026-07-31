const lineUrl = "#line-register";

const points = [
  {
    image: "/product/hand.png",
    title: "市販の糸を、自由に選べる",
    body: "好みの太さ、ワックス、香り。その日の気分や歯間に合わせて、いつものフロスを巻くだけ。",
  },
  {
    image: "/product/detail.png",
    title: "薄さ1mm。奥歯までスッと届く",
    body: "薄く、軽く、指先の感覚まで伝わる設計。狙った歯間へ無理なく届きます。",
  },
  {
    image: "/product/craft.png",
    title: "純チタン × 信頼の日本製",
    body: "純度99%以上の日本製純チタン TP340を使用。福井県の職人が、一つひとつ丁寧に仕上げます。",
  },
  {
    image: "/product/pouch.png",
    title: "ずっと使える、一生もの",
    body: "錆びにくく、軽くて丈夫。使い終わったら洗って、専用ケースへ。捨てるのは糸だけです。",
  },
];

function LineButton({ label = "LINEで友だち追加" }: { label?: string }) {
  return (
    <a className="lineButton" href={lineUrl} aria-label={label}>
      <span className="lineIcon">LINE</span>
      <b>{label}</b>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="teaserHero">
        <div className="heroGlow" />
        <div className="heroText">
          <p className="kicker">純チタンが、フロス習慣を変える。</p>
          <h1>市販の糸を<br />巻くだけ。</h1>
          <p className="sub">PURE TITANIUM FLOSS HANDLE</p>
        </div>
        <img src="/product/hero.png" alt="純チタン製フロス交換ハンドル KAKERU" />
        <div className="heroBrand">KAKERU<span>MY FLOSS HANDLE</span></div>
      </section>

      <section className="lineOffer" id="line-register">
        <p className="pre">初回案内は、<em>LINE先行。</em></p>
        <h2><span>＼</span> Makuake公開予定 <span>／</span></h2>
        <div className="discount">最大<strong>30%</strong>OFF<small>＋LINE限定特典</small></div>
        <LineButton />
        <p className="coupon">LINE登録者限定の先行情報をお届け</p>
        <p className="caption">最も条件の良いご案内は、LINEにて。</p>
      </section>

      <section className="intro">
        <p>ひとつの習慣で、<br />磨いたあとの爽快感が変わる。</p>
        <div className="ornament"><i /><span>KAKERU<br /><small>4つのポイント</small></span><i /></div>
      </section>

      <section className="points">
        {points.map((point, index) => (
          <article key={point.title}>
            <div className="pointNo">POINT 0{index + 1}</div>
            <img src={point.image} alt={point.title} />
            <div className="pointCopy">
              <h2>{point.title}</h2>
              <p>{point.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="reveal">
        <p>毎日のケアを、<br /><strong>“ワンランク上”</strong>に整える一本。</p>
        <span>公開まで、あと少し。</span>
        <div className="productReveal">
          <img src="/product/in-use.png" alt="KAKERUを使用する様子" />
          <div className="revealLogo">KAKERU<small>PURE TITANIUM · MADE IN JAPAN</small></div>
        </div>
      </section>

      <section className="finalOffer">
        <p>ここまで読んでくださった方へ。<br />公開日・先行価格・限定数を<br />LINEでいち早くお届けします。</p>
        <h2><span>＼</span> 一番お得なのはLINEから <span>／</span></h2>
        <div className="discount">最大<strong>30%</strong>OFF<small>＋LINE限定特典</small></div>
        <LineButton label="友だち追加して先行案内を受け取る" />
        <p className="privacy">【個人情報利用目的】<br />お預かりした情報は、商品の先行販売・一般販売に関するご案内のみに利用します。</p>
      </section>

      <footer>
        <div className="footerBrand">KAKERU<span>MY FLOSS HANDLE</span></div>
        <p>合同会社ROOTS</p>
        <small>Copyright © 2026 ROOTS</small>
      </footer>

      <a className="stickyLine" href={lineUrl}><span className="lineIcon">LINE</span><b>友だち追加</b></a>
    </main>
  );
}
