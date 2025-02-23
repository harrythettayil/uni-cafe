import { useState, useEffect } from 'react';
import useFetchMenu from '../../hooks/useFetchMenu'
import CategorySlider from '../../components/CategorySlider/CatergorySlider';
import FoodList from '../../components/FoodList/FoodList';
import Cart from '../../components/Cart/Cart';

const MenuPage = () => {
  const { data, loading, error } = useFetchMenu('https://zartek-task.vercel.app/api/resto-cafe');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Set the first category as default when data is loaded
  useEffect(() => {
    if (data && data.data && data.data[0].table_menu_list.length > 0) {
      setSelectedCategory(data.data[0].table_menu_list[0]);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const categories = data?.data[0]?.table_menu_list || [];
  const items = selectedCategory ? selectedCategory.category_dishes : [];

  return (
    <div className='container'>
      <Cart />
      <CategorySlider
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FoodList items={items} onAddToCart={(item) => console.log('Add to cart:', item)} />
    </div>
  );
};

export default MenuPage;