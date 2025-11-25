import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {


  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cart-items");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart-items", JSON.stringify(cartItems));
    } catch {
    }
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === itemId);

      if (!exists) {
        return [...prev, { id: itemId, count: 1 }];
      }

      return prev.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      );
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, count: item.count === 0 ? 0 : item.count - 1 }
          : item
      )
    );
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
