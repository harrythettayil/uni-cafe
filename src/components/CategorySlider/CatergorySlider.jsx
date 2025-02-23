import './CategorySlider.css'

const CategorySlider = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className='category-slider'>
      {categories.map((category) => (
        <div
          key={category.menu_category_id}
          className={`category ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.menu_category}
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;