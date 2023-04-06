import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="px-10 md:px-0">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
