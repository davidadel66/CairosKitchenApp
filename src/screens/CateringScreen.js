import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CateringScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catering</Text>
      <Text style={styles.content}>This is the Catering page content.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CateringScreen;
