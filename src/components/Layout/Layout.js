import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col px-4">
      <div className="">
        <Header />
      </div>
      <div className="container mx-auto  min-h-screen flex-grow">
        <main className="">{children}</main>
      </div>
      <div className="mb-40 mt-96">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
