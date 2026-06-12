export default function Authors() {
  return (
    <section id="authors" className="py-24 px-6 md:px-12 bg-primary-dark relative z-10 border-t border-white/10 mt-12 block">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 border-l border-white/10 pl-6 md:pl-8 flex flex-col justify-center">
           <div className="mb-4 inline-block self-start px-3 py-1 bg-accent-amber text-black text-[9px] font-bold tracking-widest uppercase">
            Personnel File
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            The<br/><span className="text-accent-amber">Authors</span>
          </h2>
        </div>
        <div className="md:col-span-8 bg-secondary-dark border border-white/10 p-8 md:p-12 text-center">
          <h3 className="text-lg md:text-xl font-mono text-white mb-8 uppercase tracking-[0.1em] border-b border-accent-amber/50 pb-4 inline-block">
            Brandon Mohr <span className="text-accent-amber px-2 text-sm">&</span> Mark Sandel
          </h3>
          <p className="text-base font-light text-text-muted leading-relaxed max-w-[800px] mx-auto text-left">
            The authors met as freshmen roommates in college, both pursued career paths in intelligence, and currently serve as intelligence analysts within the U.S. Intelligence Community. Their backgrounds as intelligence professionals allowed them to navigate the book's reference materials as tradecraft insiders, uncovering hidden nuances and guiding readers through the complex animal spy programs.
          </p>
          <div className="max-w-[800px] mx-auto text-center mt-8">
            <a 
              href="mailto:spytails.book@gmail.com" 
              className="inline-block bg-accent-amber text-black hover:bg-white px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
