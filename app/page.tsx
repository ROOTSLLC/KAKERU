export default function Home() {
  return (
    <main>
      <section className="introArtwork" aria-label="KAKERU 商品紹介">
        <img
          src="/intro-v1.jpg"
          alt="あなたの歯間に合わせられる。市販のフロス糸を替えるだけ。薄さ1mmで奥歯まで引っかからずスッと届く、チタン製フロスハンドル KAKERU"
        />
        <img
          src="/domestic-titanium.png"
          alt="国産、純チタン製のフロス交換ハンドル"
        />
      </section>
      <div className="continuation" aria-hidden="true" />
    </main>
  );
}
