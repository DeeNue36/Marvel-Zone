import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { globalStyles } from '../myStyles/globalStyle';
import { Formik } from 'formik';
import * as yup from 'yup';
import CustomButton from '../sharedComponents/CustomButton';

//Schema Using Yup to validate the Formik Values so that accurate data is passed into them
const ValidateReviews = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(10),
    rating: yup.string()
        .required()
        .test('Is-number-btw-1-5', 'The rating must be a number from 1 to 5', (ratingVal)=>{
            return parseInt(ratingVal) < 6 && parseInt(ratingVal) > 0
        })
})

// newReview(declared in Home.js) is destructured here so that we can pass it in as a parameter 
export default function AddReviews({ newReview }) {
    return(
        <View style={globalStyles.container}>
            {/* Formik form taking in the values of title, body and rating */}
            <Formik 
                // predefined values the form is set to accept
                initialValues={{ title: '', body: '', rating: '',}}
                //function/property which returns the yup validation
                validationSchema={ValidateReviews}
                // Formik function which submits the new review to the function newReview in Home.js and also resets the form
                onSubmit={(values, actions) => {
                    newReview(values);
                    actions.resetForm();
                }}
            >
              {/* Parameter which takes the initialValues as defined above */}
              {(myFormikProps) => (
                <View>
                    {/* TextInput form to accept,monitor and update the title of the review */}
                    <TextInput
                      multiline minHeight={60}
                      style={globalStyles.input}
                      placeholder='Movie or Series Name'
                      onChangeText={myFormikProps.handleChange('title')}
                      values={myFormikProps.values.title}
                      //using the onBlur callback to get the error messages in real time when the condition is not met
                      onBlur={myFormikProps.handleBlur('title')}   
                    />
                    {/* Using Yup and Formik to display the error messages only when its been touched using the logical 'AND' i.e{&&} */}
                    <Text style={globalStyles.errorMessages}> { myFormikProps.touched.title && myFormikProps.errors.title } </Text>

                    {/* TextInput form to accept,monitor and update the body of the review */}
                    <TextInput
                      multiline minHeight={60}
                      style={globalStyles.input}
                      placeholder='Thoughts on the Movie or Series'
                      onChangeText={myFormikProps.handleChange('body')}
                      values={myFormikProps.values.body}
                      //using the onBlur callback to get the error messages in real time when the condition is not met
                      onBlur={myFormikProps.handleBlur('body')} 
                    />
                    {/* Using Yup and Formik to display the error messages only when its been touched using the logical 'AND' i.e{&&} */}
                    <Text style={globalStyles.errorMessages}> { myFormikProps.touched.body && myFormikProps.errors.body } </Text>

                    {/* TextInput form to accept,monitor and update the ratings of the review */}
                    <TextInput
                      style={globalStyles.input}
                      placeholder='Rating from (1-5)'
                      onChangeText={myFormikProps.handleChange('rating')}
                      values={myFormikProps.values.rating}
                      keyboardType='numeric'
                      //using the onBlur callback to get the error messages in real time when the condition is not met
                      onBlur={myFormikProps.handleBlur('rating')} 
                    />
                    {/* Using Yup and Formik to display the error messages only when its been touched using the logical 'AND' i.e{&&}*/}
                    <Text style={globalStyles.errorMessages}> { myFormikProps.touched.rating && myFormikProps.errors.rating } </Text>

                    {/* Button to submit the review */}
                    <CustomButton text="Submit" onPress={myFormikProps.handleSubmit}/>
                    {/* <Button 
                      title='Submit Review'
                      color='teal'
                      onPress={myFormikProps.handleSubmit}
                    /> */}
                </View>
              )}
            </Formik>
        </View>
    )
}