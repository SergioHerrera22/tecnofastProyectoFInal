import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    const existingProductIndex = cart.findIndex(
      (prod) => prod.id === itemToAdd.id
    );

    if (existingProductIndex >= 0) {
      const newCart = [...cart];

      newCart[existingProductIndex].count += itemToAdd.count;

      setCart(newCart);
    } else {
      setCart([...cart, itemToAdd]);
    }
  };
  const removeItem = (id) => {
    const itemIndex = cart.findIndex((prod) => prod.id === id);

    if (itemIndex >= 0) {
      const newCart = [...cart];

      if (newCart[itemIndex].count > 1) {
        newCart[itemIndex].count -= 1;
        setCart(newCart);
      } else {
        const filteredCart = cart.filter((prod) => prod.id !== id);
        setCart(filteredCart);
      }
    }
  };
  const getQuantity = () => {
    const quantities = cart.map((item) => item.count);
    const total = quantities.reduce((acc, current) => acc + current, 0);

    return total;
  };

  const getTotal = () => {
    const precios = cart.map((item) => item.count * item.price);
    const total = precios.reduce((acc, current) => acc + current, 0);

    return total;
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ addToCart, getQuantity, cart, getTotal, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
