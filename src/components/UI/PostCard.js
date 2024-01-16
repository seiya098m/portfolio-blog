import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <>
      <Link
        className="overflow-hidden rounded-xl border  bg-link  drop-shadow-2xl hover:bg-hover-link"
        href={`/${post.slug}`}
      >
        <div className="px-8 pb-4 pt-20">
          <div className="mb-20 text-center">
            <h2 className="text-2xl font-semibold">{post.frontMatter.title}</h2>
          </div>
          <div className="">
            <p className="text-right text-sm">{post.frontMatter.date}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
