import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../images/Asset_2.png")} // Replace with your logo path
      />
      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password!</Text>
        <Text style={styles.subTitle}>Enter your Email to reset your Password</Text>

        <TextInput style={styles.input} placeholder="Enter Your Email" />

        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} style={styles.button}>
          <Text style={styles.buttonText}>Check Email</Text>
        </TouchableOpacity>

        <View style={styles.returnLogin}>
          <Text style={styles.returnText}>Return to Login: </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}> 
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 60, // Adjust as needed to position content at the top
  },
  logo: {
    width: 251,
    height: 55,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: -20

  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Poppins-Black',
    fontWeight: 'bold',
    marginTop: 70,
    
  },
  subTitle: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins',
    marginBottom: 35,
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
  button: {
    width: 312,
    height: 48,
    backgroundColor: '#28246A',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins',


  },
  returnLogin: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  returnText: {
    marginRight: 5,
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 15,
  },
  loginText: {
    color: '#2F89FC',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});

export default ForgotPassword;
