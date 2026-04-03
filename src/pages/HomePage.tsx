import CustomerLayout from "@/components/layout/CustomerLayout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";
import heroBanner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const bestSelling = products.filter((_, i) => i < 4);
  const recommended = products.filter((_, i) => i >= 4);

  return (
    <CustomerLayout>
      {/* Hero Banner */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative mx-4 md:mx-6 mt-4 md:mt-6 rounded-2xl overflow-hidden">
        <img src={heroBanner} alt="Fresh preserved foods" width={1200} height={600} className="w-full h-44 sm:h-60 md:h-80 lg:h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex flex-col justify-center pl-5 md:pl-12">
          <span className="text-[10px] md:text-xs font-bold bg-secondary text-secondary-foreground px-2 md:px-3 py-0.5 md:py-1 rounded-full w-fit mb-2 md:mb-3">UP TO 30% OFF</span>
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-card leading-tight">Fresh Homemade<br />Pickles & Achar</h2>
          <Link to="/products" className="mt-3 md:mt-5 bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full w-fit hover:opacity-90 transition-all">
            Shop Now
          </Link>
        </div>
      </motion.div>

      {/* Categories */}
      <section className="mt-6 md:mt-10 px-4 md:px-6">
        <div className="flex items-center justify-between mb-3 md:mb-5">
          <h3 className="font-bold text-base md:text-xl">Categories</h3>
          <Link to="/products" className="text-xs md:text-sm text-primary font-medium flex items-center gap-0.5">View All <ChevronRight size={14} /></Link>
        </div>
        <div className="flex gap-3 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Link to={`/products?category=${cat.name}`} key={cat.id} className="flex flex-col items-center gap-1.5 md:gap-2 min-w-[64px] md:min-w-[80px]">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-olive-light flex items-center justify-center text-2xl md:text-3xl shadow-soft hover:scale-105 transition-transform">
                {cat.emoji}
              </div>
              <span className="text-[11px] md:text-sm font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Selling */}
      <section className="mt-6 md:mt-10 px-4 md:px-6">
        <div className="flex items-center justify-between mb-3 md:mb-5">
          <h3 className="font-bold text-base md:text-xl">Best Selling</h3>
          <Link to="/products" className="text-xs md:text-sm text-primary font-medium flex items-center gap-0.5">See All <ChevronRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          {bestSelling.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Recommended */}
      <section className="mt-6 md:mt-10 px-4 md:px-6 mb-6 md:mb-10">
        <div className="flex items-center justify-between mb-3 md:mb-5">
          <h3 className="font-bold text-base md:text-xl">Recommended</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          {recommended.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </CustomerLayout>
  );
};

export default HomePage;
