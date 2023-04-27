import { useEffect, useState } from 'react';

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('http://localhost:3001/menu-items');
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return menuItems;
};

export default useMenuItems;
