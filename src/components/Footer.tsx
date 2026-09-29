import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Shop: ['Headbands', 'Bonnets', 'Robes', 'Scrunchies', 'Sleep Masks', 'House Shoes', 'Bestsellers'],
  About: ['Our Story', 'Why Satin', 'Reviews', 'Sustainability'],
  Help: ['Shipping', 'Returns', 'Size Guide', 'FAQ', 'Contact'],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-ivory/80 pt-16 pb-8">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="font-heading text-2xl text-ivory font-medium mb-4">
              Mor Laini
            </h3>
            <p className="text-sm text-ivory/50 leading-relaxed mb-6 max-w-xs">
              Love, made soft. Luxury satin sleep and self-care, crafted for women who deserve to feel pampered.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-champagne hover:border-champagne hover:text-charcoal transition-all duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-champagne hover:border-champagne hover:text-charcoal transition-all duration-300"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm tracking-wide uppercase text-ivory/60 mb-4 font-body">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ivory/50 hover:text-champagne transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ivory/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-ivory/50">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-champagne" strokeWidth={1.5} />
              <span>hello@morlaini.co.ke</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-champagne" strokeWidth={1.5} />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-champagne" strokeWidth={1.5} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-ivory/30">
          © {new Date().getFullYear()} Mor Laini. Love, made soft.
        </div>
      </div>
    </footer>
  );
}
