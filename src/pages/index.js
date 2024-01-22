import SectionHeading from "../components/Sections/SectionHeading";
import PostCardList from "../components/Sections/PostCardList";
import { client } from "@/libs/client";
import TagList from "@/components/Sections/TagList";

export default function Home({ posts }) {
  return (
    <>
      <div className="mb-5">
        <SectionHeading heading="ブログ一覧" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <PostCardList posts={posts} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "articles",
    queries: { orders: "-createdAt" },
  });

  return {
    props: {
      posts: data.contents,
    },
  };
};
