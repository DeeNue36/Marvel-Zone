import React from 'react';
import { StyleSheet, Text, ImageBackground} from 'react-native';
import { globalStyles } from '../myStyles/globalStyle';
import Card from '../sharedComponents/cards';

export default function About() {
  return(
    <ImageBackground source={require('../assets/Marvel/Marvel_16.jpeg')} style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.aboutText}>About MarvelZone</Text>
        <Text style={styles.aboutContent}>
          MarvelZone is an app I designed to enable Marvel fans all around the globe to have their say on every Marvel movie and series released thus far.
          I sincerely hope each one of provide your honest opinions and thoughts.
          Lastly have fun using the app :).
        </Text>
        <Text style={styles.endRemarks}> 
          Yours Sincerely: <Text style={styles.nameColor}>DeeNue36</Text>
        </Text>
      </Card>
    </ImageBackground>  
  )
}

const styles = StyleSheet.create({
  aboutContent:{
    fontFamily: 'JosefinSans_400Regular',
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 5,
  },
  endRemarks:{
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 16,
    marginTop: 7,
    textAlign:'right', 
  },
  nameColor:{
    color:'#E60F21'
  }
})

 