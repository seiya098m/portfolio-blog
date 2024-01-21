const TagList = ({ tags }) => {
  return (
    <div className="">
      {tags.map((tag) => (
        <span key={tag.id} className="mr-2">
          <a
            href={`/tags/${tag.id}`}
            className="rounded-lg border p-2 shadow-md hover:bg-hover-link"
          >
            {tag.name}
          </a>
        </span>
      ))}
    </div>
  );
};

export default TagList;
