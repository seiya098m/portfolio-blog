import { NextSeo } from "next-seo";
import SectionHeading from "../components/Sections/SectionHeading";
import SEO from "@/components/SEO/SEO";
SEO;

const profile = () => {
  const title = "Profile";
  return (
    <>
      {/* SEO */}
      <SectionHeading heading="Profile" />
    </>
  );
};

export default profile;
