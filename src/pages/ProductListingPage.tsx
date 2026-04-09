import { useState } from "react";
import CustomerLayout from "@/components/layout/CustomerLayout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const sortOptions = ["Popularity", "Price: Low-High", "Price: High-Low", "Rating"];

const ProductListingPage = () => {
  const [query, setQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");
  const [showSort, setShowSort] = useState(false);

  let filtered = products.filter((p) => {
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchCat = selectedCat === "All" || p.category === selectedCat;
    return matchQuery && matchCat;
  });

  if (sortBy === "Price: Low-High") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "Price: High-Low") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === "Rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <CustomerLayout>
      <div className="px-4 mt-4">
        {/* Search */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pickles & achar..." className="pl-10 rounded-xl h-12" />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCat === cat
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Count */}
        <div className="flex items-center justify-between mt-2 mb-3">
          <p className="text-xs text-muted-foreground">{filtered.length} products</p>
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <SlidersHorizontal size={14} /> {sortBy} <ChevronDown size={12} />
            </button>
            {showSort && (
              <div className="absolute right-0 top-7 bg-card border border-border rounded-xl shadow-card z-20 py-1 min-w-[160px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setShowSort(false); }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-muted transition-colors ${sortBy === opt ? "text-primary font-semibold" : ""}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {filtered.length > 0 ? (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="col-span-full text-center py-16">
              <span className="text-4xl block mb-3">🔍</span>
              <p className="text-sm text-muted-foreground">No products found</p>
            </div>
          )}
        </div>
      </div>
    </CustomerLayout>
  );
};

export default ProductListingPage;
