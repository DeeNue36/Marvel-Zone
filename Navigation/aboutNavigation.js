import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../Screens/aboutScreen';



const Stack = createNativeStackNavigator();

function AboutNavigation() { 
  return (
    <NavigationContainer independent={true}>
      {/* <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}> */}
      <Stack.Navigator 
         screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutNavigation;






