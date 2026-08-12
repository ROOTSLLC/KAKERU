export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <section className="introArtwork" aria-label="KAKERU 商品紹介">
        <img
          src={`${basePath}/intro-v1.jpg`}
          alt="あなたの歯間に合わせられる。市販のフロス糸を替えるだけ。薄さ1mmで奥歯まで引っかからずスッと届く、チタン製フロスハンドル KAKERU"
        />
        <section className="lineRegistration" id="line-registration">
          <p className="lineLead">クラファン開始情報は、LINEで。</p>
          <h2>数量限定の最大割引を逃さないよう、<br />開始情報をいち早くお届けします。</h2>
          <p className="launchNotice"><strong>9月初旬</strong><br />Makuakeで先行発売予定</p>
          <div className="lineBenefit">
            <span>数量限定<br />最大</span>
            <strong>33<small>%</small></strong>
            <b>OFF</b>
          </div>
          <p className="availability"><em>数量限定</em>割引率の高いプランから<br />予定数に達し次第、受付終了となります。</p>
          <p className="ctaAssist">＼ 登録無料・クラファン最新情報をお届け ／</p>
          <a className="lineButton" href="https://lin.ee/or3BWo5" aria-label="LINEで友だち追加">
            <span className="lineMark">LINE</span>
            <b>開始情報をLINEで受け取る</b>
          </a>
          <p className="lineNote">登録は無料です。<br />クラファン開始日・限定数・先行価格などの最新情報をLINEでお知らせします。</p>
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
          <h2>数量限定の最大割引を逃さないよう、<br />LINEで開始情報を受け取りませんか。</h2>
          <p className="launchNotice"><strong>9月初旬</strong><br />Makuakeで先行発売予定</p>
          <div className="lineBenefit">
            <span>数量限定<br />最大</span>
            <strong>33<small>%</small></strong>
            <b>OFF</b>
          </div>
          <p className="availability"><em>数量限定</em>割引率の高いプランから<br />予定数に達し次第、受付終了となります。</p>
          <p className="ctaAssist">＼ 登録無料・クラファン最新情報をお届け ／</p>
          <a className="lineButton" href="https://lin.ee/or3BWo5" aria-label="LINEで友だち追加">
            <span className="lineMark">LINE</span>
            <b>開始情報をLINEで受け取る</b>
          </a>
          <p className="lineNote">登録は無料です。<br />クラファン開始日・限定数・先行価格などの最新情報をLINEでお知らせします。</p>
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
