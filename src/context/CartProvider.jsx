import { createContext, useState } from 'react';
import { useLoaderData } from "react-router-dom";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart, products }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
