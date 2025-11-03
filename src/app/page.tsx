import About from "./About/page";
import Hero from "./Hero/page";
import MyWork from "./MyWork/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <MyWork />
    </div>
  );
}
