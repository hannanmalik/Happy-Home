import 'react-native-gesture-handler'
import HomeSlider from '../components/HomeSlider';
import GallerySlider from '../components/GallerySlider';
import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,Text,TouchableOpacity,TextInput
} from 'react-native';
import Swiper from 'react-native-swiper';

const DescriptionScreen = ({navigation}) => {
  const [price, setPrice] = React.useState('200,000,000');
  const [heading, setHeading] = React.useState('2 Story Furnished House for Sale in Luxury Housing Society');
  const [location, setLocation] = React.useState('F7, Islamabad');
  const [date, setData] = React.useState('2 Jun');
  const [category, setCategory] = React.useState('Villas');
  const [furnished, setFurnished] = React.useState('Unfurnished');
  const [areaUnit, setAreaUnit] = React.useState('Kanal');
  const [area, setArea] = React.useState('2');
  const [bedroom, setBedroom] = React.useState('4');
  const [bathroom, setBathroom] = React.useState('5');
  const [floorLevel, setFloorLevel] = React.useState('NAN');
  const [description, setDescription] = React.useState('2 Story Furnished House for Sale in Luxury Housing Society. The House is unfurnished and has 4 bedrooms and 5 bathrooms.Story Furnished House for Sale in Luxury Housing Society. The House is unfurnished and has 4 bedrooms an');
  const slides = [{image: require('../images/slider-image-1.png')},{image: require('../images/slider-image-2.png')},];
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
  };
  const slides3 = [
    {
      image: require('../images/slider-image-1.png'),
      height: 210,
      width: 152,
      sliderBg: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    
    {
      image: require('../images/slider-image-1.png'),
      height: 210,
      width: 152,
      sliderBg: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    {
      image: require('../images/slider-image-1.png'),
      height: 210,
      width: 152,
      sliderBg: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    {
      image: require('../images/slider-image-1.png'),
      height: 210,
      width: 152,
      sliderBg: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    {
      image: require('../images/slider-image-1.png'),
      height: 210,
      width: 152,
      sliderBg: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',},];
  return(
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
    <View style={styles.imageSlider}>
    <Swiper style={styles.wrapper} paginationStyle={styles.paginationContainer} dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle}>
          {slides.map((slide, index) => (
            <HomeSlider key={index} {...slide} />
          ))}</Swiper>
    </View>
    <View >
        <View style={styles.priceView}>
            <Text style={styles.priceT}>{'Rs '+ price}</Text>
            <TouchableOpacity style={styles.buyButton} >
            <Text style={styles.buyButtonText}>BUY NOW</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.headerT}>{heading}</Text>
        <View style={styles.locationheaderView}>
            <View style={styles.locationView}>
            <Image source={ require('../images/icon-location-on.png') }
            style={styles.icon_location_on} />
            <Text style={styles.locationText}>{location}</Text>
            </View>
            <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.detailView}>
            <Text style={styles.detailHeaderText}>Details</Text>
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Category:</Text>
                <Text style={styles.detailSubText}>{category}</Text>
                
                
            </View>
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Furnished:</Text>
                <Text style={[styles.detailSubText,{marginLeft:75}]}>{furnished}</Text>
            </View>
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Area Unit:</Text>
                <Text style={[styles.detailSubText,{marginLeft:80}]}>{areaUnit}</Text>
            </View>
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Area:</Text>
                <Text style={[styles.detailSubText,{marginLeft:115}]}>{area}</Text>
            </View>
        </View>
        <View style={ [styles.detailView,{marginTop:18,height:120}]}>
            <Text style={styles.detailHeaderText}>Features</Text>
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Bedrooms:</Text>
                <Text style={[styles.detailSubText,{marginLeft:73}]}>{bedroom}</Text>
            </View>    
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Bathrooms:</Text>
                <Text style={[styles.detailSubText,{marginLeft:67}]}>{bathroom}</Text>
            </View>    
            
            <View style={styles.detailSubView}>
                <Text style={styles.detailSubHeadText}>Floor Level:</Text>
                <Text style={[styles.detailSubText,{marginLeft:71}]}>{floorLevel}</Text>
            </View>
            
        </View>

        <View style={ [styles.detailView,{marginTop:18}]}>
            <Text style={styles.detailHeaderText}>Description</Text>
            <View style={styles.descHeaderView}>
                <Text style={styles.descText}>{description}</Text>
            </View>    
            
            
        </View>
        
        <ScrollView style={styles.slideContainer} horizontal={true}>
            {slides3.map((slide, index) => (
                <GallerySlider elevation={10} key={index} {...slide}/>
                    ))}
        <SlideBtn text='properties' onPress={() => console.log('Button pressed for slide 3')} />
        </ScrollView>

        <View style={{height:40}}></View>

    </View>

    
    
  </View>

  </ScrollView>
  
  );
};

export default DescriptionScreen;

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container: {
   flex: 1,
  //  alignItems: 'center',
   backgroundColor:'#F0F5FF',
     },
  imageSlider:{
    height:266.122,
    width:'100%',
//     borderWidth:1,
//    borderColor:'black',
     },
   descHeader:{
    height:146,
    width:'100%',
//     borderWidth:1,
//    borderColor:'red',
     },
    priceView:{
        marginTop:27.5,
        
        flexDirection:'row',
        width:'100%',
//     borderWidth:1,
//    borderColor:'black',
   justifyContent:"space-between",
   paddingHorizontal:20,
   

     },
     priceT:{
        fontSize:21,
        color:'#000',
        fontFamily:"Poppins-Bold"
     },
     buyButton: {
        borderRadius: 4.66,
        width: 112.5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28246A',
        paddingVertical:5
      },
      buyButtonText: {
        color: 'white', 
        fontSize: 13.235, 
        fontFamily:"Poppins-SemiBold"
      },
      headerT:{
        marginTop:3,
        color: '#131313', 
        fontSize: 16, 
        fontFamily:"Poppins-SemiBold",
        paddingLeft:20,
        paddingRight:20

      },
      locationheaderView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
        ,
        maxheight:20,
        marginTop:7
      },
      locationView:{
        width:220,
        flexDirection:'row',
        justifyContent:'flex-start',
        
      },
      locationText:{
        color: '#3C3C4399', 
        fontSize: 13, 
        fontFamily:"Poppins-Medium",
        marginLeft:10
      },
      dateText:{
        color: '#3C3C4399', 
        fontSize: 13, 
        fontFamily:"Poppins-Medium",
      },
      icon_location_on:{
        // alignSelf:"center",
        width:13.6,
        height:18
      },
      detailView:{
        height:150,
        marginTop:19,
        width:'100%',
        paddingHorizontal:27,
        // borderWidth:1,
        // borderColor:'red',
      },
      detailHeaderText:{
        fontSize:17.5,
        color:'#131313',
        fontFamily:"Poppins-SemiBold",
        marginBottom:10
      },
      detailSubView:{
        flexDirection:'row',
        // borderWidth:1,
        // borderColor:'black',
        justifyContent:'flex-start'
      },
     detailSubHeadText:{
        fontSize:15,
        color:'#131313',
        fontFamily:"Poppins-Medium",
     },
     
    detailSubText:{
        fontSize:15,
        color:'#131313',
        fontFamily:"Poppins-SemiBold",
        marginLeft:78
    },
    descHeaderView:{

    },
    descText:{
        fontSize:15,
        color:'#131313',
        fontFamily:"Poppins-Regular",
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
      slideContainer:{
        width: '100%',
        flexDirection: 'row',
        marginTop:80,
    },
    sliderBtn: {
      width: 135, 
      height: 135, 
      marginRight: 12,
      paddingLeft: 20,
      borderRadius: 10,
      overflow: 'hidden', 
      backgroundColor:'#FFF',
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
    right:10,

},


















  
  
});
