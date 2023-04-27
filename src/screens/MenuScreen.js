import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';
import MenuItems from '../components/MenuItems_Square';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('http://localhost:3001/menu-items');
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []); 

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  );
    

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <MenuItems menuItems={menuItems} />
      <SectionList
        sections={[
          {
            title: 'Bites to Share',
            data: menuItems.filter((item) => item.category === 'TLMVGOPI67ZRZR5DCJJMEOCO'),
          },
          {
            title: 'Sandwiches & Wraps',
            data: menuItems.filter((item) => item.category === '4CDF7LPRJNDBBOWKIIWCZYAP'),
          },
          {
            title: 'Main Events',
            data: menuItems.filter((item) => item.category === 'PTO3MCMHK3Y77SPL3GMMFPEP'),
          },
          {
            title: 'Sides',
            data: menuItems.filter((item) => item.category === '27NC5EG237U4JCXIN4NCUZN7'),
          },
        ]}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default MenuScreen;
