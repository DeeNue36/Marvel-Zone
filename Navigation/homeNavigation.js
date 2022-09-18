import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ReviewDetails from "../Screens/reviewDetails";
import Header from '../sharedComponents/Header';

const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={ Home } 
          options={{ headerShown:false }}
        />
        <Stack.Screen 
          name="ReviewDetails" 
          component={ ReviewDetails }
          // options={{ 
          //   headerShown: true,
          //   headerStyle: { backgroundColor: 'pink'},
          //   headerTitle: () => <Header title='Reviews'/>,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;

// export default function HomeNav({ navigation, route }) {
//   React.useLayoutEffect(() => {
//     if(!navigation || !route) return

//     //Get the parents drawer id ad defined in drawer.js
//     const drawerId = navigation.getParent('Drawer')

//     if (drawerId) {
//       //Making sure the route name is reviewdetails before turning drawer header off
//       if (route.name === 'ReviewDetails') {
//         drawerId.setOptions({
//           headerShown: false,
//         })
//       }
//     }
//     //Turn header back on when unmount
//     return drawerId
//       ?() => {
//         drawerId.setOptions({
//           headerShown: true,
//         })
//       }
//       : undefined
//   }), [navigation, route]
//   // return HomeNav
// };










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