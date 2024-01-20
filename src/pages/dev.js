import { NextSeo } from "next-seo";
import SectionHeading from "../components/Sections/SectionHeading";

const dev = (params) => {
  const title = "Dev";

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          type: "website",
          url: `http:localhost:3000/dev`,
          title: title,
          images: [],
        }}
      />
      <SectionHeading heading={title} />
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
