import { useCategory } from "@/contexts/CategoryContext";

interface Category {
  id: string;
  label: string;
}

const CATEGORIES: Category[] = [
  { id: "popular", label: "Popular" },
  { id: "forex", label: "Forex" },
  { id: "crypto", label: "Crypto CFDs" },
  { id: "metals", label: "Metals" },
  { id: "indices", label: "Indices" },
  { id: "futures", label: "Futures" },
  { id: "energy", label: "Energy" },
  { id: "shares", label: "Shares" },
  { id: "etfs", label: "ETFs" }
];

export default function CategoryNav() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="w-full bg-background border-b border-gold-500/15 overflow-hidden">
      <div className="container px-0">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 py-4 px-6 min-w-min">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "border-2 border-gold-500 text-gold-500"
                    : "border-2 border-transparent text-foreground hover:border-gold-500/30"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
