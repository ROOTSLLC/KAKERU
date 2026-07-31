const benefits = [
  ["01", "純チタン", "医療機器にも用いられる、軽くて錆びにくい素材。毎日の口元に、妥協しない清潔感を。"],
  ["02", "自分仕様", "市販の好きなフロスを巻くだけ。太さも香りも、その日の気分に合わせられます。"],
  ["03", "日本製", "福井県の職人が、一つひとつ丁寧に仕上げる。薄さ1mmの繊細なかたちです。"],
];

const steps = [
  ["1", "フロスを約25cmに切る"],
  ["2", "先端の溝に糸をかける"],
  ["3", "持ち手に数回巻きつける"],
  ["4", "しっかり張って準備完了"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="KAKERU トップへ">KAKERU<span>MY FLOSS HANDLE</span></a>
        <a className="navCta" href="#offer">先行価格を見る</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">MADE IN JAPAN · PURE TITANIUM</p>
          <h1>磨いたあとの<br /><em>スッキリ感</em>が、変わる。</h1>
          <p className="lead">市販の糸を巻くだけ。<br />歯のすき間に、すっと届くフロス交換ハンドル。</p>
          <div className="heroActions">
            <a className="primary" href="#offer">超早割 30%OFFで応援購入</a>
            <span>限定30個 · 4,550円（税込）</span>
          </div>
        </div>
        <div className="heroVisual">
          <div className="halo" />
          <img src="/product/hero.png" alt="純チタン製フロス交換ハンドル KAKERU" />
          <p className="vertical">あなたの歯間に、<br />合わせられる。</p>
        </div>
        <div className="scroll">SCROLL</div>
      </section>

      <section className="factBand">
        <p>歯ブラシだけでは</p>
        <strong>歯垢の約<span>60%</span>しか<br />落とせません。</strong>
        <p>だから、毎日のフロスをもっと気持ちよく。</p>
      </section>

      <section className="problem section">
        <div className="sectionTitle">
          <p>DO YOU HAVE THESE PROBLEMS?</p>
          <h2>こんなお悩み、<br />ありませんか？</h2>
        </div>
        <ul className="checks">
          <li>フロスが毎日続かない</li>
          <li>市販ホルダーは歯間に入りにくい</li>
          <li>糸を指に巻くと痛い</li>
          <li>洗面台に置きたくなる道具がない</li>
        </ul>
        <img src="/product/hand.png" alt="手のひらに収まるKAKERU" />
      </section>

      <section className="statement">
        <p>自分の歯間に合わせられるから、<br />詰まった汚れを、ごっそり。</p>
        <h2>たどり着いたのは、<br /><span>「糸を選べる」</span>という答え。</h2>
      </section>

      <section className="features section">
        <div className="featureIntro">
          <p className="eyebrow">WHY KAKERU?</p>
          <h2>たった2g。<br />一生ものの、<br />フロス習慣。</h2>
        </div>
        <div className="featureGrid">
          {benefits.map(([num, title, body]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="imageStory">
        <div><img src="/product/detail.png" alt="薄さ1mmの純チタン製フロスハンドル" /></div>
        <div className="imageStoryCopy">
          <p>THIN AS 1MM</p>
          <h2>奥歯まで、<br />引っかからず、<br /><em>スッと届く。</em></h2>
          <p>4箇所固定で糸をしっかり張れる設計。薄く、軽く、指先の感覚まで伝わります。</p>
        </div>
      </section>

      <section className="howto section">
        <div className="howVisual"><img src="/product/threading.png" alt="KAKERUにフロス糸を取り付ける様子" /></div>
        <div className="howCopy">
          <p className="eyebrow">HOW TO USE</p>
          <h2>いつもの糸を、<br />巻くだけ。</h2>
          <ol>
            {steps.map(([num, text]) => <li key={num}><span>{num}</span>{text}</li>)}
          </ol>
        </div>
      </section>

      <section className="dentist">
        <blockquote>
          「歯ブラシだけでは届かない歯垢を取るには、<br />フロスが欠かせません。」
        </blockquote>
        <p>歯科衛生士　保谷馨子</p>
      </section>

      <section className="craft section">
        <div className="craftCopy">
          <p className="eyebrow">CRAFTED IN FUKUI</p>
          <h2>医療機器も手がける、<br />国内工場の品質。</h2>
          <p>純度99%以上の日本製純チタン TP340を使用。福井県の職人が、繊細な加工と丁寧な磨きで仕上げています。</p>
        </div>
        <img src="/product/craft.png" alt="福井県の工場で行われるチタン加工" />
      </section>

      <section className="eco">
        <div><b>365</b><span>DAYS</span></div>
        <p>捨てるのは、使ったフロス糸だけ。<br />プラスチックごみを減らし、<br />お財布にも、環境にもやさしい毎日へ。</p>
      </section>

      <section className="offer section" id="offer">
        <div className="offerCard">
          <p className="eyebrow">Makuake 先行販売</p>
          <h2>毎日のケアを、<br />今日から変える。</h2>
          <div className="price"><span>超早割<br /><b>30% OFF</b></span><strong>4,550<small>円（税込）</small></strong></div>
          <p className="limited">一般販売予定価格 6,500円 · 限定30個</p>
          <a className="primary large" href="#" aria-label="MakuakeでKAKERUを応援購入する">Makuakeで応援購入する <span>→</span></a>
          <p className="note">KAKERU本体 / 専用ケース / 取扱説明書</p>
        </div>
        <img src="/product/pouch.png" alt="持ち運びにも便利な専用ケース" />
      </section>

      <footer>
        <div className="brand">KAKERU<span>MY FLOSS HANDLE</span></div>
        <p>合同会社ROOTS</p>
        <small>© 2026 ROOTS. All Rights Reserved.</small>
      </footer>

      <a className="stickyCta" href="#offer">先行価格で応援購入 <span>→</span></a>
    </main>
  );
}
