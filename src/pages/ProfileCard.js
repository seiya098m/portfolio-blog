import React from "react";
import GithubLink from "@/components/Icons/GithubLink";
import XLink from "@/components/Icons/XLink";
import { myProfile, skills } from "@/content/blog/profile/data";

const ProfileInfo = ({ label, value }) => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-900">{label}</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
      {value}
    </dd>
  </div>
);

const SkillsSection = ({ skills }) => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="mb-2 text-sm font-medium text-gray-900">スキルセット</dt>
    <dd className="mt-1 flex flex-wrap gap-2 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
      {skills.map((skill, index) => (
        <span key={index} className="rounded-xl border bg-gray-50 px-1">
          {skill}
        </span>
      ))}
    </dd>
  </div>
);

const SocialLinks = () => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="mb-2 text-sm font-medium text-gray-900">リンク</dt>
    <dd className="mt-1 flex flex-wrap gap-4 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
      <div className="hover:text-gray-600">
        <GithubLink />
      </div>
      <div className="hover:text-gray-600">
        <XLink />
      </div>
    </dd>
  </div>
);

const ProfileCard = () => (
  <div className="overflow-hidden rounded-3xl border-2 bg-white shadow-2xl">
    <div className="p-4 py-6 md:p-20 md:pt-16">
      <dl className="divide-y divide-gray-100">
        {Object.entries(myProfile).map(([label, value]) => (
          <ProfileInfo key={label} label={label} value={value} />
        ))}
        <SkillsSection skills={skills} />
        <SocialLinks />
      </dl>
    </div>
  </div>
);

export default ProfileCard;
