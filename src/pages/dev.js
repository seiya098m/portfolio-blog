import SectionHeading from "../components/Sections/SectionHeading";

const dev = () => {
  return (
    <>
      <SectionHeading heading="Product" />
      <div className="h-screen border">
        こんにちはdev
        <br />
        Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。
        ### プロジェクトの作成 npx create-next-app コマンドを利用して Next.js
        プロジェクトの作成を行います。 Next.js を使って Markdown
        のブログサイトの構築を一から行なっていきます。 ### プロジェクトの作成
        npx create-next-app コマンドを利用して Next.js
        プロジェクトの作成を行います。
      </div>
    </>
  );
};

export default dev;
