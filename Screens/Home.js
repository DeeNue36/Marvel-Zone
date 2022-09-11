import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../myStyles/globalStyle';

export default function Home({navigation}) {

    const[myReviews,setMyReviews] = useState([
       { title: 'WandaVision', rating: 10, body: 'WandaVision is crazy', key: '1' },
       { title: 'Hawkeye', rating: 8.5, body: 'Hawkeye is action-packed', key: '2' },
       { title: 'MoonKnight', rating: 9.2, body: 'MoonKnight is mind blowing', key: '3' },
    ]);

    return(
      <View style={globalStyles.container}>
        <FlatList
            data={myReviews}
            renderItem={({ item }) =>( 
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.fonts}>{ item.title }</Text>
                </TouchableOpacity>

            )}
        />
      </View>  
    )
}

 