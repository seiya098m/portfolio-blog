import Link from "next/link";

const TagList = ({ tags }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag.id}
          className="rounded-lg border p-2 shadow-md hover:bg-hover-link"
        >
          <Link href={`/tags/${tag.id}`} className="">
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
