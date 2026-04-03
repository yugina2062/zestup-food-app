import productImg1 from "@/assets/product-pickle-1.jpg";
import productImg2 from "@/assets/product-pickle-2.jpg";
import productImg3 from "@/assets/product-pickle-3.jpg";
import productImg4 from "@/assets/product-pickle-4.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  { id: 1, name: "Mango Pickle (Aam Achar)", price: 249, originalPrice: 299, rating: 4.5, reviews: 128, image: productImg1, category: "Mango", description: "Traditional homemade mango pickle made with raw mangoes, mustard oil, and aromatic spices. Perfectly aged for rich flavor.", inStock: true },
  { id: 2, name: "Red Chili Pickle", price: 199, originalPrice: 249, rating: 4.3, reviews: 96, image: productImg2, category: "Chili", description: "Fiery red chili pickle made with hand-picked red chilies, blended with mustard seeds and fenugreek.", inStock: true },
  { id: 3, name: "Mixed Vegetable Pickle", price: 279, originalPrice: 329, rating: 4.7, reviews: 215, image: productImg3, category: "Mixed", description: "A delightful mix of seasonal vegetables preserved with traditional spices and mustard oil.", inStock: true },
  { id: 4, name: "Lemon Pickle (Nimbu Achar)", price: 189, originalPrice: 229, rating: 4.4, reviews: 87, image: productImg4, category: "Lemon", description: "Tangy lemon pickle with turmeric and salt, sun-dried for an authentic homemade taste.", inStock: true },
  { id: 5, name: "Garlic Pickle", price: 219, rating: 4.6, reviews: 154, image: productImg1, category: "Garlic", description: "Crunchy garlic cloves pickled in mustard oil with a blend of spices.", inStock: true },
  { id: 6, name: "Green Chili Pickle", price: 179, rating: 4.2, reviews: 72, image: productImg2, category: "Chili", description: "Fresh green chilies stuffed with spices and preserved in oil.", inStock: false },
  { id: 7, name: "Amla Pickle (Gooseberry)", price: 259, originalPrice: 299, rating: 4.8, reviews: 190, image: productImg3, category: "Amla", description: "Indian gooseberry pickle, rich in Vitamin C and packed with flavor.", inStock: true },
  { id: 8, name: "Carrot Pickle (Gajar Achar)", price: 209, rating: 4.1, reviews: 63, image: productImg4, category: "Carrot", description: "Crunchy carrot pickle with a perfect balance of tangy and spicy flavors.", inStock: true },
];

export const categories = [
  { id: 1, name: "Mango", emoji: "🥭" },
  { id: 2, name: "Chili", emoji: "🌶️" },
  { id: 3, name: "Mixed", emoji: "🥗" },
  { id: 4, name: "Lemon", emoji: "🍋" },
  { id: 5, name: "Garlic", emoji: "🧄" },
  { id: 6, name: "Amla", emoji: "🫒" },
];

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
}

export const sampleOrders: Order[] = [
  { id: "ZU-10042", date: "2026-03-28", items: [{ ...products[0], quantity: 2 }, { ...products[2], quantity: 1 }], total: 777, status: "delivered" },
  { id: "ZU-10038", date: "2026-03-20", items: [{ ...products[1], quantity: 1 }], total: 199, status: "processing" },
  { id: "ZU-10035", date: "2026-03-15", items: [{ ...products[3], quantity: 3 }], total: 567, status: "pending" },
];
