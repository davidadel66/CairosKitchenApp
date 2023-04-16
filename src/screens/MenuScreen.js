import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import menuItems from './menuItems';

const MenuScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{ width: '100%', height: 200 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ fontSize: 16 }}>{item.description}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MenuScreen;
