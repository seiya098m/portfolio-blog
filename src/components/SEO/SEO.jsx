import { NextSeo } from "next-seo";

const SEO = ({ post }) => {
  return (
    <NextSeo
      title={post.title}
      description={post.description}
      openGraph={{
        type: "website",
        url: `http:localhost:3000/posts/${post.slug}`,
        title: post.title,
        description: post.description,
        images: [
          {
            url: ``,
            width: 1200,
            height: 700,
            alt: post.title,
          },
        ],
      }}
    />
  );
};

export default SEO;
