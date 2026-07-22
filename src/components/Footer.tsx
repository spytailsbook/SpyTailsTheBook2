export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-accent-amber/30 px-6 py-8 md:py-6 flex flex-col md:flex-row items-center justify-between z-10 bg-tertiary-dark relative gap-6 rounded-none"
    >
      <div className="flex items-center gap-4 hidden md:flex md:w-1/3">
        <div className="w-2 h-2 rounded-full bg-accent-amber animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_var(--color-accent-amber)]"></div>
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
          Signal Status: SECURE
        </span>
      </div>

      <div className="text-[9px] md:text-[10px] text-text-muted uppercase tracking-widest text-center md:w-1/3">
        &copy; 2026 Spy Tails // Unauthorized Duplication Prohibited
      </div>

      <div className="flex items-center justify-center md:justify-end gap-6 text-[10px] font-mono text-text-muted uppercase tracking-widest w-full md:w-1/3">
        <a href="https://www.reddit.com/user/Spy-Tails" target="_blank" rel="noopener noreferrer" className="hover:text-accent-amber transition-colors">
          Reddit
        </a>
        <a href="https://instagram.com/spy_tails" target="_blank" rel="noopener noreferrer" className="hover:text-accent-amber transition-colors">
          Instagram
        </a>
        <a href="https://spytails.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-amber transition-colors">
          Substack
        </a>
      </div>
    </footer>
  );
}
