import SectionHeading from "../components/Sections/SectionHeading";
import SEO from "@/components/SEO/SEO";
import ProfileCard from "./ProfileCard";
import FaqCard from "./FaqCard";

const profile = () => {
  const title = "Profile";
  return (
    <>
      {/* SEO */}
      {/* ページ見出し */}
      <SectionHeading heading="プロフィール" />
      <div className="mx-auto max-w-5xl px-6">
        {/* プロフィールカード */}
        <div>
          <ProfileCard />
        </div>
        {/* Q&Aカード*/}
        <div className="mt-32">
          <FaqCard />
        </div>
      </div>
    </>
  );
};

export default profile;
