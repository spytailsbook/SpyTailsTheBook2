export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:py-8 z-50 sticky top-0 bg-primary-dark/95 backdrop-blur border-b border-accent-amber/30">
      <div className="text-2xl font-bold tracking-tight flex items-center gap-4 text-white">
        <span className="h-[1px] w-8 md:w-12 bg-accent-amber"></span>
        Spy Tails
        <span className="h-[1px] w-8 md:w-12 bg-accent-amber"></span>
      </div>
      <nav className="flex gap-4 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold">
        <a href="#about-book" className="text-text-main hover:text-accent-amber transition-colors">Overview</a>
        <a href="#chapters" className="text-text-main hover:text-accent-amber transition-colors">Dossiers</a>
        <a href="#global-activity" className="text-text-main hover:text-accent-amber transition-colors">Map</a>
        <a href="#authors" className="text-text-main hover:text-accent-amber transition-colors">Authors</a>
      </nav>
    </header>
  );
}
