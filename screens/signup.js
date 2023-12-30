
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
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        profile_pic: 'file:///storage/emulated/0/Android/data/com.happyhome/files/Pictures/00e2d292-0da9-460c-9181-486034d135ac.jpg',
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

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };

  

  return (
    <View style={styles.container}>
    <Image
      style={styles.logo}
      resizeMode="contain"
      source={require("../images/Asset_2.png")} // Replace with your logo path
    />
    <Text style={styles.title}>Signup</Text>

    <TextInput  onChangeText={setFirstName}
          value={firstname}  style={styles.input} placeholder="Enter First Name" />
    <TextInput  onChangeText={setLastName}
          value={lastname}  style={styles.input} placeholder="Enter Last Name" />
    <TextInput  onChangeText={setEmail}
          value={email} style={styles.input} placeholder="Enter Your Email" />
    
    <View style={styles.passwordContainer}>
      <TextInput
       onChangeText={setPass}
       value={pass}
        style={styles.passwordInput}
        secureTextEntry={!showPassword}
        placeholder="Enter Your Password"
      />
      <TouchableOpacity
        style={styles.toggleEye}
        onPress={togglePasswordVisibility}
      >
        <Image
          source={showPassword ? require('../images/eye_open.png') : require('../images/eye_open.png')}
          style={styles.eyeIcon}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.passwordContainer}>
      <TextInput
       onChangeText={setCPass}
       value={cpass}
        style={styles.passwordInput}
        secureTextEntry={!showConfirmPassword}
        placeholder="Enter Your Confirm Password"
      />
      <TouchableOpacity
        style={styles.toggleEye}
        onPress={toggleConfirmPasswordVisibility}
      >
        <Image
          source={showConfirmPassword ? require('../images/eye_open.png') : require('../images/eye_open.png')}
          style={styles.eyeIcon}
        />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.button}  onPress={() =>handleSignUp()}>
      <Text style={styles.buttonText1}>Signup</Text>
    </TouchableOpacity>

    <View style={styles.existingAccount}>
      <Text style={styles.textExistingAcc}>Already Have an Account?</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>

    <Text>______________________  OR  ______________________</Text>

    <TouchableOpacity style={styles.socialButton1}>
      <Image
        source={require("../images/facebooklogo.png")} // Replace with Facebook logo path
        style={styles.logoImage}
      />
      <Text style={styles.buttonText2}>Login with Facebook</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.socialButton2}>
      <Image
        source={require("../images/googlelogo.png")} // Replace with Google logo path
        style={styles.logoImage}
      />
      <Text style={styles.buttonText3}>Login with Google</Text>
    </TouchableOpacity>
  </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({





logo: {
    width: 260,
    height: 55,
    marginBottom: 20,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Poppins-Black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 312,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 19,
    borderColor: "#374A9F",
    backgroundColor:"#F0F7FF",
    fontFamily: 'Poppins',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    width: 312,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 19,
    borderColor: "#374A9F",
    backgroundColor:"#F0F7FF",
    fontFamily: 'Poppins',
  },
  toggleEye: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    width: 312,
    height: 48,
    backgroundColor: '#28246A',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText1: {
    color: 'white',
    fontSize: 15,
  },
  buttonText2: {
    color: 'white',
    fontSize: 14,
  },
  buttonText3: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins',
    flexDirection: 'row'
  },
  existingAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color: '#FFF'
  },
  textExistingAcc: {
    color: '#000',
    fontFamily: 'Poppins-Black',
    fontSize: 14,
    fontWeight: '700',
  },
  loginText: {
    marginLeft: 5,
    color: 'blue',
  },
  socialButton1: {
    width: 312,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -10,
    marginTop: 20,
    backgroundColor: '#1877F2',
    flexDirection: 'row'
  },
  socialButton2: {
    width: 312,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row'
  },
  logoImage: {
    width: 20,
    height: 20, 
    left: 20,
    position: 'absolute'
  },
     
});
