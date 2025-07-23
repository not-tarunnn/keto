import { useCartContext } from "@/context/CartContext";

export default function useCart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartContext();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };
}
