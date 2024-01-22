import SEO from "@/components/SEO/SEO";
import SectionHeading from "@/components/Sections/SectionHeading";
import ProfileCard from "@/components/Sections/ProfileCard";
import FaqCard from "@/components/UI/FaqCard";

const profile = () => {
  const title = "Profile";
  return (
    <>
      {/* SEO */}
      {/* ページ見出し */}
      <SectionHeading heading="プロフィール" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6">
        {/* プロフィールカード */}
        <div>
          <ProfileCard />
        </div>
        {/* Q&Aカード*/}
        <div className="">
          <FaqCard />
        </div>
      </div>
    </>
  );
};

export default profile;
