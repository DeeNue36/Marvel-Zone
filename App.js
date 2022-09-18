import 'react-native-gesture-handler';
import React from 'react';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import Navigation from './Navigation/drawer';

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular, JosefinSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Navigation/>
  );
}
