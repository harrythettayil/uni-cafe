import FoodItem from '../FoodItem/FoodItem';

const FoodList = ({ items, onAddToCart }) => {
  return (
    <div>
      {items.map((item) => (
        <FoodItem key={item.dish_id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default FoodList;