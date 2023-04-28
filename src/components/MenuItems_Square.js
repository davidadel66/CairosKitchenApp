import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


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


  
};
export default MenuItems;
