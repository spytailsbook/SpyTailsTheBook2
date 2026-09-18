import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Endorsement {
  id: number;
  quote: string;
  author: string;
  title: string;
}

// Replace or add your actual endorsements here:
const endorsements: Endorsement[] = [
  {
    id: 1,
    quote:
      "Brandon Mohr and Mark Sandel deliver a meticulously researched, genuinely surprising account of how spy agencies turned to the animal kingdom for capabilities no human could match. Anyone curious about spycraft or the remarkable abilities of animals will find it hard to put down. A delight from first page to last.",
    author: "David McCloskey",
    title: "former CIA analyst and Sunday Times bestselling author of London Station",
  },
  {
    id: 2,
    quote:
      "In Spy Tails, the authors have beautifully captured the creativity and audacity of the Intelligence Community as it expanded the boundaries of technical and operational tradecraft ... This book is a celebration of American ingenuity and the surprising partners, human and animal, that have helped us keep our nation safe.",
    author: "Mary Flammang",
    title: "former CIA Chief of Targeting",
  },
  {
    id: 3,
    quote:
      "Spy Tails, is a great read that ticks all the boxes – history, animal biology, and ethics, delivered with well-honed penmanship (the authors are so “purr-suasive”). In a world where birds, dogs, cats, and even insects are potential intelligence assets, only the truth can be this strange . . .",
    author: "Susan G. Friedman, Ph. D.",
    title: "Professor Emeritus, Psychology Dept., Utah State University",
  },
  {
    id: 4,
    quote:
      "Highly recommend this volume for intelligence enthusiasts wanting more than just entertaining vignettes, though the pieces are indeed entertaining.",
    author: "",
    title: "Former Senior Advisor to the Director of National Intelligence",
  },
  {
    id: 5,
    quote:
      "Spy Tails is a fascinating, well-researched look at the remarkable creativity that has always been part of intelligence work. From dolphins to robotic dogs, the stories are engaging and surprising, and the authors' well-placed humor and puns make reading even more enjoyable. If this is what has now been revealed, just imagine what stories are still waiting to be told.",
    author: "J.C. Lintzenich",
    title: "Former Senior Advisor to the Director of National Intelligence",
  },
  {
    id: 6,
    quote:
      "Highly recommend this volume for intelligence enthusiasts wanting more than just entertaining vignettes, though the pieces are indeed entertaining ... These thoroughly documented reviews cover well-known historical uses as well as more bizarre experiments with animals in espionage, counterespionage, and deception.",
    author: "Dr. Barry Zulauf",
    title: "Georgetown University, President Emeritus of IAFIE",
  },
  {
    id: 7,
    quote:
      "This well-written and well-researched book is more than just a good read. Exposing the history of the use and abuse of animals by spy agencies that took off during the Cold War and continues to the present, Spy Tails is packed with incredible true stories, some sad, some funny, some infuriating, but all fascinating. Fair warning: after reading this book, you’ll never feel the same when you notice your pet staring with ears turned towards you!",
    author: "Dave Lindorff",
    title: "Izzy Award-winning author of Spy for No Country",
  },
  {
    id: 8,
    quote:
      "The story of this incredible clandestine menagerie, documented in Spy Tails by Brandon Mohr and Mark Sandel, will astound seasoned intelligence officers and delight true-espionage readers. Spy Tails’ comprehensive survey reveals the remarkably diverse capabilities of animals to secretly collect information as well as conduct lethal operations…. A thoughtful, balanced perspective insisting on proper respect for animal life in all forms, especially when national security is at stake.",
    author: "Robert Wallace",
    title: "Retired CIA Director of Technical Service",
  },
  {
    id: 9,
    quote:
      "Despite the punny title, Spy Tails is a serious original work of intelligence history, current analysis, and futuristic scenarios that avoids sensationalism to present a detailed account of efforts to use animals for intelligence purposes and a probing assessment of the ethical and practical issues arising from fauna warfare in testing and deployment. Leveraging a wide variety of accessible sources with exemplary professionalism and an insider's acumen, intelligence analysts Mohr and Sandel get the scholarship, terminology, tradecraft, and technology right in creating what should be a standard history of this fascinating subject.",
    author: "Paul Hollingsworth",
    title: "President of the Association of Former Intelligence Officers",
  },
];

export default function Endorsements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || endorsements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % endorsements.length);
    }, 8500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + endorsements.length) % endorsements.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % endorsements.length);
  };

  const current = endorsements[currentIndex];

  return (
    <section
      id="endorsements"
      aria-label="Praise & Endorsements"
      className="relative z-10 w-full bg-secondary-dark/80 border-y border-accent-amber/20 backdrop-blur-sm py-4 md:py-5 px-4 md:px-8 transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-3">
        {/* Top Bar: Section Label & Controls */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <Quote className="w-3.5 h-3.5 text-accent-amber shrink-0" aria-hidden="true" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-accent-amber font-semibold">
              Praise for Spy Tails
            </span>
            <span className="text-[10px] font-mono text-text-muted/60 ml-1.5 hidden sm:inline">
              // [{currentIndex + 1} of {endorsements.length}]
            </span>
          </div>

          {/* Right Controls: Dots & Chevrons */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Endorsement indicators"
            >
              {endorsements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to endorsement ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-5 bg-accent-amber'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 border-l border-white/10 pl-2">
              <button
                onClick={handlePrev}
                aria-label="Previous endorsement"
                className="p-1 rounded text-text-muted hover:text-accent-amber hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next endorsement"
                className="p-1 rounded text-text-muted hover:text-accent-amber hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blurb Body: Full Quote without line-clamp */}
        <div className="min-h-[5.5rem] sm:min-h-[4.75rem] flex items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full flex flex-col gap-2 py-0.5"
            >
              <p className="text-xs sm:text-sm md:text-[14.5px] font-serif italic text-white/95 leading-relaxed">
                "{current.quote}"
              </p>

              <div className="text-[11px] md:text-xs font-mono text-text-muted flex flex-wrap items-center gap-x-1.5 gap-y-0.5 pt-0.5">
                {current.author && (
                  <span className="text-accent-amber font-medium">— {current.author}</span>
                )}
                {current.title && (
                  <span className="text-white/60">
                    {current.author ? ', ' : '— '}{current.title}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
