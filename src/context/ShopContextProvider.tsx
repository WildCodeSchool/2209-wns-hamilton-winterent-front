import React, { ReactNode, createContext, useState } from "react";
import { Product } from "../generated/graphql";

interface ICartContext {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
}

export const ShopContext = createContext<ICartContext>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prevItems = []) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems?.filter((item) => item.id !== itemId)
    );
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
