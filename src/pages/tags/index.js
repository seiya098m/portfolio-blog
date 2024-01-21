import TagList from "@/components/Sections/TagList";
import SectionHeading from "@/components/Sections/SectionHeading";
import { client } from "@/libs/client";

export default function Home({ tags }) {
  return (
    <>
      <div className="mb-5">
        <SectionHeading heading="タグ一覧" />
      </div>
      <div>
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
