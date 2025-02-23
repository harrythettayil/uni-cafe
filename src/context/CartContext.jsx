import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.dish_id === item.dish_id);
      if (existingItem) {
        // If the item already exists, increment its quantity
        return prevCart.map((cartItem) =>
          cartItem.dish_id === item.dish_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const incrementItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.dish_id === item.dish_id);
      if (existingItem) {
        // If the item exists, increment its quantity
        return prevCart.map((cartItem) =>
          cartItem.dish_id === item.dish_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const decrementItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.dish_id === itemId
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) } // Ensure quantity doesn't go below 0
          : cartItem
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.dish_id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementItem, decrementItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);