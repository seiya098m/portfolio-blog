import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 flex-grow border">
        {children}
      </main>
      <Footer className="" />
    </div>
  );
}
