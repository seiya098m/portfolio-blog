import { NextSeo } from "next-seo";
import SEO from "@/components/SEO/SEO";
import SectionHeading from "@/components/Sections/SectionHeading";
import Link from "next/link";
import Image from "next/image";

export const portfolios = [
  {
    title: "Next.js Blog",
    slug: "nextjsblog",
    image: "/images/blog-nextjs.png",
    description:
      "Explore the world through my words. A collection of thoughts, experiences, and stories.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    url: "",
  },
  {
    title: "product2",
    image: "/images/blog-nextjs.png",
    description:
      "Explore the world through my words. A collection of thoughts, experiences, and stories.",
    tags: ["Laravel", "PHP", "React", "AWS"],
  },
  {
    title: "product3",
    image: "/images/blog-nextjs.png",
    description:
      "Explore the world through my words. A collection of thoughts, experiences, and stories.",
    tags: ["Next.js", "React", "MUI", "OpenAI"],
  },
  {
    title: "Prodcut4",
    image: "/images/blog-nextjs.png",
    description:
      "Explore the world through my words. A collection of thoughts, experiences, and stories.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
];

export const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      {/* <div className="px-8 pb-4 pt-20">
          <div className="mb-20 text-center">
            <h2 className="text-2xl font-semibold">{portfolio.title}</h2>
          </div>
          <div className=""></div>
        </div> */}

      <Link href={`/products/${portfolio.slug}`}>
        <div className=" overflow-hidden  rounded-xl border-2 shadow-2xl">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg"
            alt={portfolio.title}
            className="object-fit h-72 w-full"
          />
          <div className="px-6 py-12">
            <div className="mb-8 text-xl font-bold">{portfolio.title}</div>
            <p className="text-gray-700">{portfolio.description}</p>
          </div>
          <div className="px-6 py-6">
            {portfolio.tags.map((tag, index) => (
              <span
                key={index}
                className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export const PortfolioCardList = ({ portfolios }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.slug}
            portfolio={portfolio}
            className=""
          />
        ))}
      </div>
    </>
  );
};

const dev = () => {
  return (
    <>
      <SectionHeading heading="プロダクト" />
      <div className="mx-auto max-w-5xl px-6">
        <PortfolioCardList portfolios={portfolios} />
      </div>
    </>
  );
};

export default dev;
