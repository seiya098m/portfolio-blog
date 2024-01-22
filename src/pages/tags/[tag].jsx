import SectionHeading from "@/components/Sections/SectionHeading";
import PostCardList from "@/components/Sections/PostCardList";
import { client } from "@/libs/client";

const Tag = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <>
        <div className="mb-5">
          <SectionHeading heading="Blog List" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          ブログコンテンツがありません
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mb-5">
        <SectionHeading heading="Blog List" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <PostCardList posts={posts} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags" });
  const paths = data.contents.map((content) => ({
    params: {
      tag: content.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const tag = context.params.tag;
  const data = await client.get({
    endpoint: "articles",
    queries: { filters: `tags[contains]${tag}`, orders: "-createdAt" },
  });

  return {
    props: {
      posts: data.contents,
    },
  };
};

export default Tag;
