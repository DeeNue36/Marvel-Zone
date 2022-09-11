import 'react-native-gesture-handler';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
// import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/drawer';
import Home from './Screens/Home';
import About from './Screens/aboutScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular, JosefinSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    // <NavigationContainer>
      <Navigation/>
    // </NavigationContainer>
  );
}
