import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation();
  
    return (
      <ImageBackground
        source={require('../../assets/HomeScreen_Background_pic.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.drawerIconContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('MenuScreen')}
            >
              <Text style={styles.buttonText}>VIEW MENU</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };



const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#D23A28',
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },  
});

export default HomeScreen;
