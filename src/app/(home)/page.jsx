import Header from "../../pages/Header";
import Products from "../../pages/Products";
import Design from "../../pages/Design";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import ScrollToTop from "../../Components/ScrollToTop"

export default function Home() {
  return (
    <div className="">
      <Header />
      <Products />
      <Design />
      <About />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
