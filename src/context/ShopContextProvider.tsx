import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { IItemInfos } from '../components/skiCard/SkiCard';

interface ICartContext {
  cartItems: IItemInfos[];
  addToCart: (item: IItemInfos) => void;
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
  const [cartItems, setCartItems] = useLocalStorage<IItemInfos[]>(
    'shopping-cart',
    []
  );

  const addToCart = (item: IItemInfos) => {
    setCartItems((prevItems = []) => {
      const updatedItems = [...prevItems];

      // Vérifiez si l'élément existe déjà dans le panier
      const existingItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.product.id === item.product.id
      );

      console.log(existingItemIndex);

      if (existingItemIndex !== -1) {
        // L'élément existe déjà dans le panier, mettez à jour sa quantité
        const existingItem = updatedItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity:
            existingItem.quantity !== null ? existingItem.quantity + 1 : 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // L'élément n'existe pas encore dans le panier, ajoutez-le avec une quantité de 1
        updatedItems.push({ ...item, quantity: 1 });
      }

      return updatedItems;
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems?.filter((item) => item.product.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  console.log('TEST CART', cartItems);
  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
