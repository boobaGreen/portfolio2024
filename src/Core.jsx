import About from "./About";
import Path from "./Path";
import Projects from "./Projects";

function Core() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Path />
      <Projects />
    </main>
  );
}

export default Core;
