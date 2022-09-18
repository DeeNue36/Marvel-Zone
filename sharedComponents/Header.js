import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function Header({title}) {
    return(
        <View style = {styles.header}>
            <View style = {styles.headerTitle}>
                <Image 
                source={require('../assets/M_logo_1.2.png')}
                style={styles.headerImage}
                />
                <Text style = {styles.headerText}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle:{
        flexDirection: 'row',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
        
    },
    headerImage:{
        width: 40,
        height: 30,
        marginHorizontal: 10,
    },
});