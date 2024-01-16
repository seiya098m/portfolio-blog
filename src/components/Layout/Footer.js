import GithubLink from "../Icons/GithubLink";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto flex h-20 flex-col items-center justify-around">
        <div>
          <GithubLink />
        </div>
        <div className="mt-16">
          {/* copyrihgt */}
          <p>© 2024 Panda Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;