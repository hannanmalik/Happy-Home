import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView ,Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import addPro3 from '../screens/addPro3';

const AddPro2 = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []); 

  const savePaymentPlan = async () => {
    try {

      if (!name || !desc ) {
        Alert.alert('All fields are required');
        return;
      }

      const paymentPlanData = {
        name,
        desc,
      };

      // Use the 'paymentPlans' collection in Firestore
      await firestore().collection('properties').add(paymentPlanData);

      // Navigate to the next screen or handle navigation logic accordingly
      // navigation.navigate(addPro3);

      console.log('Payment plan added successfully!');
    } catch (error) {
      console.error('Error saving payment plan:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Payment Plan</Text>

        <TextInput
          style={styles.input}
          placeholder="Plan*"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.desc}>Price</Text>
        <TextInput
          style={styles.input1}
          placeholder="Property Price In Rupees*"
          value={desc}
          onChangeText={(text) => setDesc(text)}
          multiline
        />

        <TouchableOpacity style={styles.btn1} onPress={savePaymentPlan}>
          <Text style={styles.t2}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
    color: '#131313',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },

  desc: {
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#131313',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F0F7FF',
    borderWidth: 1,
    borderColor: 'rgba(55, 74, 159, 1.0)',
    paddingLeft: 10,
    marginBottom: 16,
  },
  input1: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#F0F7FF',
    borderWidth: 1,
    borderColor: 'rgba(55, 74, 159, 1.0)',
    paddingLeft: 10,
    marginBottom: 16,
  },

  image: {
    width: 30,
    height: 30,
    
   
    borderRadius: 10,
    margin: 30,

  },

  btn1: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: '#28246A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  t2: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFFE5',
  },
});

export default AddPro2;
