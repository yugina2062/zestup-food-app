import { useState } from "react";
import CustomerLayout from "@/components/layout/CustomerLayout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProductListingPage = () => {
  const [query, setQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = products.filter((p) => {
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchCat = selectedCat === "All" || p.category === selectedCat;
    return matchQuery && matchCat;
  });

  return (
    <CustomerLayout>
      <div className="px-4 mt-4">
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search pickles..." className="pl-10 rounded-xl h-11" />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCat === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 mb-6">
          {filtered.length > 0 ? (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="col-span-2 text-center text-muted-foreground py-12">No products found</p>
          )}
        </div>
      </div>
    </CustomerLayout>
  );
};

export default ProductListingPage;
