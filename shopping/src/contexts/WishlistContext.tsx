import { createContext, useContext, useEffect, useState,  } from "react";
import { toast } from "react-hot-toast";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  
}

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wishlistItems");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(items));
  }, [items]);

  // Add item
  const addItem = (newItem: WishlistItem) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === newItem.id);
      if (exists) {
        toast.error("Item already in wishlist");
        return prev;
      }
      toast.success("Added to wishlist");
      return [...prev, newItem];
    });
  };

  // ✅ REMOVE ITEM (THIS FIXES YOUR ERROR)
  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from wishlist");
  };

  const clearWishlist = () => {
    setItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Hook
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};
