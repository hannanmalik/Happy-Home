
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,Text,TextInput,TouchableOpacity,Keyboard,Alert
} from 'react-native';
// import firebase from "../firebase/config";
// import { SignUpRequest, AddUser } from "../network";
// import { setAsyncStorage, keys } from "../asyncStorage";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
const [showPassword, setShowPassword] = useState(false);
const [firstname, setFirstName] = React.useState('');
const [lastname, setLastName] = React.useState('');
const [email, setEmail] = React.useState('');
const [pass, setPass] = React.useState('');
const [cpass, setCPass] = React.useState('');

const handleSignUp = async () => {
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then((userCredentials) => {

      const newUser = userCredentials.user

      const user = {
        userId: newUser.uid,
        firstname: firstname,
        lastname:lastname,
        profile_pic: 'https://source.unsplash.com/800x600/?hanging-pendant-light',
        phone:null    
      }

      firestore().collection('users').doc(newUser.uid).set(user).then(res => {
        console.log("User added");
      });

      try {
        AsyncStorage.setItem("user_id", newUser.uid)
          .then(response => console.log("User ID saved"))
      }
      catch (e) {
        console.log(e)
      }

      console.log('User account created');
      // navigation.navigate('HomeLayout')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }

      console.log(error.message)
});};

const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const onSignUpPress = () => {
    Keyboard.dismiss();
    if (!firstname) {
      Alert.alert("first Name is required");
    } 
    else if (!lastname) {
      Alert.alert("last name is required");}
    else if (!email) {
      Alert.alert("Email is required");
    } else if (!pass) {
      Alert.alert("Password is required");
    } else if (pass !== cpass) {
      Alert.alert("Password did not match");
    } else{
      handleSignUp();
    //   SignUpRequest(email, pass)
    //   .then(() => {
    //     let uid = firebase.auth().currentUser.uid;
    //     let profileImg = "";
    //     AddUser(firstname,lastname, email, uid, profileImg)
    //       .then(() => {
    //         setAsyncStorage(keys.uuid, uid);
    //         setUniqueValue(uid);
    //         navigation.replace("Dashboard");
    //       })
    //       .catch((err) => {
            
    //         alert(err);
    //       });
    //   })
    //   .catch((err) => {
        
    //     alert(err);
    //   });
     }
  }

  return (
    <View style={styles.container}>
        <View style={styles.circles}>
        
          <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
            <Image
                source={require('../images/back.png')} 
                style={styles.backicon}
            />
            </TouchableOpacity>
      
       
        </View>
        <View style={styles.form}>
            <Text style={styles.boldheading}>Sign Up</Text>

            <Text  style={styles.smalltext}>First Name</Text>

            <TextInput style={styles.tInput  } 
            onChangeText={setFirstName}
            value={firstname} 
            placeholder="Your First Name" placeholderTextColor='#9796A1' /> 
             <Text  style={styles.smalltext}>First Name</Text>

            <TextInput style={styles.tInput  } 
            onChangeText={setLastName}
            value={lastname} 
            placeholder="Your Last Name" placeholderTextColor='#9796A1' /> 
            <Text  style={styles.smalltext}>Email</Text>

            <TextInput style={styles.tInput  } 
            onChangeText={setEmail}
            value={email}
            placeholder="Your email or phone" placeholderTextColor='#9796A1'/> 
        
            <Text  style={styles.smalltext}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput style={styles.pInput  } 
                 onChangeText={setPass}
                 value={pass}
                 secureTextEntry={!showPassword}
                 placeholder="Password"
                 placeholderTextColor="#9796A1"    />

            <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
                <Image
                source={showPassword ? require('../images/showpass.png') : require('../images/showpass.png')}
                style={styles.eyeIcon}
                />
          </TouchableOpacity>
            </View>

            <Text  style={styles.smalltext}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput style={styles.pInput  } 
                 onChangeText={setCPass}
                 value={cpass}
                 secureTextEntry={!showPassword}
                 placeholder="Password"
                 placeholderTextColor="#9796A1"    />

            <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
                <Image
                source={showPassword ? require('../images/showpass.png') : require('../images/showpass.png')}
                style={styles.eyeIcon}
                />
          </TouchableOpacity>
            </View>

        <TouchableOpacity style={styles.entryButtonGreen} onPress={() => onSignUpPress()}>
            <Text style={styles.smalltextWhite} >SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.endlineV}>
            <Text style={styles.endlineT}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.endlineTg}> Login</Text></TouchableOpacity>
        </View>

        </View>



   


    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({










  container: {
     flex: 1,
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
    

  },
 
  ellipse127:{
    borderRadius: 63.5, 
    top: -99,
    left: -205,
    width: 165,
    height: 165,
    position: "absolute",
  },

  ellipse126:{
    top: 40,
    left: -217,
    width: 45,
    height: 45, 
    position: 'absolute',
    transform: [{ rotate: '45deg' }],

  },

  ellipse128:{
    
    width: 165,
    height: 165,
    borderRadius: 0, 
    position: 'absolute',
    top: -70, 
    left: 70, 
    
  },
  form:{

    
    alignSelf: 'stretch', 
    marginLeft: 26,
    marginRight:25,
    padding: 10, 
    // borderWidth:2,
    // borderColor:'red',
    // minHeight:620,
  },

  boldheading:{
    fontSize: 36,
    color: "#000",
    fontFamily: 'SofiaProSemiBold',

  },
  smalltext:{
    marginTop:31,
    fontFamily:'SofiaProRegular',
    color:'#9796A1'
  },
  tInput:{
    marginTop:12,
    shadowColor: 'rgba(211, 209, 216, 0.25)',
    shadowRadius: 30,
    borderColor: '#35654E',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    height: 65,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 15,
    fontFamily:'SofiaProRegular',
 
    },
    pInput:{
        marginTop:12,
        shadowColor: 'rgba(211, 209, 216, 0.25)',
        shadowRadius: 30,
        borderColor: '#35654E',
        borderWidth: 1,
        borderStyle: 'solid',
        shadowOpacity: 1,
        shadowOffset: {
          width: 15,
          height: 15,
        },
        height: 65,
        borderRadius: 10, // Adjust the border radius for a more rounded appearance
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 15,
        fontFamily:'SofiaProRegular',
        paddingRight: 40,
        },

    
        passwordContainer: {
            flexDirection: 'row',
            alignItems: 'center',
         
          },
          eyeIconContainer: {
            position: 'absolute',
            right: 15,
            top:32
          },
          eyeIcon: {
            width: 24,
            height: 24,
            tintColor: '#9796A1', 
          },
          
          
    entryButtonGreen:{
        marginTop:38 ,
        width: 248,
        height: 60,
        borderRadius: 28.5,
        backgroundColor: '#34354E',
        shadowColor: '#7A81BE',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.16,
        shadowRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    smalltextWhite: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'SofiaProRegular', // Assuming 'Sofia Pro' is available as a font
      },

      endlineV:{
        flexDirection:'row',
        alignSelf:'center',
     
       
    
      } ,
      endlineT:{
        fontFamily: 'SofiaProRegular',
        fontSize: 14,
        color:'#5B5B5E'
      },
      endlineTg:{
        fontFamily: 'SofiaProRegular',
        fontSize: 14,
        color:'#35654E'
      },
      backbutton:{
        top: 40,
        left: -170,
     
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 20, // Half of the width and height to make it a circle
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8, 
      },
      backicon:{
        width: 20,
        height: 20,
        tintColor: '#111719'
      }
     
});
