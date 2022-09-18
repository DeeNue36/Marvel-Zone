import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../myStyles/globalStyle';
import { ratingImages } from '../myStyles/ratings';
import Card from '../sharedComponents/cards'

export default function ReviewDetails({route}) {

  const hearts = route.params.rating

  return(
    <ImageBackground source={require('../assets/Marvel/Marvel_7.jpeg')} style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>MarvelZone Rating: </Text>
            <Image source={ratingImages.ratingsValue[hearts]} />
        </View>
        {/* I commented this out because I want to display an image for the ratings instead of just showing a number*/}
        {/* <Text>{route.params.rating}</Text> */} 
      </Card>
    </ImageBackground> 
  )
} 

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 18,
    borderTopWidth: 2,
    borderTopColor: 'pink',
  },
});

