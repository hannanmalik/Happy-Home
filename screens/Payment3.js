import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ModalDropdown from 'react-native-modal-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Payment3 = () => {
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [cvc, setCVC] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('paymentData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setName(parsedData.name || '');
        setCreditCard(parsedData.creditCard || '');
        setCVC(parsedData.cvc || '');
        setSelectedDay(parsedData.selectedDay || null);
        setSelectedDate(parsedData.selectedDate || null);
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const saveDataToStorage = async () => {
    try {
      const paymentData = {
        name,
        creditCard,
        cvc,
        selectedDay,
        selectedDate,
      };
      await AsyncStorage.setItem('paymentData', JSON.stringify(paymentData));
      console.log("Saved payment data to storage")
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const handleButtonPress = () => {
    setPaymentModalVisible(true);
    saveDataToStorage();
  };

  const closeModal = () => {
    setPaymentModalVisible(false);
  };

  const navigateToPayment1 = () => {
    navigation.navigate('Payment1');
  };

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; // Add more dates as needed

  return (
 
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            style={styles.card}
            resizeMode="cover"
            source={require("../assets/cr.png")}
          />
          <Text style={styles.title}>
            Enter your Payment Details
          </Text>
          <Text style={styles.desc}>
            By continuing you agree to our Terms
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
       
          />
          <TextInput
            style={styles.input}
            placeholder="Credit Card"
            value={creditCard}
            onChangeText={(text) => setCreditCard(text)}
          />
          <View style={styles.rowContainer}>
            <ModalDropdown
              style={styles.rowInput}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdown}
              options={days}
              onSelect={(index, value) => setSelectedDay(value)}
              defaultValue="Day"
            />
            <ModalDropdown
              style={styles.rowInput}
              textStyle={styles.dropdownText}
              dropdownStyle={styles.dropdown}
              options={dates}
              defaultValue="Date"
              onSelect={(index, value) => setSelectedDate(value)}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="CVC"
            value={cvc}
            onChangeText={(text) => setCVC(text)}
          />

          <TouchableOpacity style={styles.btn1} onPress={handleButtonPress}>
            <Text style={styles.t2}>Pay Now!</Text>
          </TouchableOpacity>

          {/* Payment Modal */}
          <Modal
            transparent={true}
            visible={isPaymentModalVisible}
            animationType="slide"
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Payment Completed Successfully!</Text>
              <Button title="Close" onPress={closeModal} />
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );{
      return;
    };
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    width: 338,
    height: 26,
    fontFamily: "Poppins",
    fontSize: 17.49,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 17.49,
    color: "#131313",
    top: 322,
    left: 34,
    position: 'absolute',
  },
  desc: {
    top: 340,
    left: "8.67%",
    fontSize: 13,
    color: "#131313",
    position: "absolute",
    width: 249,
    height: 49,
    fontFamily: "Poppins",
    fontStyle: 'italic',
 

  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  card: {
    width: 350,
    height: 280,
    bottom: 48,
    borderRadius:30,
    shadowOpacity:0.6,
    
  },
  input: {

    width: 330,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#F0F7FF",
    borderWidth: 0.9999999403953552,
    borderColor: "rgba(55, 74, 159, 1.0)",
    marginBottom: 10, 

    paddingLeft: 10,
  },
    placeholder: {
    color: 'gray', // Placeholder text color
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Add marginBottom to create space between rows
  },
  
  rowInput: {
    width: 330,
    height: 48,
    flex: 1, 
   
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 10,
    borderColor: 'gray',
    borderRadius:10,
    margin: 10, 
    backgroundColor: "#F0F7FF",
    borderWidth: 1,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  modalButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 12,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  btn1:{
    width: 312,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#28246A"
  },
  t2:{
    
    fontFamily: "Poppins",
    fontSize: 18,
    
    fontWeight: "600",
    fontStyle: "normal",
    color: "#FFFFFFE5",
    marginTop: 12,
    marginLeft: 100
   



  },
  dropdownText: {
    fontSize: 16,
    paddingVertical: 10,
  },

  dropdown: {
    borderRadius: 8,
  },
  
});

export default Payment3;
