import SectionHeading from "@/components/Sections/SectionHeading";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`src/content/blog/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);
  return { props: { frontMatter: data, content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("src/content/blog");
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
    <>
      <SectionHeading heading="breadcrumb" />
      <div className="mt-20 flex justify-center">
        <article className="prose">
          <h1 className="mt-12">{frontMatter.title}</h1>
          <span>{frontMatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </article>
      </div>
    </>
  );
};

export default Post;
