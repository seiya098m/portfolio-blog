import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="mt-20">{frontMatter.title}</h1>
      <span className="">{frontMatter.date}</span>
      <hr className="mb-32" />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
};

export default Post;
