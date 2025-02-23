import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h3>Cart ({totalItems})</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.dish_id}>
            {item.dish_name} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;