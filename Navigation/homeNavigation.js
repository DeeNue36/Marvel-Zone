import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ReviewDetails from "../Screens/reviewDetails";


const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <NavigationContainer independent={true} >
      {/* <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}> */}
      <Stack.Navigator 
         screenOptions={{
            headerShown: false, 
          }}
        >
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="ReviewDetails" component={ ReviewDetails }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;










// const screens ={
//     Home:{
//         screen: Home
//     },
//     ReviewDetails:{
//         screen: ReviewDetails
//     }
// }

// const HomeStack = createStackNavigator(screens);

// export default createAppComponent(HomeStack);