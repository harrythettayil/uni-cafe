import { useCart } from '../../context/CartContext';
import './FoodItem.css'

const FoodItem = ({ item }) => {
  const { cart, incrementItem, decrementItem } = useCart();

  // Find the current quantity of the item in the cart
  const cartItem = cart.find((cartItem) => cartItem.dish_id === item.dish_id);
  const quantity = cartItem ? cartItem.quantity : 0;

  console.log('Cart Item:', cartItem); // Debugging: Log the cart item
  console.log('Quantity:', quantity); // Debugging: Log the quantity

  return (
    <div className='food-item d-flex'>
      <div className='item-details'>
      <h3 className='item-title'>{item.dish_name}</h3>
      <p className='item-price'>{item.dish_currency} {item.dish_price}</p>
      <p className='item-desc'>{item.dish_description}</p>
      {item.dish_Availability ? (
        <div>
          <div className="btn-container">
            <button className="btn" onClick={() => decrementItem(item.dish_id)}>-</button>
            <span>{quantity}</span>
            <button className="btn" onClick={() => incrementItem(item)}>+</button>
          </div>
          
          {item.addonCat && item.addonCat.length > 0 && (
            <p className="item-custom">Customizations available</p>
          )}
        </div>
      ) : (<p className="item-custom">Not available</p>) }
      </div>
      <div className='d-flex food-img-container'>
        <p className='item-calorie'>Calories: {item.dish_calories}</p>     
        <img className='food-img' src={item.dish_image} alt={item.dish_name} />
      </div>
    </div>
  );
};

export default FoodItem;