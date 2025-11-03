import About from "./About/page";
import Experience from "./Experience/page";
import Hero from "./Hero/page";
import MyWork from "./MyWork/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MyWork />
      <Experience />
    </div>
  );
}
