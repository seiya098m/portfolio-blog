import Logo from "../Icons/Logo";
import HamburgerMenu from "../Sections/HamburgerMenu";
import MainMenu from "../Sections/MainMenu";
import SectionHeading from "../Sections/SectionHeading";

const Header = () => {
  return (
    <>
      <header className="py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-16">
              <Logo />
            </div>
            <div className="hidden  lg:block">
              <MainMenu />
            </div>
            <div className="block  lg:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
