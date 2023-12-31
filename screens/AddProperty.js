import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import addPro3 from '../screens/addPro3';

const Payment3 = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [images, setImages] = useState(Array(6).fill(null));

  const navigation = useNavigation();

  const pickImage = (index) => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Selected Image URI:', response.uri);

        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = response.uri;
          console.log('Updated Images:', updatedImages);
          return updatedImages;
        });
      }
    });
  };

  const saveProperty = async () => {
    try {
      // Check if name and desc are filled
      if (!name || !desc) {
        Alert.alert('Name and Description are required');
        return;
      }

      const propertyData = {
        name,
        desc,
        images,
      };

      await firestore().collection('properties').add(propertyData);
      console.log("Data saved");

      navigation.navigate(addPro3);
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Property Title*"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.desc}>Description</Text>
        <TextInput
          style={styles.input1}
          placeholder="Property Description*"
          value={desc}
          onChangeText={(text) => setDesc(text)}
          multiline
        />

        <Text style={styles.imgtext}>Images</Text>

        <View style={styles.row}>
          {images.slice(0, 3).map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => pickImage(index)}
            >
              {image ? (
                <Image style={styles.image} source={{ uri: image }} />
              ) : (
                <Image
                  style={styles.image}
                  source={require('../assets/Add1.png')}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {images.slice(3, 6).map((image, index) => (
            <TouchableOpacity
              key={index + 3}
              style={styles.imageContainer}
              onPress={() => pickImage(index + 3)}
            >
              {image ? (
                <Image style={styles.image} source={{ uri: image }} />
              ) : (
                <Image
                  style={styles.image}
                  source={require('../assets/Add1.png')}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.btn1} onPress={saveProperty}>
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
  imgtext: {
    fontSize: 20,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  imageContainer: {
    width: 94,
height: 95,
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    borderWidth:1,
    margin: 8,
    borderRadius: 10,

    
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

export default Payment3;
