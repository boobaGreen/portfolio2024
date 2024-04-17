import { useState, useRef } from "react";
import Header from "./Header";
import Core from "./Core";

function App() {
  const divRef = useRef(null); // Utilizzo di useRef per creare una ref

  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="to-slate-950 relative min-w-[100vw]  rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 px-8 py-16 shadow-2xl "
      >
        <div
          className="pointer-events-none -inset-px opacity-0 transition duration-300 fixed lg:absolute"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
          }}
        />
        {/* spot-ligt cursor */}
        <div
          className="mx-auto min-h-screen max-w-screen-xl px-4 py-12 
          md:px-12 md:py-20 lg:px-24 lg:py-0"
        >
          {/* main div*/}
          <div className="flex flex-col lg:flex-row">
            <Header className=" max-h-[100vh] overflow-hidden" />
            <Core />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
