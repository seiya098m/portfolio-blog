import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "./components/PostCard";

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
    <div className="my-8">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
}
