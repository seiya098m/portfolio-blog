import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <>
      <Link
        href={`/posts/${post.slug}`}
        className="flex flex-col  justify-between p-6 leading-normal  border border-gray-200 rounded-lg shadow max-w-full md:max-w-xl hover:bg-gray-100 "
      >
        <h5 className="mx-8 mb-10 mt-12 text-2xl font-bold tracking-tight text-gray-900">
          {post.frontMatter.title}
        </h5>
        {/* <p className="mb-3 font-normal text-gray-700">
            {post.frontMatter.description}
          </p> */}
        <span className="text-right m-2">{post.frontMatter.date}</span>
      </Link>
    </>
  );
};

export default PostCard;
