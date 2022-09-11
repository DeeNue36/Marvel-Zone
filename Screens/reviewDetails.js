import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../myStyles/globalStyle';

export default function ReviewDetails({route, navigation}) {
    // const {title}  = route.params;
    // const pressHandler = () =>{
    //     navigation.goBack();
    // }

    return(
      <View style={globalStyles.container}>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
        {/* <Text>{JSON.stringify(title)}</Text>  */}
        {/* <Button
            title="Back To Home Page"
            onPress={pressHandler}
        /> */}
      </View>  
    )
}

