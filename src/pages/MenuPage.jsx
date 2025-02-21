import { useEffect, useState } from 'react';

const MenuPage = () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('https://zartek-task.vercel.app/api/resto-cafe')
          .then((response) => response.json())
          .then((data) => {
            // console.log('API Response:', data);
            setMenuData(data?.data || []); 
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

  return (
    <div className="menu-page">
    </div>
  );
};

export default MenuPage;