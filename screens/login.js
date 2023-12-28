


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
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <View style={styles.container}>
        <View style={styles.circles}>
       
        </View>
        <View style={styles.form}>
            <Text style={styles.boldheading}>Login</Text>

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

          
        <TouchableOpacity style={styles.entryButtonGreen} onPress={() => handleSignIn()} >
            <Text style={styles.smalltextWhite} >LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.endlineV}>
            <Text style={styles.endlineT}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}><Text style={styles.endlineTg}> Sign Up</Text></TouchableOpacity>
        </View>




          </View>



   


    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({


  container: {
    flex: 1,
   alignItems: 'center',
   backgroundColor:'#FFFFFF'

 },
 circles:{
   
   height: 180,
   



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
       marginTop:32 ,
       width: 248,
       height: 60,
       borderRadius: 28.5,
       backgroundColor: '#35654E',
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
       marginTop:33,
      
   
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
    
});