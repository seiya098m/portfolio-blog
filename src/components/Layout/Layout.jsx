import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
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
