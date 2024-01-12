import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "./components/PostCard";
import { Navbar } from "flowbite-react";

export const getStaticProps = () => {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
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
    <div className="my-6">
      <h1 className="text-xl font-bold mb-6">ブログ一覧</h1>
      <hr className="mb-16" />
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} className=""></PostCard>
        ))}
      </div>
    </div>
  );
}
