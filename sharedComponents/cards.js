import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card}>
            <View style = {styles.cardContent}>
{/*props.children allows us to use the card component anywhere and whatever it wraps automatically becomes the children and applies the related styles*/}
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 8,
        backgroundColor: '#fff',
        shadowOffset: {width:1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    cardContent: {
       marginHorizontal: 16,
       marginVertical: 10,  
    },
})