import coverImg from "../../assets/COVER.jpg";

export default function Hero() {
  return (
    <section
      id="about-book"
      className="relative min-h-[80vh] flex items-center px-6 md:px-12 py-10 md:py-20 z-10"
    >
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
        {/* Left Column: Big Headline & Intro */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <h1 className="text-[3.25rem] sm:text-[4.5rem] md:text-[80px] leading-[0.9] font-bold mb-3 text-white tracking-tight">
            Spy
            <br />
            <span className="text-accent-amber">Tails</span>
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-accent-amber mb-8 max-w-xl">
            The Animal Kingdom's Secret Role in Espionage
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-stretch">
              <div className="w-1 bg-accent-amber shrink-0 shadow-[0_0_10px_var(--color-accent-amber)]"></div>
              <p className="text-lg md:text-xl leading-relaxed text-text-muted font-light">
                From Cold War avian operatives to today's bio-inspired
                surveillance bugs. Discover the reality of how intelligence
                agencies, scientists, and researchers have leveraged the natural
                world for clandestine operations.
              </p>
            </div>
            <div className="pl-7">
              <p className="text-sm text-text-muted italic opacity-80">
                Spy Tails will be released in March 2027.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <a
              href="https://www.globepequot.com/imprint/prometheus-books/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-amber text-black px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block text-center leading-tight"
            >
              Pre-Order
              <span className="block text-[10px] mt-1 font-medium text-black/70 tracking-widest lowercase italic h-auto">
                (coming soon)
              </span>
            </a>
            <div className="text-[10px] text-text-muted leading-relaxed uppercase tracking-wider">
              Published by Globe Pequot
              <br />
              Distributed by Simon & Schuster
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="md:col-span-5 flex flex-col relative w-full mt-2 md:mt-0">
          <div className="bg-secondary-dark border-l border-t border-white/10 p-6 md:p-10 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-[460px]">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-amber/5 to-black/40 pointer-events-none"></div>
            <img
              src={coverImg}
              className="w-[200px] sm:w-[260px] md:w-full md:max-w-[320px] shadow-2xl border border-white/5 grayscale-[0.2] hover:grayscale-0 transition-all duration-500 z-10"
              alt="Spy Tails Book Cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
