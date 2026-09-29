import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShopByCategory from '@/components/ShopByCategory';
import Bestsellers from '@/components/Bestsellers';
import OurName from '@/components/OurName';
import WhySatin from '@/components/WhySatin';
import GiftBundle from '@/components/GiftBundle';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ShopByCategory />
        <Bestsellers />
        <OurName />
        <WhySatin />
        <GiftBundle />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
