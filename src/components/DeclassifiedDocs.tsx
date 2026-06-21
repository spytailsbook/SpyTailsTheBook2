import { useState } from 'react';

export default function DeclassifiedDocs() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Replace these URLs with the actual paths to your uploaded images in the src/assets folder
  // For example: import doc1 from '../assets/cia-doc-1.jpg'; and use doc1 in the array.
  const documents = [
    {
      id: 1,
      src: "/doc1.png",
      alt: "Project Aquiline Declassified Document 1",
      caption: "Research and Development Study - Page 001"
    },
    {
      id: 2,
      src: "/doc2.png",
      alt: "Project Aquiline Declassified Document 2",
      caption: "Technical Draft - Page 002"
    },
    {
      id: 3,
      src: "/doc3.png",
      alt: "Project Aquiline Declassified Document 3",
      caption: "Project Aquiline Table of Contents - Page 003"
    }
  ];

  return (
    <section id="declassified" className="py-8 md:py-12 px-6 md:px-12 bg-primary-dark relative z-10 border-t border-white/10 block">
      <div className="max-w-[1200px] mx-auto border-t border-accent-amber/30 pt-8 md:pt-10 mt-4 md:mt-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            <span className="text-accent-amber mr-4">Declassified</span>Files
          </h2>
          <p className="text-text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            Review excerpts from actual declassified Central Intelligence Agency documents relating to Project Aquiline. 
            Click on any document to enlarge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {documents.map((doc) => (
            <div 
              key={doc.id} 
              className="group cursor-pointer flex flex-col relative"
              onClick={() => setSelectedImg(doc.src)}
            >
              <div className="relative overflow-hidden border border-white/10 group-hover:border-accent-amber/50 transition-colors duration-300 aspect-[3/4] bg-secondary-dark/50">
                <img 
                  src={doc.src} 
                  alt={doc.alt} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="mt-3 border-l-2 border-accent-amber pl-3">
                <p className="text-xs text-white/70 font-mono tracking-wider uppercase">
                  {doc.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-accent-amber font-mono text-sm uppercase tracking-widest transition-colors cursor-pointer"
              onClick={() => setSelectedImg(null)}
            >
              [ Close ]
            </button>
            <img 
              src={selectedImg} 
              alt="Enlarged declassified document" 
              className="max-w-full max-h-[90vh] object-contain border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
