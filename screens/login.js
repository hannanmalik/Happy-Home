


import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,Text,TextInput,TouchableOpacity
} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [url,setUrl] = React.useState('');
  
  // useEffect(() => {
  //   AsyncStorage.getItem("user_id").then(res => navigation.navigate("ProfileTab"))},[]);



  const handleSignIn = async () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user)
        setEmail('');
        setPass('');
        navigation.navigate('ProfileTab')

        try {
          AsyncStorage.setItem("user_id", user.uid)
            .then(response => console.log("User ID saved"))


        }
        catch (e) {
          console.log(e)
        }

      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Error signing in:', error);
        // Display error message or handle accordingly
});
}
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../images/Asset_2.png")} // Replace with your logo path
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.title2}>Welcome back!</Text>

      <TextInput  onChangeText={setEmail}
            value={email} style={styles.input} placeholder="Enter Your Email" />
      <View style={styles.passwordContainer}>
        <TextInput onChangeText={setPass}
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

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSignIn()} style={styles.button}>
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>

      <View style={styles.newAccount}>
        <Text style={styles.newAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}> 
          <Text style={styles.signupText}>Signup</Text>
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

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 251,
    height: 55,
    marginBottom: 70 ,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Poppins-Black',
    fontWeight: 'bold',
    marginBottom: 0,
  }, 
  title2: {
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
  forgotPasswordButton: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#2F89FC',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  newAccount: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  newAccountText: {
    marginRight: 5,
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 15,
     
  },
  signupText: {
    color: '#2F89FC',
    fontFamily: 'Poppins',
    fontSize: 14,
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
  buttonText2: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  buttonText3: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 14,
  }
});