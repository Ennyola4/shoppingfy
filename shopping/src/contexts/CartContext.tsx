// src/contexts/CartContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type CartItem } from "../contexts/cart.types";
import { toast } from "react-hot-toast";

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: number, size: string, color: string) => void;
  updateQuantity: (
    productId: number,
    size: string,
    color: string,
    quantity: number
  ) => void;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Load items from localStorage if available
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Persist cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  // Add item to cart
  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === newItem.product.id &&
        item.size === newItem.size &&
        item.color === newItem.color
      );
      

      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...prev, newItem];
    });
    toast.success("Item added to cart!");
    setIsCartOpen(false);
  };

  // Remove item from cart
  const removeItem = (productId: number, size: string, color: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.size === size &&
            item.color === color
          )
      )
    );
    toast.error("Item removed from cart!");
  };

  // Update quantity of an item
  const updateQuantity = (
    productId: number,
    size: string,
    color: string,
    quantity: number
  ) => {
    if (quantity < 1) return;

    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
          item.size === size &&
          item.color === color
          ? { ...item, quantity }
          : item
      )
    );
    toast.success("Item quantity updated!");
  };

  // Total price
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // ✅ Clear cart
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addItem,
        removeItem,
        updateQuantity,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
