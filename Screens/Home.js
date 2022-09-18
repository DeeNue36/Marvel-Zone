import React, {useState} from 'react';
import { StyleSheet, View, Text, Modal, ImageBackground, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { globalStyles } from '../myStyles/globalStyle';
import Card from '../sharedComponents/cards';
import { MaterialIcons } from '@expo/vector-icons';
import AddReviews from './addReviews';

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const[myReviews,setMyReviews] = useState([
    { title: 'WandaVision', rating: 5, body: 'WandaVision is crazy', key: '1' },
    { title: 'Hawkeye', rating: 3, body: 'Hawkeye is action-packed', key: '2' },
    { title: 'MoonKnight', rating: 4, body: 'MoonKnight is mind blowing', key: '3' },
  ]);

  const newReview = (review) => {
    review.key = Math.random().toString();
    //setMyReviews which takes a parameter that accepts the existing reviews and adds the new review to the top of the review list
    setMyReviews((prevReviews) => {
      return [review, ...prevReviews];
    })
    setModalOpen(false);
  }

    return(
      <ImageBackground source={require('../assets/Marvel/Marvel_4.jpeg')} style={globalStyles.container}>

        {/* Introducing a modal to add new reviews */}
        <Modal visible={modalOpen} animationType='slide'>
          {/* To be able to dismiss the keyboard when you click on any part of the modal */}
          <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <View style = {styles.modalContent}>
              {/* Icon to click to toggle the modal close */}
              <MaterialIcons
                name='minimize'
                size={24}
                onPress={() => setModalOpen(false)}
                style={{ ...styles.toggleModal, ...styles.toggleModalClose}}
              />
              {/* JS file which introduces the textinputs to add new reviews */}
              <AddReviews newReview={newReview}/>
              {/* newReview: a function which generates a key for the new review and places it on top of the existing review*/}
            </View>
          </TouchableWithoutFeedback>  
        </Modal>   

        {/* Icon to click to open the modal */}
        <MaterialIcons
          name='add'
          size={24}
          onPress={() => setModalOpen(true)}
          style={styles.toggleModal}
        />

        {/* Component which takes the data from myReviews and setMyReviews and applies all the related styles*/}
        <FlatList
            data={myReviews}
            renderItem={({ item }) =>( 
                <TouchableOpacity onPress={() => navigation.navigate( 'ReviewDetails', item)}>
                   <Card>
                    <Text style={globalStyles.fonts}>{ item.title }</Text>
                   </Card>
                </TouchableOpacity>

            )}
        />
      </ImageBackground>  
    )
}

const styles = StyleSheet.create({
  modalContent:{
    flex: 1,
  },
  toggleModal:{
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor:'#fff',
  },
  toggleModalClose:{
    borderWidth: 1,
    borderColor: '#F83A53',
    marginTop: 20,
    marginBottom: 0,
  }
})

 