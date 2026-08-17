export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <section className="introArtwork" aria-label="KAKERU 商品紹介">
        <img
          src={`${basePath}/intro-new-01-20260817.jpg`}
          alt="奥歯まで思い通り。狭い歯間も広い歯間も、糸の種類や張り具合を自分仕様に調整できるフロスハンドル"
        />
        <img
          src={`${basePath}/intro-new-02.jpg`}
          alt="歯間に合わせて調整できるから、狙ったすき間へしっかり届き、奥歯に残った汚れまで丁寧にかき出せる"
        />
        <img
          src={`${basePath}/intro-new-03.jpg`}
          alt="薄さわずか1mm。奥歯まで引っかかりにくく、スッと届く"
        />
        <img
          src={`${basePath}/intro-new-04.jpg`}
          alt="その取り残し感までスッキリ。一度使えば使い捨てには戻れない、日本の職人が作る純チタン製フロスハンドル"
        />
        <section className="lineRegistration" id="line-registration">
          <p className="lineLead">初回のご案内は、LINE先行。</p>
          <h2>お得な先行情報を<br />いち早くお届けします。</h2>
          <p className="launchNotice"><strong>9月初旬</strong><br />Makuakeで先行発売予定</p>
          <div className="lineBenefit">
            <span>最大</span>
            <strong>33<small>%</small></strong>
            <b>OFF</b>
          </div>
          <div className="plus">＋</div>
          <p className="coupon"><em>LINE登録者先行</em><strong>500円</strong>クーポン<br /><span>発行予定</span></p>
          <p className="ctaAssist">＼ 登録無料・LINE限定の先行特典 ／</p>
          <a className="lineButton" href="https://lin.ee/or3BWo5" aria-label="LINEで友だち追加">
            <span className="lineMark">LINE</span>
            <b>限定特典を受け取る</b>
          </a>
          <p className="lineNote">登録は無料です。<br />販売開始日・限定数・先行価格をLINEでお知らせします。</p>
        </section>
        <img
          src={`${basePath}/pro-review.png`}
          alt="プロに聞くKAKERUの魅力。歯科衛生士・帆保智子さんによる推薦コメント"
        />
        <img
          src={`${basePath}/point-01-titanium.png`}
          alt="POINT 01 日本製、純度99%以上の純チタンを使用。錆びにくく丈夫な一生もの"
        />
        <img
          src={`${basePath}/point-02-thin-light.png`}
          alt="POINT 02 薄さ1mmで奥歯までしっかり届き、わずか2gで手が疲れにくい"
        />
        <img
          src={`${basePath}/point-03-four-point-fukui.png`}
          alt="4箇所固定でフロスをしっかり張れる設計。福井県の職人技で製造"
        />
        <img
          className="point3Break"
          src={`${basePath}/point-04-floss-choice.png`}
          alt="POINT 03 歯間に合わせて最適な市販フロス糸を選べる"
        />
        <img
          src={`${basePath}/point-05-hanging-storage.png`}
          alt="POINT 04 水洗いして掛けて保管でき、場所を取らず衛生的"
        />
        <img
          src={`${basePath}/point-06-domestic-factory.png`}
          alt="POINT 05 医療機器も手がける福井県の国内工場と精密チタン加工の職人技"
        />
        <section className="lineRegistration finalLineRegistration" id="final-line-registration">
          <p className="finalMessage">ここまで読んでくださった方へ</p>
          <h2>最も条件の良いご案内を、<br />LINEでお届けします。</h2>
          <p className="launchNotice"><strong>9月初旬</strong><br />Makuakeで先行発売予定</p>
          <div className="lineBenefit">
            <span>最大</span>
            <strong>33<small>%</small></strong>
            <b>OFF</b>
          </div>
          <div className="plus">＋</div>
          <p className="coupon"><em>LINE登録者先行</em><strong>500円</strong>クーポン<br /><span>発行予定</span></p>
          <p className="ctaAssist">＼ 登録無料・LINE限定の先行特典 ／</p>
          <a className="lineButton" href="https://lin.ee/or3BWo5" aria-label="LINEで友だち追加">
            <span className="lineMark">LINE</span>
            <b>限定特典を受け取る</b>
          </a>
          <p className="lineNote">登録は無料です。<br />販売開始日・限定数・先行価格をLINEでお知らせします。</p>
        </section>
        <img
          src={`${basePath}/final-travel-care.png`}
          alt="家でも旅先でも、いつもの磨き心地。毎日続けるケアだからこそ使いやすさにこだわりました"
        />
      </section>
      <div className="continuation" aria-hidden="true" />
    </main>
  );
}
