import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import addPro2 from './addPro2';


const AddPro3 = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [selectedBathrooms, setSelectedBathrooms] = useState('');
  const [area, setArea] = useState('');
  const [areaSelector, setAreaSelector] = useState('');
  const [location, setLocation] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const savePaymentPlan = async () => {
    try {
      const paymentPlanData = {
        name,
        desc,
        selectedPropertyType, 
        selectedBedrooms,
        selectedBathrooms,
        area,
        areaSelector,
        location,
      };

      // Use the 'paymentPlans' collection in Firestore
      await firestore().collection('properties').add(paymentPlanData);

      // Navigate to the next screen or handle navigation logic accordingly
      navigation.navigate(addPro2);

      console.log('Payment plan added successfully!');
    } catch (error) {
      console.error('Error saving payment plan:', error);
    }
  };

  const handlePropertyTypeSelection = (propertyType) => {
    setSelectedPropertyType(propertyType);
  };

  const handleBedroomsSelection = (bedrooms) => {
    setSelectedBedrooms(bedrooms);
  };

  const handleBathroomsSelection = (bathrooms) => {
    setSelectedBathrooms(bathrooms);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Property Type</Text>

        <View style={styles.propertyTypeRow}>
          {/* Property Type Buttons */}
          <TouchableOpacity
            style={[
              styles.propertyTypeButton,
              selectedPropertyType === 'house' ? styles.selectedButton : null,
            ]}
            onPress={() => handlePropertyTypeSelection('house')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'house' ? styles.SbuttonText : null]}>
              House
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.propertyTypeButton,
              selectedPropertyType === 'apartment' ? styles.selectedButton : null,
            ]}
            onPress={() => handlePropertyTypeSelection('apartment')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'apartment' ? styles.SbuttonText : null]}>
              Apartment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.propertyTypeButton,
              selectedPropertyType === 'villa' ? styles.selectedButton : null,
            ]}
            onPress={() => handlePropertyTypeSelection('villa')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'villa' ? styles.SbuttonText : null]}>
              Villa
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Select Bedrooms</Text>

        <View style={styles.bedroomsRow}>
          {/* Bedrooms Buttons */}
          <TouchableOpacity
            style={[
              styles.bedroomsButton,
              selectedBedrooms === '1' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBedroomsSelection('1')}
          >
            <Text style={[styles.buttonText, selectedBedrooms === '1' ? styles.SbuttonText : null]}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bedroomsButton,
              selectedBedrooms === '2' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBedroomsSelection('2')}
          >
            <Text style={[styles.buttonText, selectedBedrooms === '2' ? styles.SbuttonText : null]}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bedroomsButton,
              selectedBedrooms === '3' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBedroomsSelection('3')}
          >
            <Text style={[styles.buttonText, selectedBedrooms === '3' ? styles.SbuttonText : null]}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bedroomsButton,
              selectedBedrooms === '4' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBedroomsSelection('4')}
          >
            <Text style={[styles.buttonText, selectedBedrooms === '4' ? styles.SbuttonText : null]}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bedroomsButton,
              selectedBedrooms === '5' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBedroomsSelection('5')}
          >
            <Text style={[styles.buttonText, selectedBedrooms === '5' ? styles.SbuttonText : null]}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bedroomsButton,
              selectedBedrooms === '6+' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBedroomsSelection('6+')}
          >
            <Text style={[styles.buttonText, selectedBedrooms === '6+' ? styles.SbuttonText : null]}>6+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Select Bathrooms</Text>

        <View style={styles.bathroomsRow}>
          {/* Bathrooms Buttons */}
          <TouchableOpacity
            style={[
              styles.bathroomsButton,
              selectedBathrooms === '1' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBathroomsSelection('1')}
          >
            <Text style={[styles.buttonText, selectedBathrooms === '1' ? styles.SbuttonText : null]}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bathroomsButton,
              selectedBathrooms === '2' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBathroomsSelection('2')}
          >
            <Text style={[styles.buttonText, selectedBathrooms === '2' ? styles.SbuttonText : null]}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bathroomsButton,
              selectedBathrooms === '3' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBathroomsSelection('3')}
          >
            <Text style={[styles.buttonText, selectedBathrooms === '3' ? styles.SbuttonText : null]}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bathroomsButton,
              selectedBathrooms === '4' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBathroomsSelection('4')}
          >
            <Text style={[styles.buttonText, selectedBathrooms === '4' ? styles.SbuttonText : null]}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bathroomsButton,
              selectedBathrooms === '5' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBathroomsSelection('5')}
          >
            <Text style={[styles.buttonText, selectedBathrooms === '5' ? styles.SbuttonText : null]}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.bathroomsButton,
              selectedBathrooms === '6+' ? styles.selectedButton : null,
            ]}
            onPress={() => handleBathroomsSelection('6+')}
          >
            <Text style={[styles.buttonText, selectedBathrooms === '6+' ? styles.SbuttonText : null]}>6+</Text>
          </TouchableOpacity>
        </View>

        {/* Area and Area Selector */}
        <Text style={styles.title}>Area</Text>

        <View style={styles.areaRow}>
          <TextInput
            style={styles.input}
            placeholder="Sq. ft*"
            value={area}
            onChangeText={(text) => setArea(text)}
          />

          <TouchableOpacity
            style={[
              styles.areaSelectorButton,
              areaSelector === 'sq.ft' ? styles.selectedButton : null,
            ]}
            onPress={() => setAreaSelector('sq.ft')}
          >
            <Text style={[styles.buttonText, areaSelector === 'sq.ft' ? styles.SbuttonText : null]}>sq.ft</Text>
          </TouchableOpacity>

          {/* Add other area selector options here */}
        </View>

        {/* Location Input Field */}
        <Text style={styles.title}>Location</Text>

        <TextInput
          style={styles.input}
          placeholder="Location*"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Add your TextInput components and other UI elements as needed */}

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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'white',
  },
  title: {
    color: 'black', 
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  propertyTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  propertyTypeButton: {
    flex: 1,
    width: 100,
    height: 44,
    borderRadius: 25,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#28246A', // Change to your desired selected color
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  SbuttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bedroomsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bedroomsButton: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  bathroomsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bathroomsButton: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  areaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    flex: 2,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F0F7FF',
    borderWidth: 1,
    borderColor: 'rgba(55, 74, 159, 1.0)',
    paddingLeft: 10,
    marginBottom: 16,
  },
  areaSelectorButton: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  areaSelectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  btn1: {
    marginTop: 20,
    backgroundColor: '#28246A',
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  t2: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddPro3;
