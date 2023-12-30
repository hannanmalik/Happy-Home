import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import HomeSlider from '../components/HomeSlider';
import { ScrollView } from 'react-native-gesture-handler';
import HomeSlider2 from '../components/HomeSlider2';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const SlideBtn = ({text, onPress, height}) => {
  return(
    <View style={{...styles.sliderBtn, height: height}}>
      <Text style={styles.heading2}>More</Text>
      <Text style={styles.desc}>Show all {text}</Text>
      <TouchableOpacity style={styles.moreBtn} onPress={onPress}>
        <Image source={require('../images/back.png')} style={styles.buttonIcon}/>
      </TouchableOpacity>
    </View>
  )
}


export default function HomeScreen() {
  const [yourProperties, setYourProperties] = useState([]);
  const [flats, setFlats] = useState([]);
  const [villas, setVillas] = useState([]);

  useEffect(() => {
    const unsubscribeYourProperties = firebase
      .firestore()
      .collection('Properties')
      .limit(3) // Limit to 3 properties
      .onSnapshot(querySnapshot => {
        const propertiesData = [];
        querySnapshot.forEach(doc => {
          propertiesData.push({ id: doc.id, ...doc.data() });
        });
        setYourProperties(propertiesData);
      });

    const unsubscribeFlats = firebase
      .firestore()
      .collection('Properties')
      .where('Category', '==', 'Flat')
      .limit(3) // Limit to 3 properties
      .onSnapshot(querySnapshot => {
        const flatsData = [];
        querySnapshot.forEach(doc => {
          flatsData.push({ id: doc.id, ...doc.data() });
        });
        setFlats(flatsData);
      });

    const unsubscribeVillas = firebase
      .firestore()
      .collection('Properties')
      .where('Category', 'in', ['Villa', 'House'])
      .limit(3) // Limit to 3 properties
      .onSnapshot(querySnapshot => {
        const villasData = [];
        querySnapshot.forEach(doc => {
          villasData.push({ id: doc.id, ...doc.data() });
        });
        setVillas(villasData);
      });

    return () => {
      console.log(yourProperties)
      unsubscribeYourProperties();
      unsubscribeFlats();
      unsubscribeVillas();
    };
  }, []);

  const slides = [
    {
      image: require('../images/SliderImg1.png'),
      heading: 'Sell your Home!',
      description: 'HAPPY HOME is a platform,  that allows its user to buy and sell their properties at best prices.',
      onPress: () => console.log('Button pressed for slide 1'),
    },
    {
      image: require('../images/SliderImg1.png'),
      heading: 'Sell your Home!',
      description: 'HAPPY HOME is a platform,  that allows its user to buy and sell their properties at best prices.',
    },
  ];
  const slides2 = [
    {
      image: require('../images/SliderImg1.png'),
      height: 135,
      width: 135,
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 135,
      width: 135,
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 135,
      width: 135,
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 135,
      width: 135,
    },
  ];
  const slides3 = [
    {
      image: require('../images/SliderImg1.png'),
      height: 180,
      width: 270,
      overlayText: true,
      text: 'Project 1'
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 180,
      width: 270,
      overlayText: true,
      text: 'Project 1'
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 180,
      width: 270,
      overlayText: true,
      text: 'Project 1'
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 180,
      width: 270,
      overlayText: true,
      text: 'Project 1'
    },
  ];

  return (
    
    <ScrollView style={styles.container}>
      {/* <Button style={{height: 50}} title="Add Document to Firestore" onPress={handleAddDocument} /> */}
      <View style={styles.rectangle}/>
        <Swiper style={styles.wrapper} containerStyle={styles.swiperContainer} paginationStyle={styles.paginationContainer} dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle}>
          {slides.map((slide, index) => (
            <HomeSlider key={index} {...slide}/>
          ))}
        </Swiper>
        <View style={styles.contentContainer}>        
          <Text style={styles.heading}>Your Properties</Text>
          <ScrollView style={styles.slideContainer} horizontal={true}>
            {yourProperties.map((slide, index) => (
              <HomeSlider2 key={index} image={slide.image} height={135} width={135}/>
            ))}
            <SlideBtn text='properties' onPress={() => console.log('Button pressed for slide 1')} />
          </ScrollView>

          <Text style={styles.heading}>Flats and Apartments</Text>
          <ScrollView style={styles.slideContainer} horizontal={true}>
            {flats.map((slide, index) => (
              <HomeSlider2 key={index} image={slide.image} height={135} width={135}/>
            ))}
            <SlideBtn text='options' onPress={() => console.log('Button pressed for slide 2')} />
          </ScrollView>

          <Text style={styles.heading}>Villas</Text>
          <ScrollView style={styles.slideContainer} horizontal={true}>
            {villas.map((slide, index) => (
              <HomeSlider2 key={index} image={slide.image} height={180} width={270} overlayText={true} text={slide.title}/>
            ))}
            <SlideBtn text='villas' onPress={() => console.log('Button pressed for slide 3')} />
          </ScrollView>
          <View style={styles.blank}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blank: {
    height: 70,
  },
  rectangle:{
    height: 30,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  swiperContainer: {
    marginTop: 10,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
  },
  sliderBtn: {
    width: 135, 
    height: 135, 
    marginRight: 12,
    paddingLeft: 20,
    borderRadius: 10,
    overflow: 'hidden', 
    backgroundColor: '#FFF',
  },
  slideContainer:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  wrapper: {
    height: 200,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#fff8', 
    margin: 3,
  },
  activeDotStyle: {
    width: 20,
    height: 7,
    borderRadius: 6,
    backgroundColor: '#FFF', 
    margin: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F5FF',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', 
  },
  heading: {
    color: '#131313',
    fontFamily: 'Poppins-Black',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: 20,
  },
  heading2: {
    color: '#131313',
    fontFamily: 'Poppins-Black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  desc: {
    color: '#4E4E4E',
    fontFamily: 'Poppins',
    fontSize: 10,
    marginTop: 5,
  },
  moreBtn: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2, 
    backgroundColor: '#282475', 
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,

  },
});
