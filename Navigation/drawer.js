import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './homeNavigation';
import AboutNavigation from './aboutNavigation';

const Drawer = createDrawerNavigator();
//     Home: { 
//         screen: HomeNavigation,
//     },
//     About: {
//         screen: AboutNavigation,
//     }

// });

// export default createAppContainer(Drawer);

export default function MyDrawer() {  
    return (
        <NavigationContainer >
            <Drawer.Navigator 
                screenOptions={{
                    headerTitle: 'MarvelZone',
                    headerStyle: { backgroundColor: 'red'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    height: 60,
                }}
            >
                <Drawer.Screen name="Home" component={HomeNavigation} />
                <Drawer.Screen 
                name="About" 
                component={AboutNavigation} 
                options={{ headerTitle: 'About MarvelZone'}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}









// // import 'react-native-gesture-handler';
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { createDrawerNavigator } from "react-navigation-drawer";
// // // import { NavigationContainer } from '@react-navigation/native';
// // import Home from '../Screens/Home';
// // import ReviewDetails from "../Screens/reviewDetails";


// // const Drawer = createDrawerNavigator();

// // function App() {
// //     return(
// //         <Drawer.Navigator>
// //             <Drawer.Screen name="Home" component={Home}/>
// //             <Drawer.Screen name="Review Details" component={ReviewDetails}/>
// //             <Drawer.Screen/>
// //         </Drawer.Navigator>
// //     )
// // }

// // const DrawerNavigator = createDrawerNavigator({
// //     return(
// //         <Drawer.Navigator><
// //     )

// // })