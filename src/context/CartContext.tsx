"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev =>
      prev.some(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prev, { ...product, quantity }]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
