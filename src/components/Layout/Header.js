import Logo from "../Icons/Logo";
import HamburgerMenu from "../Sections/HamburgerMenu";
import MainMenu from "../Sections/MainMenu";

const Header = () => {
  return (
    <>
      <header className="py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="">
            <Logo height="h-16" />
          </div>
          <div className="hidden  lg:block">
            <MainMenu />
          </div>
          <div className="block  lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
