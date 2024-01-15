import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col border">
      <div className="border">
        <Header />
      </div>
      <div className="container mx-auto min-h-screen flex-grow border">
        <main className="">{children}</main>
      </div>
      <div className="border">
        <Footer className="" />
      </div>
    </div>
  );
}
