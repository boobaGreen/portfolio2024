function About() {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            In 2021, after many years in a completely different job with many
            responsibilities but where I no longer found myself, I decided to
            change priorities and resume my computer science studies, initially
            for about a year alone then I felt the need to have training more
            organic and I decided to enroll in the
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://talent.start2impact.it/profile/claudio-dall-ara"
              target="_blank"
              aria-label="Start2Impact"
            >
              {" "}
              Start2Impact{" "}
            </a>
            Full Stack Development Master course.
          </p>
          <p className="mb-4">
            Since then I have never stopped studying and learning as well as
            programming and I am currently exploring the world of Web3
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
