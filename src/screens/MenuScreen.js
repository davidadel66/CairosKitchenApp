import React from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';
import menuItems from '../components/MenuItems';

const MenuScreen = () => {
    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
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
        <SectionList
          sections={[
            { title: 'Bites to Share', data: menuItems.filter((item) => item.category === 'Bites to Share') },
            { title: 'Sandwiches and Wraps', data: menuItems.filter((item) => item.category === 'Sandwiches and Wraps') },
            { title: 'Main Events', data: menuItems.filter((item) => item.category === 'Main Events') },
            { title: 'Sides', data: menuItems.filter((item) => item.category === 'Sides') },
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
