import { NextSeo } from "next-seo";
import SectionHeading from "../components/Sections/SectionHeading";

const profile = () => {
  const title = "Profile";
  return (
    <>
      <NextSeo
        title={title}
        description=""
        openGraph={{
          type: "profile",
          url: `http:localhost:3000/profile`,
          title: title,
          description: "",
          images: [
            {
              url: "",
              width: 1200,
              height: 700,
              alt: "",
            },
          ],
        }}
      />
      <SectionHeading heading="Profile" />
    </>
  );
};

export default profile;
