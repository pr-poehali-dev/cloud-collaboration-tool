import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  title: string;
  img: string;
  newPrice: string;
  oldPrice: string;
  tag: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (title: string) => void;
  updateQty: (title: string, delta: number) => void;
  total: number;
  count: number;
  clear: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) => i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (title: string) => {
    setItems((prev) => prev.filter((i) => i.title !== title));
  };

  const updateQty = (title: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => i.title === title ? { ...i, quantity: i.quantity + delta } : i)
        .filter((i) => i.quantity > 0)
    );
  };

  const parsePrice = (price: string) => parseFloat(price.replace(/[^\d]/g, ""));

  const total = items.reduce((sum, i) => sum + parsePrice(i.newPrice) * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, total, count, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
