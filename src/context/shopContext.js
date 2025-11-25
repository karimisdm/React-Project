import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(() => {
    
    const stored = localStorage.getItem("cart-items");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    const exists = cartItems.find(item => item.id === itemId);

    if (!exists) {
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === itemId
          ? { ...item, count: item.count === 0 ? 0 : item.count - 1 }
          : item
      )
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
