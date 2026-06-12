export default function Footer() {
  return (
    <footer id="contact" className="border-t border-accent-amber/30 px-6 py-6 md:h-16 flex flex-col md:flex-row items-center justify-between z-10 bg-tertiary-dark relative gap-4 rounded-none">
      <div className="flex items-center gap-4 hidden sm:flex">
        <div className="w-2 h-2 rounded-full bg-accent-amber animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_var(--color-accent-amber)]"></div>
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Signal Status: SECURE</span>
      </div>
      
      

      <div className="text-[9px] md:text-[10px] text-text-muted uppercase tracking-widest text-center">
        &copy; 2026 Spy Tails // Unauthorized Duplication Prohibited
      </div>
    </footer>
  );
}
