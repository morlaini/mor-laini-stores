import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-blush-champagne pt-20">
      <div className="container-max section-padding w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in-up">
          <p className="text-sm tracking-[0.25em] uppercase text-mauve/80 mb-5">
            Luxury Satin Sleep &amp; Self-Care
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading text-mauve leading-[1.1] mb-6 text-balance font-medium">
            Love, made soft.
          </h1>
          <p className="text-base sm:text-lg text-charcoal/70 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Satin headbands, bonnets, robes, scrunchies, sleep masks and house shoes — crafted to protect your hair and skin, and make every evening feel like a small indulgence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#shop" className="btn-primary group">
              Shop the Collection
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </a>
            <a href="#our-story" className="btn-outline">
              Our Story
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8955820/pexels-photo-8955820.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Woman relaxing in soft luxury"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blush-100 rounded-full blur-2xl opacity-60" />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-champagne-100 rounded-full blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
