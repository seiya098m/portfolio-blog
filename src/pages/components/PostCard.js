import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <div className="border rounded-lg">
          <Image
            src={`/${post.frontMatter.image}`}
            width={800}
            height={700}
            alt={post.frontMatter.title}
          ></Image>
        </div>
        <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </Link>
    </div>
  );
};

export default PostCard;
