import GoogleCloud from "./path/GoogleCloud";
import Iti from "./path/Iti";
import MasterBlockchainS2i from "./path/MasterBlockchainS2i";
import MasterFullStackS2i from "./path/MasterFullStackS2i";
import MasterIcp from "./path/MasterIcp";
import Solana from "./path/Solana";
import Binance from "./path/Binance";
import Buddy from "./path/Buddy";

function Path() {
  return (
    <section
      id="certification"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Certification
        </h2>
      </div>
      <div>
        <ol>
          <Buddy/>
          <Binance/>
          <MasterBlockchainS2i />
          <Solana />
          <MasterIcp />
          <MasterFullStackS2i />
          <GoogleCloud />
          <Iti />
        </ol>
      </div>
    </section>
  );
}

export default Path;
