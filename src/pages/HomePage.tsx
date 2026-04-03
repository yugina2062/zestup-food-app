import CustomerLayout from "@/components/layout/CustomerLayout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";
import heroBanner from "@/assets/hero-banner-new.jpg";
import storyImage from "@/assets/story-image.jpg";
import promoBanner from "@/assets/promo-banner.jpg";
import { motion } from "framer-motion";
import { ChevronRight, Truck, ShieldCheck, Leaf, Star, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const testimonials = [
  { name: "Priya Sharma", location: "Delhi", rating: 5, text: "The mango pickle reminds me of my grandmother's recipe. Absolutely authentic taste!", avatar: "PS" },
  { name: "Rahul Verma", location: "Mumbai", rating: 5, text: "Best preserved foods I've ordered online. Fresh packaging and fast delivery every time.", avatar: "RV" },
  { name: "Anita Desai", location: "Bangalore", rating: 4, text: "Love the variety! The mixed vegetable pickle is now a staple in our household.", avatar: "AD" },
];

const HomePage = () => {
  const bestSelling = products.filter((_, i) => i < 4);
  const recommended = products.filter((_, i) => i >= 4);
  const [email, setEmail] = useState("");

  return (
    <CustomerLayout>
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mx-4 md:mx-6 lg:mx-8 mt-4 md:mt-6 rounded-2xl lg:rounded-3xl overflow-hidden"
      >
        <img
          src={heroBanner}
          alt="Fresh preserved foods and pickles"
          width={1920}
          height={800}
          className="w-full h-52 sm:h-64 md:h-80 lg:h-[480px] xl:h-[540px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent flex flex-col justify-center pl-6 md:pl-12 lg:pl-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] md:text-xs lg:text-sm font-bold bg-secondary text-secondary-foreground px-3 md:px-4 py-1 md:py-1.5 rounded-full w-fit mb-3 md:mb-4"
          >
            🎉 UP TO 30% OFF — LIMITED TIME
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-card leading-tight max-w-lg lg:max-w-2xl"
          >
            Fresh Homemade
            <br />
            <span className="text-secondary">Pickles & Achar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:block text-card/80 mt-3 text-sm lg:text-base max-w-md"
          >
            Handcrafted with love using traditional recipes, premium spices, and the freshest ingredients — delivered to your doorstep.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3 mt-4 md:mt-6"
          >
            <Link
              to="/products"
              className="bg-primary text-primary-foreground text-xs md:text-sm lg:text-base font-semibold px-5 md:px-8 py-2.5 md:py-3.5 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="hidden sm:flex bg-card/20 backdrop-blur-sm text-card border border-card/30 text-xs md:text-sm lg:text-base font-semibold px-5 md:px-8 py-2.5 md:py-3.5 rounded-full hover:bg-card/30 transition-all items-center gap-2"
            >
              Explore Menu
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Badges */}
      <section className="mx-4 md:mx-6 lg:mx-8 mt-6 md:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { icon: Truck, title: "Free Delivery", desc: "On orders above ₹499" },
            { icon: ShieldCheck, title: "Quality Assured", desc: "100% natural ingredients" },
            { icon: Leaf, title: "No Preservatives", desc: "Pure homemade taste" },
            { icon: Star, title: "4.8★ Rated", desc: "10,000+ happy customers" },
          ].map((badge, i) => (
            <motion.div
              key={badge.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl lg:rounded-2xl p-3 md:p-5 border border-border/50 shadow-soft flex items-center gap-3 md:gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-olive-light flex items-center justify-center shrink-0">
                <badge.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold">{badge.title}</p>
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
            <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">Shop by Category</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">Find your favourite flavour</p>
          </div>
          <Link to="/products" className="text-xs md:text-sm text-primary font-semibold flex items-center gap-0.5 hover:gap-1.5 transition-all">
            View All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div key={cat.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                to={`/products?category=${cat.name}`}
                className="flex flex-col items-center gap-2 md:gap-3 group"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl lg:rounded-3xl bg-olive-light flex items-center justify-center text-3xl md:text-4xl lg:text-5xl shadow-soft group-hover:shadow-card group-hover:scale-105 transition-all duration-300">
                  {cat.emoji}
                </div>
                <span className="text-xs md:text-sm lg:text-base font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Selling */}
      <section className="mt-8 md:mt-14 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">Best Selling</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">Most loved by our customers</p>
          </div>
          <Link to="/products" className="text-xs md:text-sm text-primary font-semibold flex items-center gap-0.5 hover:gap-1.5 transition-all">
            See All <ChevronRight size={14} />
          </Link>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {bestSelling.map((p, i) => (
            <motion.div key={p.id} custom={i} variants={fadeUp}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Promo Banner */}
      <section className="mt-8 md:mt-14 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl lg:rounded-3xl overflow-hidden"
        >
          <img src={promoBanner} alt="Special offer" loading="lazy" width={1200} height={512} className="w-full h-40 md:h-56 lg:h-72 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/20 flex flex-col justify-center pl-6 md:pl-12 lg:pl-16">
            <span className="text-secondary font-bold text-xs md:text-sm lg:text-base">SPECIAL OFFER</span>
            <h3 className="text-card font-bold text-lg md:text-2xl lg:text-4xl mt-1 md:mt-2 leading-tight">
              Buy 3 Get 1 Free
            </h3>
            <p className="text-card/70 text-xs md:text-sm mt-1 md:mt-2 max-w-xs">
              Mix & match any pickles from our collection. Limited period offer!
            </p>
            <Link
              to="/products"
              className="mt-3 md:mt-5 bg-secondary text-secondary-foreground text-xs md:text-sm font-bold px-5 md:px-6 py-2 md:py-3 rounded-full w-fit hover:opacity-90 transition-all active:scale-95"
            >
              Grab the Deal
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Recommended */}
      <section className="mt-8 md:mt-14 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">Recommended For You</h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5">Curated picks you'll love</p>
          </div>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {recommended.map((p, i) => (
            <motion.div key={p.id} custom={i} variants={fadeUp}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="mt-8 md:mt-16 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden grid md:grid-cols-2 gap-0"
        >
          <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest">Our Story</span>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2 md:mt-3 leading-tight">
              Crafted with <span className="text-primary">Tradition</span>,<br /> Served with Love
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 leading-relaxed">
              For over three generations, our family has been perfecting the art of pickling. Using age-old recipes passed down through generations, we create authentic preserves that bring the taste of home to every meal.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-2 md:mt-3 leading-relaxed">
              Every jar is handmade with love, using only the freshest ingredients and purest spices — no artificial preservatives, ever.
            </p>
            <Link
              to="/products"
              className="mt-4 md:mt-6 text-primary font-semibold text-sm md:text-base flex items-center gap-1 hover:gap-2 transition-all w-fit"
            >
              Discover Our Range <ArrowRight size={16} />
            </Link>
          </div>
          <div className="h-64 md:h-auto">
            <img src={storyImage} alt="Traditional pickle making" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="mt-8 md:mt-16 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">What Our Customers Say</h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">Real reviews from real pickle lovers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-5 md:p-6 border border-border/50 shadow-soft"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} className={si < t.rating ? "text-secondary fill-secondary" : "text-muted"} />
                ))}
              </div>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-8 md:mt-16 mx-4 md:mx-6 lg:mx-8 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl lg:rounded-3xl p-6 md:p-10 lg:p-14 text-center"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
            Stay in the <span className="text-secondary">Pickle Loop</span>
          </h2>
          <p className="text-primary-foreground/70 text-sm md:text-base mt-2 md:mt-3 max-w-md mx-auto">
            Get exclusive offers, new product alerts, and traditional recipes straight to your inbox.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="mt-5 md:mt-7 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 md:py-3.5 rounded-full text-sm bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="bg-secondary text-secondary-foreground font-bold text-sm px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Subscribe <Send size={14} />
            </button>
          </form>
        </motion.div>
      </section>
    </CustomerLayout>
  );
};

export default HomePage;
