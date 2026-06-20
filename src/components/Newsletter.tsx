import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzZrcHpSYUqQiJPE-Ao_WRXnZm7pfZxkzN-hV5LmMNrfILheviSvlZ01YhWnbmlnAG-Fw/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email }).toString(),
        }
      );
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="bg-primary-dark border-t border-white/10 py-8 md:py-12 px-6 md:px-12 relative z-10">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
          Join the Intelligence Briefing
        </h2>
        <p className="text-text-muted font-light text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Subscribe to our mailing list to receive updates about the book, exclusive animal espionage stories, and promotional offers.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 bg-secondary-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent-amber transition-colors placeholder:text-white/40"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="bg-accent-amber text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-70 whitespace-nowrap"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="text-accent-amber text-xs mt-4 uppercase tracking-widest">
            Target acquired. You are on the list.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-xs mt-4 uppercase tracking-widest">
            Mission failed. Could not add email to the list.
          </p>
        )}
      </div>
    </section>
  );
}
