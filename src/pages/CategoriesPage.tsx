import CustomerLayout from "@/components/layout/CustomerLayout";
import { categories, products } from "@/data/mockData";
import { Link } from "react-router-dom";

const categoryImages: Record<string, string> = {
  Mango: "🥭",
  Chili: "🌶️",
  Mixed: "🥗",
  Lemon: "🍋",
  Garlic: "🧄",
  Amla: "🫒",
};

const CategoriesPage = () => (
  <CustomerLayout>
    <div className="px-4 mt-4 mb-6">
      <h1 className="text-xl font-bold mb-1">Categories</h1>
      <p className="text-sm text-muted-foreground mb-6">Browse our pickle collection by category</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.name).length;
          return (
            <Link
              key={cat.id}
              to={`/products?category=${cat.name}`}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{categoryImages[cat.name] || "🫙"}</span>
              <h3 className="font-semibold text-sm">{cat.name}</h3>
              <span className="text-xs text-muted-foreground">{count} product{count !== 1 ? "s" : ""}</span>
            </Link>
          );
        })}
      </div>
    </div>
  </CustomerLayout>
);

export default CategoriesPage;
