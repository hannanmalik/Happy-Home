import 'react-native-gesture-handler'
import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeSlider = ({ image}) => (
  
  <View style={styles.imageContainer}>
    <ImageBackground source={image} style={styles.imageBackground}>
    </ImageBackground>
  </View>
  
);

const styles = StyleSheet.create({  
  imageContainer: {
    height: '100%',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    marginLeft: 165,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 40,
  },
  heading: {
    color: '#FFF',
    textAlign: 'right',
    fontFamily: 'Poppins-Black',
    fontSize: 17.5,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },  
  description: {
    color: '#FFF',
    textAlign: 'right',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'semibold',
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#28246A', 
    padding: 5,
    borderRadius: 5,
    marginVertical: 15,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 20, 
    height: 20, 
    resizeMode: 'contain',
  },
});

export default HomeSlider;
