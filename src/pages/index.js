import fs from "fs";
import matter from "gray-matter";
import SectionHeading from "../components/Sections/SectionHeading";
import PostCardList from "../components/Sections/PostCardList";

export const getStaticProps = () => {
  const files = fs.readdirSync("src/content/blog");
  const posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(
      `src/content/blog/${fileName}`,
      "utf-8",
    );
    const slug = fileName.replace(/\.md$/, "");
    const { data, content } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <>
      <div className="mb-5">
        <SectionHeading heading="Blog List" />
      </div>
      <div className="mx-auto max-w-5xl p-5">
        <PostCardList posts={posts} />
      </div>
    </>
  );
}
