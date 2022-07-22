import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = React.createContext();

export const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItems = (items) =>  {
    isInCart(items.id) ? null : setCart([...cart, items]);
  };

  const clear = () => {
    setCart();
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={[cart, setCart, addItems, removeItem, clear, isInCart]}>
      {children}
    </CartContext.Provider>
  );
};