import SectionHeading from "@/components/Sections/SectionHeading";
import Breadcrumb from "@/components/UI/Breadcrumb";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
Breadcrumb;

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
      <div className="mt-20 flex justify-center px-3">
        <article className="prose prose-sm min-w-80 md:prose lg:prose-lg prose-h1:mb-10 prose-h2:mb-10 prose-h3:mt-16 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg ">
          <h1 className="">{frontMatter.title}</h1>
          <span className="">{frontMatter.date}</span>
          <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
            className="mt-28"
          ></div>
        </article>
      </div>
    </>
  );
};

export default Post;
