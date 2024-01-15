import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "../components/UI/PostCard";
import SectionHeading from "../components/Sections/SectionHeading";
import MyModal from "@/components/dialog";

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
      <div className="">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
