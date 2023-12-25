import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,Text,TouchableOpacity,TextInput
} from 'react-native';


const EditProfile = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('Michael');
  const [lastName, setLastName] = React.useState('Smith');
  const [phone, setPhone] = React.useState('+92 0333 1234567');
  const [email, setEmail] = React.useState('mmk12@gmail.com');



  return(
  <View style={styles.container}>
    <View style={styles.cancelContainer}>
        <TouchableOpacity style={styles.cancelButton}  onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.imageProfile}>
      <View style={styles.circle}>
        <Image source={require('../images/dp.png')}
          style={styles.dp}
        />
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
      </View>
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
            value={phone}
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
            style={styles.textBoxInput}
            />
        </View>


        
    </View>
    <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    
    

  </View>
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
    // overflow: 'hidden',
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
    left:121.75,
    
    
  },
  v2:{
    position:'absolute',
    top:132.5,
    left:132.5,
    tintColor:"black"
    
  },
  v3:{
    position:'absolute',
    top:137.9,
    left:137.9,
    tintColor:"black"
    
  },
  v4:{
    position:'absolute',
    top:146.5,
    left:149,
    tintColor:"black"
  },
  v5:{
    position:'absolute',
    top:149,
    left:146.5,
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
    height: 37,
    paddingVertical: 2.642,
    paddingHorizontal: 96.448,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28246A',
    marginTop:155
  },
  saveButtonText: {
    color: '#FFFFFF', 
    fontSize: 15, 
    fontFamily:"Poppins-SemiBold"
  },
  
  
});
