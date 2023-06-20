import React, { createContext } from "react";
import { Product } from "../generated/graphql";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  const [cartItems, setCartItems] = useLocalStorage<Product[]>(
    "shopping-cart",
    []
  );

  const addToCart = (item: Product) => {
    setCartItems((prevItems = []) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems?.filter((item) => item.id !== itemId)
    );
  };

  console.log("TEST CART", cartItems);
  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
