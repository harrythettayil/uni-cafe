import { useCart } from '../../context/CartContext';
import './Cart.css'

const Cart = () => {
  const { cart } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='navbar'>
      <h3 className='heading-3'>UNI Resto Cafe</h3>
      <div>
        <p className='paragraph'>My Orders ({totalItems})</p>
        {/* <ul>
          {cart.map((item) => (
            <li key={item.dish_id}>
              {item.dish_name} (Quantity: {item.quantity})
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Cart;