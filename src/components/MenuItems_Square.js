import { useEffect, useState } from 'react';

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('http://localhost:3001/menu-items');
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  const shawarmaWrap = menuItems.find(item => item.item_data.name === 'Shawarma Wrap');

  return (
    <>
      {shawarmaWrap && (
        <div>
          <h2>{shawarmaWrap.item_data.name}</h2>
          <p>{shawarmaWrap.item_data.description}</p>
          {/* Render other item properties here */}
        </div>
      )}
    </>
  );
};
export default MenuItems;
