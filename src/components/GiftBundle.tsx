import { Gift } from 'lucide-react';

export default function GiftBundle() {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="container-max section-padding">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blush-100 via-blush-50 to-champagne-50">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-champagne-100 rounded-full mb-6">
                <Gift className="w-4 h-4 text-mauve" strokeWidth={1.5} />
                <span className="text-xs tracking-wide uppercase text-mauve">The Perfect Gift</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-mauve mb-5 leading-tight">
                The Soft Ritual Set
              </h2>
              <p className="text-base text-charcoal/70 mb-6 leading-relaxed">
                A matching robe, headband and scrunchie — wrapped in blush and tied with champagne ribbon. The gift that says love, made soft.
              </p>
              <p className="text-2xl font-heading text-mauve mb-8">KES 6,200</p>
              <a href="#shop" className="btn-primary">
                Shop the Bundle
              </a>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
                alt="Gift bundle set"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blush-100/40 to-transparent md:bg-gradient-to-r md:from-blush-100/30 md:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
