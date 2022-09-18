import { StyleSheet } from "react-native"; 

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        resizeMode: 'cover',
    },
    fonts: {
        fontFamily:'JosefinSans_700Bold', 
        fontSize:24,
        color: '#E60F21',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'cornflowerblue',
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
    },
    errorMessages: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5, 
        textAlign: 'center',
    },
    aboutText: {
        fontFamily: 'JosefinSans_700Bold',
        fontSize: 24,
        textAlign: 'center',
        color: '#E60F21',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
});