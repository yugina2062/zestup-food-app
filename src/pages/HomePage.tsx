import CustomerLayout from "@/components/layout/CustomerLayout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";
import heroBanner1 from "@/assets/hero-banner.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Star, Truck, ShieldCheck, Leaf, Clock, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useCart } from "@/context/CartContext";

const heroSlides = [
  {
    image: heroBanner1,
    tag: "UP TO 30% OFF",
    title: "Fresh Homemade\nPickles & Achar",
    subtitle: "Handcrafted with love, delivered to your door",
    cta: "Shop Now",
  },
  {
    image: heroBanner2,
    tag: "NEW ARRIVALS",
    title: "Authentic Spice\nBlends Collection",
    subtitle: "Discover traditional recipes from across India",
    cta: "Explore",
  },
  {
    image: heroBanner3,
    tag: "BESTSELLER",
    title: "Grandma's Secret\nMango Pickle",
    subtitle: "Made with hand-picked Rajapuri mangoes",
    cta: "Order Now",
  },
];

const trustBadges = [
  { icon: Truck, title: "Free Delivery", desc: "On orders above ₹499" },
  { icon: ShieldCheck, title: "100% Authentic", desc: "Homemade & natural" },
  { icon: Leaf, title: "No Preservatives", desc: "Pure & organic" },
  { icon: Clock, title: "Fresh Daily", desc: "Made to order" },
];

const testimonials = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "The mango pickle reminds me of my grandmother's recipe. Absolutely authentic taste!", avatar: "PS" },
  { name: "Rahul Verma", location: "Delhi", rating: 5, text: "Best quality preserved foods I've found online. The packaging is excellent too.", avatar: "RV" },
  { name: "Anita Desai", location: "Bangalore", rating: 4, text: "Love the variety! The mixed vegetable pickle is our family's new favourite.", avatar: "AD" },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();
  const bestSelling = products.filter((_, i) => i < 4);
  const recommended = products.filter((_, i) => i >= 4);
  const flashDeals = products.filter((p) => p.originalPrice);

  const nextSlide = useCallback(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), []);
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <CustomerLayout>
      {/* Hero Carousel */}
      <section className="relative mx-4 md:mx-6 lg:mx-8 mt-4 md:mt-6 rounded-2xl md:rounded-3xl overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              width={1920}
              height={800}
              className="w-full h-52 sm:h-64 md:h-[400px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-14 lg:pl-20 max-w-xl lg:max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] md:text-xs font-bold bg-secondary text-secondary-foreground px-3 py-1 rounded-full w-fit mb-3"
              >
                {heroSlides[currentSlide].tag}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-card leading-tight whitespace-pre-line"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-card/80 text-xs md:text-base mt-2 md:mt-3 hidden sm:block"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link
                  to="/products"
                  className="mt-4 md:mt-6 bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-5 md:px-8 py-2.5 md:py-3.5 rounded-full w-fit inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-lg"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel controls */}
        <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-card/30 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card/50">
          <ChevronLeft size={20} className="text-card" />
        </button>
        <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-card/30 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card/50">
          <ChevronRight size={20} className="text-card" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${i === currentSlide ? "w-6 bg-card" : "w-1.5 bg-card/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="mx-4 md:mx-6 lg:mx-8 mt-6 md:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3 md:p-4 bg-card rounded-xl md:rounded-2xl border border-border/50 shadow-soft"
            >
              <div className="p-2 md:p-2.5 bg-primary/10 rounded-xl shrink-0">
                <badge.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">{badge.title}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-8 md:mt-12 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="font-bold text-lg md:text-2xl">Shop by Category</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">Find your favourite flavour</p>
          </div>
          <Link to="/products" className="text-xs md:text-sm text-primary font-medium flex items-center gap-0.5 hover:underline">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?category=${cat.name}`}
                className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-5 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card hover:border-primary/20 hover:-translate-y-1 transition-all"
              >
                <span className="text-3xl md:text-4xl">{cat.emoji}</span>
                <span className="text-xs md:text-sm font-semibold text-center">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flash Deals */}
      {flashDeals.length > 0 && (
        <section className="mt-8 md:mt-12 px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl md:rounded-3xl p-5 md:p-8">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg md:text-2xl">⚡</span>
                  <h2 className="font-bold text-lg md:text-2xl text-primary-foreground">Flash Deals</h2>
                </div>
                <p className="text-xs md:text-sm text-primary-foreground/70">Limited time offers – grab them before they're gone!</p>
              </div>
              <Link to="/products" className="text-xs md:text-sm text-primary-foreground/90 font-medium flex items-center gap-0.5 hover:text-primary-foreground">
                See All <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
              {flashDeals.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Selling */}
      <section className="mt-8 md:mt-12 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="font-bold text-lg md:text-2xl">Best Selling</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">Most loved by our customers</p>
          </div>
          <Link to="/products" className="text-xs md:text-sm text-primary font-medium flex items-center gap-0.5 hover:underline">
            See All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          {bestSelling.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mt-8 md:mt-12 mx-4 md:mx-6 lg:mx-8">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
          <img src={heroBanner2} alt="Special collection" loading="lazy" width={1920} height={800} className="w-full h-40 md:h-56 lg:h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
            <div className="pl-6 md:pl-14 lg:pl-20">
              <p className="text-secondary text-xs md:text-sm font-bold mb-1">SPECIAL COLLECTION</p>
              <h3 className="text-card text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Festive Season<br />Gift Hampers
              </h3>
              <Link
                to="/products"
                className="mt-3 md:mt-5 inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all"
              >
                Shop Collection <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="mt-8 md:mt-12 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="font-bold text-lg md:text-2xl">Recommended for You</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">Picked based on popular choices</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
          {recommended.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-8 md:mt-12 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-bold text-lg md:text-2xl">What Our Customers Say</h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">Real reviews from happy food lovers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 md:p-6 border border-border/50 shadow-soft"
            >
              <Quote size={24} className="text-primary/20 mb-3" />
              <p className="text-sm md:text-base text-foreground/80 mb-4 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} className={si < t.rating ? "text-secondary fill-secondary" : "text-muted"} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-8 md:mt-12 mx-4 md:mx-6 lg:mx-8 mb-8 md:mb-12">
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border/50 p-6 md:p-10 lg:p-14 text-center shadow-soft">
          <span className="text-3xl md:text-4xl mb-3 block">🌶️</span>
          <h2 className="font-bold text-lg md:text-2xl mb-2">Stay Updated with ZestUp</h2>
          <p className="text-xs md:text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            Subscribe for exclusive deals, new product launches, and traditional recipes delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold text-primary mb-2">Zest<span className="text-secondary">Up</span></h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Authentic homemade pickles & preserved foods, crafted with traditional recipes and delivered fresh.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {["Products", "Orders", "Wishlist", "Cart"].map((l) => (
                  <Link key={l} to={`/${l.toLowerCase()}`} className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Support</h4>
              <nav className="flex flex-col gap-2">
                {["FAQs", "Shipping Policy", "Returns", "Contact Us"].map((l) => (
                  <span key={l} className="text-xs md:text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                    {l}
                  </span>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Contact</h4>
              <div className="flex flex-col gap-2 text-xs md:text-sm text-muted-foreground">
                <span>hello@zestup.in</span>
                <span>+91 98765 43210</span>
                <span>Mon-Sat, 9AM-6PM</span>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-6 md:mt-8 pt-4 md:pt-6 text-center">
            <p className="text-[11px] md:text-xs text-muted-foreground">© 2026 ZestUp. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </CustomerLayout>
  );
};

export default HomePage;
