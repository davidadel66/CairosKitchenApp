import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import CateringScreen from './src/screens/CateringScreen';
import ContactScreen from './src/screens/ContactScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function MenuStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ title: 'Menu', headerShown: false }} // Add headerShown: false
      />
      {/* Add other related screens to the stack here */}
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Menu" component={MenuStackNavigator} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        <Drawer.Screen name="Catering" component={CateringScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
