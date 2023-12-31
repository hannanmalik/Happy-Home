import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,Text,TouchableOpacity,TextInput,KeyboardAvoidingView,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ToastAndroid } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfile = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [img,setImg] = React.useState('');

  
  useEffect(() => {
    const getUserCreds = async () => {
        const userId = await AsyncStorage.getItem('user_id')
        console.log(userId)
        setEmail(auth().currentUser.email)
        firestore().collection('users').doc(userId).get()
            .then(response => {
              console.log(response)
                const data = response["_data"]
                setFirstName(data["firstname"]);
                setLastName(data["lastname"]);
                setPhone(data["phone"]);
                setImg(data["profile_pic"])
            }).catch(e => console.error(e))

    }
    getUserCreds()
},[]);


const updateUserProfile = async () => {
  try {
    const userId = await AsyncStorage.getItem('user_id');
    await firestore().collection('users').doc(userId).update({
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      profile_pic:img
    });


    ToastAndroid.showWithGravityAndOffset(
      'Data Updated',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    console.log('User data  updated successfully');
    navigation.goBack();
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

const choosePhotoFromLibrary = () => {
  ImagePicker.openPicker({
    width: 171,
    height: 171,
    cropping: true,
    compressImageQuality:0.7
  }).then((image) => {
    console.log(image);
    const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
    setImg(image.path);
  });
};

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View
      
      style={styles.container}
    >
    <View style={styles.cancelContainer}>
        <TouchableOpacity style={styles.cancelButton}  onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.imageProfile}>
      <View style={styles.circle}  >
        <Image source={{uri : img}}
          style={styles.dp}
        />
      </View>
      <TouchableOpacity style={{position:'absolute', }} onPress={choosePhotoFromLibrary}>
         <Image source={require('../images/vector1.png')}
          style={styles.v1}
        />
        <Image source={require('../images/vector2.png')}
          style={styles.v2}
        />
        <Image source={require('../images/vector3.png')}
          style={styles.v3}
        />
        <Image source={require('../images/vector4.png')}
          style={styles.v4}
        />
        <Image source={require('../images/vector5.png')}
          style={styles.v5}
        />
        </TouchableOpacity>
    </View>
    <View style={styles.form}>
        <View style={styles.textBox}>
            <Text style={styles.textBoxLabel}>First Name</Text>
            <TextInput
            label="First Name"
            value={firstName}
            onChangeText={firstName => setFirstName(firstName)} 
            style={styles.textBoxInput}
            />
        </View>

        <View style={styles.textBox}>
            <Text style={styles.textBoxLabel}>Last Name</Text>
            <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={lastName => setLastName(lastName)} 
            style={styles.textBoxInput}
            />
        </View>

        <View style={styles.textBox}>
            <Text style={styles.textBoxLabel}>Phone</Text>
            <TextInput
            label="Phone"
            value={phone == null ? '+92' : phone} 
            onChangeText={phone => setPhone(phone)} 
            style={styles.textBoxInput}
            />
        </View>

        <View style={styles.textBox}>
            <Text style={styles.textBoxLabel}>Email</Text>
            <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)} 
            style={styles.textBoxInput} editable={false}
            />
        </View>


        
    </View>
    <TouchableOpacity style={styles.saveButton} onPress={() => updateUserProfile()}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    
    

      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor:'white',
     },
  imageProfile:{
   alignItems:"center",
   width:'100%',
  //  height:400,
//    borderWidth:2,
//    borderColor:'red',
  // paddingHorizontal: 20,
   marginLeft: 30,
   marginRight:30.5,
    },
  circle:{
    width: 171.5,
    height: 171.5,
    borderRadius: 324.988,
    overflow: 'hidden',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  dp:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cancelContainer:{
//    borderWidth:2,
//    borderColor:'red',
   width:'100%',
   height:90.5,
   paddingHorizontal:31.5,
  },
  cancelButton:{
    marginTop:43.5,
    alignSelf: 'flex-start',
  },
  cancelText:{
    color: '#A30000', 
    fontSize: 15, 
    fontFamily:"Poppins-Medium",
  },
  v1:{
    position:'absolute',
    top:121.75,
    left:30.75,
    
    
  },
  v2:{
    position:'absolute',
    top:132.5,
    left:41.5,
    tintColor:"black"
    
  },
  v3:{
    position:'absolute',
    top:137.9,
    left:46.9,
    tintColor:"black"
    
  },
  v4:{
    position:'absolute',
    top:146.5,
    left:58,
    tintColor:"black"
  },
  v5:{
    position:'absolute',
    top:149,
    left:55.5,
    tintColor:"black"
  },
  form:{
//    borderWidth:2,
//    borderColor:'red',
   width:'90%',
   marginTop:31.5,
  },
  textBox:{
    flexDirection: 'column',
    justifyContent: 'space-around', 
    width: 328,
    height: 60,
    backgroundColor:'#F0F7FF',
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'#4F4F51',
    paddingHorizontal:12.5,
    marginTop:22.5
  },
  textBoxLabel:{
    fontFamily:'Poppins-Regular',
    fontSize:12.5,
    color:'#4F4F51',
    paddingTop:10
    // borderWidth:2,
    //    borderColor:'red',
  },
  textBoxInput:{
    fontFamily:'Poppins-SemiBold',
    fontSize:15,
    color:'#000',
  },
  saveButton: {
    marginTop:22.4,
    borderRadius: 5.285,
    width: '80%',
    height: 42,
    paddingVertical: 2.642,
    paddingHorizontal: 96.448,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28246A',
    marginTop:100
  },
  saveButtonText: {
    color: '#FFFFFF', 
    fontSize: 17, 
    fontFamily:"Poppins-SemiBold"
  },
  
  
});
