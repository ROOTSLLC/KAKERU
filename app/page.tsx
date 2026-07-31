export default function Home() {
  return (
    <main>
      <section className="introArtwork" aria-label="KAKERU 商品紹介">
        <img
          src="/intro-v1.jpg"
          alt="あなたの歯間に合わせられる。市販のフロス糸を替えるだけ。薄さ1mmで奥歯まで引っかからずスッと届く、チタン製フロスハンドル KAKERU"
        />
        <section className="lineRegistration" id="line-registration">
          <p className="lineLead">初回のご案内は、LINE先行。</p>
          <h2>お得な先行情報を<br />いち早くお届けします。</h2>
          <div className="lineBenefit">
            <span>最大</span>
            <strong>33<small>%</small></strong>
            <b>OFF</b>
          </div>
          <div className="plus">＋</div>
          <p className="coupon"><strong>500円</strong>クーポン<br /><span>発行予定</span></p>
          <a className="lineButton" href="#line-registration" aria-label="LINEで友だち追加">
            <span className="lineMark">LINE</span>
            <b>友だち追加</b>
          </a>
          <p className="lineNote">登録は無料です。<br />販売開始日・限定数・先行価格をLINEでお知らせします。</p>
        </section>
        <img
          src="/pro-review.png"
          alt="プロに聞くKAKERUの魅力。歯科衛生士・帆保智子さんによる推薦コメント"
        />
        <img
          src="/point-01-titanium.png"
          alt="POINT 01 日本製、純度99%以上の純チタンを使用。錆びにくく丈夫な一生もの"
        />
        <img
          src="/point-02-thin-light.png"
          alt="POINT 02 薄さ1mmで奥歯までしっかり届き、わずか2gで手が疲れにくい"
        />
      </section>
      <div className="continuation" aria-hidden="true" />
    </main>
  );
}
