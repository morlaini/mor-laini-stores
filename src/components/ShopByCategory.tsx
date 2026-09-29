import { categories } from '@/data/products';

export default function ShopByCategory() {
  return (
    <section id="shop" className="py-20 sm:py-28 bg-ivory">
      <div className="container-max section-padding">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.25em] uppercase text-mauve/60 mb-3">Explore</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-mauve">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={`#${category.slug}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-blush-50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <h3 className="text-xl sm:text-2xl font-heading text-ivory font-medium mb-1">
                  {category.name}
                </h3>
                <span className="text-xs tracking-wide uppercase text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Discover →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
