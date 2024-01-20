---
title: "Next.jsでmarkdownブログを構築する方法"
date: "2022-07-13"
description: "Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。"
image: next-js-blog1.jpg
---

こちらは、Next.js で Markdown ブログを構築するためのサンプルブログ記事のスケルトンです。このコードは JavaScript 言語で書かれています。まず、`pages`ディレクトリに`[slug].js`ファイルを作成してください。

```jsx
// pages/[slug].js

import { useRouter } from "next/router";
import { getAllPosts, getPostBySlug } from "../../lib/api"; // これらの関数は実際のデータ取得用のものです
import markdownToHtml from "../../lib/markdownToHtml"; // MarkdownをHTMLに変換するための関数

export default function BlogPost({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts(); // すべての記事のデータを取得する関数（実装は適切に行ってください）

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "slug", "content"]); // 特定の記事のデータを取得する関数（実装は適切に行ってください）

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
```

上記のコードは、Next.js で Markdown ブログを構築する基本的な構造を提供しています。ただし、いくつかの重要なポイントがあります：

1. `getAllPosts`および`getPostBySlug`の関数は、実際のデータ取得および処理を行うために、プロジェクトに合わせて実装する必要があります。
2. `markdownToHtml`関数は、Markdown を HTML に変換するためのもので、これも実際のプロジェクトに合わせて適切に実装する必要があります。
3. `getStaticPaths`関数は、すべての記事のパスを生成します。これは動的なルーティングで使用されます。
4. `getStaticProps`関数は、各記事のデータを取得し、コンテンツを HTML に変換してコンポーネントに渡します。

このコードは、概念的なものであり、実際のプロジェクトに適した形に変更する必要があります。また、`lib`ディレクトリ内の関数なども、実際のプロジェクトに合わせて作成してください。

| ヘッダ1 | ヘッダ2 |
| ------- | ------- |
| セル1   | セル2   |
| セル3   | セル4   |

- [x] 完了したタスク
- [ ] 未完了のタスク

~~取り消し線~~

https://www.example.com

```python
def hello_world():
    print("Hello, world!")

```
