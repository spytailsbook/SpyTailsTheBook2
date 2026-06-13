const chapters = [
  {
    title: "Introduction",
    description:
      "Outlines the basic principles of the intelligence cycle and traditional collection disciplines. It introduces core concepts that demonstrate how spy agencies can turn wildlife into mission-focused assets.",
  },
  {
    title: "Avian Agents",
    description:
      "Details the history of programs using birds to deploy audio sensors, collect MASINT environmental samples, and capture aerial imagery of high-value sites. It also explores previous engineering challenges and the potential advantages of using more modern technology.",
  },
  {
    title: "Subaquatic Spies",
    description:
      "Explores applications for marine mammals, focusing on programs utilizing their innate intelligence and biological capabilities. It also reminds practitioners to develop tools that help address specific requirements - not just to prove a capability.",
  },
  {
    title: "Covert Canines and Furtive Felines",
    description:
      "Examines attempts to operationalize our most common pets, contrasting the innate loyalty of dogs with the independent and unpredictable nature of cats. While the idea of using animals for spycraft is certainly interesting, not all complex espionage missions should be entrusted to our furry friends.",
  },
  {
    title: "Investigative Insects",
    description:
      "Examines the potential of using the animal kingdom’s most abundant resource for their unique advantages, like small sizes and ability to infiltrate places unnoticed. These case studies demonstrate that the natural world is a vast, largely untapped resource for espionage agencies.",
  },
  {
    title: "Critter Concealments and Paranoid Perceptions",
    description:
      "Shares various stories that emphasize the lesson that appearances can be deceiving. This is demonstrated through examples of spies using animals to hide objects they want to keep secret, or when innocent animals became the focus of mistaken suspicion.",
  },
  {
    title: "Recon Robots",
    description:
      "Explores how advances in technology can allow spies to leverage the advantages of animal-like assets while reducing the drawbacks. Biomimetic robots mark a significant breakthrough that could shape the future of intelligence gathering.",
  },
  {
    title: "Countering Clandestine Creatures",
    description:
      "Investigates how spy agencies can defend against the very threats detailed in the book. It demonstrates that countering animal agents is a continuous and adaptive game that, while difficult, demands constant innovation.",
  },
  {
    title: "Wildlife Welfare",
    description:
      "Confronts the profound ethical questions that surround the entire concept of animal espionage - tackling the fundamental dilemma of whether it is morally acceptable to transfer the risks of spycraft from a human professional to an animal.",
  },
];

export default function Features() {
  return (
    <section
      id="chapters"
      className="bg-primary-dark py-12 md:py-24 px-6 md:px-12 relative z-10 block"
    >
      <div className="max-w-[1200px] mx-auto border-t border-accent-amber/30 pt-10 md:pt-16 mt-6 md:mt-8">
        <div className="mb-8 md:mb-14 flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            <span className="text-accent-amber mr-4">Chapter</span>Dossiers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-secondary-dark p-8 md:p-10 border-r border-b border-white/10 hover:bg-tertiary-dark transition-colors duration-300 group flex flex-col"
            >
              <span className="text-accent-amber font-mono text-[10px] sm:text-xs block mb-4 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, "0")} // {chapter.title}
              </span>
              <p className="text-sm text-text-muted leading-relaxed font-light font-sans group-hover:text-text-main transition-colors">
                {chapter.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
