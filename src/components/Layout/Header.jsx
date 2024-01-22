import Logo from "@/components/Icons/Logo";
import HamburgerMenu from "@/components/Sections/HamburgerMenu";
import MainMenu from "@/components/Sections/MainMenu";
import SectionHeading from "@/components/Sections/SectionHeading";

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
