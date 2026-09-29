import { Shield, Feather, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Protects Your Hair',
    description: 'Satin reduces friction and breakage, keeping your curls and edges smooth and intact overnight.',
  },
  {
    icon: Feather,
    title: 'Gentle on Skin',
    description: 'The smooth surface is kind to your face, preventing creases and irritation while you rest.',
  },
  {
    icon: Sparkles,
    title: 'Luxurious Feel',
    description: 'There is nothing quite like the cool, silky touch of satin against your skin. It is indulgence, every single day.',
  },
];

export default function WhySatin() {
  return (
    <section className="py-20 sm:py-28 bg-blush-100">
      <div className="container-max section-padding">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.25em] uppercase text-mauve/70 mb-3">The Difference</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-mauve">
            Why Satin?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center px-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-champagne-100 mb-6">
                  <Icon className="w-7 h-7 text-mauve" strokeWidth={1.2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-medium text-mauve mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
