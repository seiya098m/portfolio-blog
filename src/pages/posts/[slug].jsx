import SEO from "@/components/SEO/SEO";
import { client } from "@/libs/client";
import { formatDateWithHyphen } from "@/utils/formatDate";
import Link from "next/link";

// export async function getStaticProps({ params }) {
//   const file = fs.readFileSync(`src/content/blog/${params.slug}.md`, "utf-8");
//   const { data, content } = matter(file);
//   return { props: { frontMatter: data, content, slug: params.slug } };
// }

const Post = ({ post }) => {
  return (
    <>
      <SEO post={post} />
      <div className="mt-20 flex justify-center  px-3">
        <article className="prose prose-sm min-w-80 md:prose lg:prose-lg prose-h1:mb-10 prose-h2:mb-10 prose-h3:mt-16 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg ">
          {/* タイトル */}
          <h1 className="">{post.title}</h1>
          {/* 投稿日時 */}
          <span className="">{formatDateWithHyphen(post.publishedAt)}</span>
          {/* タグ */}
          <div>
            {post.tags.length > 0 &&
              post.tags.map((tag) => (
                <span key={tag.id} className="mr-2">
                  <Link href={`/tags/${tag.id}`}>{tag.name}</Link>
                </span>
              ))}
          </div>
          {/* 目次 */}
          <div className="text-center">----- 目次 ------</div>
          {/* 本文 */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
            className="mt-28"
          />
        </article>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });
  const paths = data.contents.map((content) => ({
    params: {
      slug: content.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const data = await client.get({
    endpoint: "articles",
    contentId: id,
  });
  return { props: { post: data } };
};

export default Post;
