import TagList from "@/components/Sections/TagList";
import SectionHeading from "@/components/Sections/SectionHeading";
import { client } from "@/libs/client";

export default function Home({ tags }) {
  return (
    <>
      <div className="mb-5">
        <SectionHeading heading="タグ" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <TagList tags={tags} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "tags",
  });

  return {
    props: {
      tags: data.contents,
    },
  };
};
