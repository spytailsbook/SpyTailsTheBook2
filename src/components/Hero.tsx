import coverImg from "../../assets/COVER.jpg";

export default function Hero() {
  return (
    <section
      id="overview"
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
              href="https://a.co/d/0fiY4fTb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-amber text-black px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block text-center leading-tight"
            >
              Pre-Order
            </a>
            <div className="text-[10px] text-text-muted leading-relaxed uppercase tracking-wider">
              Published by Globe Pequot
              <br />
              Distributed by Simon & Schuster
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="md:col-span-5 flex items-center justify-center relative w-full mt-6 md:mt-0">
          <div className="relative group z-10">
            {/* Ambient golden aura glow behind the cover on hover */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-amber to-amber-500 rounded-lg blur-2xl opacity-15 group-hover:opacity-60 transition duration-700 ease-out pointer-events-none"></div>
            
            <img
              src={coverImg}
              className="relative w-[210px] sm:w-[280px] md:w-full md:max-w-[340px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 grayscale-[0.1] hover:grayscale-0 transition-all duration-500 ease-out transform hover:scale-[1.04] hover:-translate-y-2.5 z-10"
              alt="Spy Tails Book Cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
