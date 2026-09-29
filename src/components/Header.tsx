import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Headbands', href: '#headbands' },
  { label: 'Bonnets', href: '#bonnets' },
  { label: 'Robes', href: '#robes' },
  { label: 'Scrunchies', href: '#scrunchies' },
  { label: 'Sleep Masks', href: '#sleep-masks' },
  { label: 'House Shoes', href: '#house-shoes' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max section-padding flex items-center justify-between">
        <a href="#" className="font-heading text-2xl sm:text-3xl text-mauve tracking-wide font-medium">
          Mor Laini
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-charcoal/80 hover:text-mauve transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Cart"
            className="relative p-2 text-charcoal hover:text-mauve transition-colors duration-200"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-champagne text-[10px] font-body font-medium rounded-full flex items-center justify-center text-charcoal">
              0
            </span>
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-charcoal"
          >
            {menuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-ivory/98 backdrop-blur-md shadow-md animate-slide-down">
          <div className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm text-charcoal/80 hover:text-mauve transition-colors duration-200 tracking-wide border-b border-champagne/30 pb-3"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
