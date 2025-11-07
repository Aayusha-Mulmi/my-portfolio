import Hero from "./Hero/page";
import About from "./About/page";
import Experience from "./Experience/page";
import MyWork from "./MyWork/page";
import ContactMe from "./ContactMe/page";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MyWork />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}
