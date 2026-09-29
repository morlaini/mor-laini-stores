import { bestsellers, formatKES } from '@/data/products';

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="py-20 sm:py-28 bg-blush-100">
      <div className="container-max section-padding">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.25em] uppercase text-mauve/70 mb-3">Loved by many</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-mauve">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="aspect-square overflow-hidden bg-blush-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-xs tracking-wide uppercase text-mauve/60 mb-1">
                  {product.category}
                </p>
                <h3 className="text-base sm:text-lg font-heading font-medium text-mauve mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-sm font-body text-charcoal mb-3">
                  {formatKES(product.price)}
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border border-champagne/40 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      aria-label={`Colour option ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
