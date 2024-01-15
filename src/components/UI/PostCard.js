import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="hover:bg-hover-link bg-link flex flex-col justify-between overflow-hidden rounded-2xl  border-2 p-7 shadow-md duration-200 active:shadow-none"
    >
      <div className="flex flex-grow items-center justify-center">
        <h2 className="mb-8 text-2xl font-semibold">
          {post.frontMatter.title}
        </h2>
      </div>
      <p className="place-self-end p-2 text-sm text-gray-600">
        {post.frontMatter.date}
      </p>
    </Link>
  );
}
