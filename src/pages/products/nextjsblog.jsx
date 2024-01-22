import SectionHeading from "@/components/Sections/SectionHeading";

const nextjsblog = () => {
  return (
    <>
      <div className="mx-auto mt-20 max-w-4xl  p-4">
        <div className="prose prose-sm">
          <h1 className="mb-20">Next.js Blog</h1>
          <h2>概要</h2>
          <p>ポートフォリオサイトです。</p>
          <h2>用途・目的</h2>
          <p>
            開発案件の獲得のため
            <br />
            エンジニア教育事業の教材とするため
          </p>
          <h2>こだわり</h2>
          <p>
            教材用に作ったので、Webサイト制作に必要不可欠な要素は抑えた
            CSSはなるべくシンプルに JavaScriptの使用も最小限に
            見ていて飽きさせないためのCSSアニメーション SEOを意識したHTML構造
          </p>
          <h2>使用言語</h2>
          <p>HTML5, CSS3, JavaScript(ES6)</p>
          <h2>技術</h2>
          <p>Firebase Hosting, Cloud Functions, Express, EJS, Sass</p>
          <h2>リンク</h2>
          <p>このサイトなので省略</p>
          <h2>ソースコード</h2>
        </div>
      </div>
    </>
  );
};

export default nextjsblog;
