import PostCard from "../UI/PostCard";

const PostCardList = ({ posts }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} className="" />
        ))}
      </div>
    </>
  );
};

export default PostCardList;
