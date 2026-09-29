import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-24 bg-mauve">
      <div className="container-max section-padding text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne/20 mb-6">
          <Mail className="w-6 h-6 text-white" strokeWidth={1.3} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-medium text-white mb-4">
          Join the Mor Laini Circle
        </h2>
        <p className="text-sm sm:text-base text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
          Be the first to know about new arrivals, self-care rituals and members-only offers.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-champagne transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-champagne text-charcoal text-sm tracking-wide uppercase rounded-full hover:bg-champagne-300 transition-colors duration-300 font-body"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
