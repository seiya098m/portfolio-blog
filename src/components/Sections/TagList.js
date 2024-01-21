import Link from "next/link";

const TagList = ({ tags }) => {
  return (
    <div className="">
      {tags.map((tag) => (
        <span key={tag.id} className="mr-2">
          <Link
            href={`/tags/${tag.id}`}
            className="rounded-lg border p-2 shadow-md hover:bg-hover-link"
          >
            {tag.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default TagList;
