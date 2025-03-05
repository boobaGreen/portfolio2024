import Counter from "./projects/Counter";
import Hack from "./projects/Hack";
import Pof from "./projects/Pof";
import PortfolioOld from "./projects/PortfolioOld";
import Randomizer from "./projects/Randomizer";
import ReactTs from "./projects/ReactTs";
import Smart from "./projects/Smart";
import Solidity from "./projects/Solidity";
import StudyBuddyHub from "./projects/StudyBuddyHub";
import Vegetarians from "./projects/Vegetarians";
import Cartellini from "./projects/Cartellini";
import LinkShield from "./projects/LinkShield";

function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul>
          <LinkShield/>
          <Smart />
          <ReactTs />
          <Cartellini/>
          <Randomizer />
          <Solidity />
          <StudyBuddyHub />
          <Pof />
          <Vegetarians />
          <Hack />
          <Counter />
          <PortfolioOld />
        </ul>
      </div>
    </section>
  );
}

export default Projects;
