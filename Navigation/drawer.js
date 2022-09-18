import 'react-native-gesture-handler';
import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './homeNavigation';
import AboutNavigation from './aboutNavigation';
import Header from '../sharedComponents/Header';

 
const Drawer = createDrawerNavigator();

export default function MyDrawer() {  

    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator id='Drawer' 
                screenOptions={{
                    headerStyle: { backgroundColor: '#F83A53'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    height: 60,
                    
                }}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={ HomeNavigation } 
                    options={{
                        headerTitle: () =>
                         <Header title='MarvelZone' />,
                    }}
                />
                <Drawer.Screen 
                    name="About" 
                    component={ AboutNavigation } 
                    options={{ headerTitle: () => <Header title='About MarvelZone'/>}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}












