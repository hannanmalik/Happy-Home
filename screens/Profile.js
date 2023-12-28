import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,Text,TextInput,TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Profile = ({navigation}) => {
  const [name, setName] = React.useState('Michael Smith');
  const [email, setEmail] = React.useState('mmk12@gmail.com');
  const [url,setUrl] = React.useState('');
  useEffect(() => {
    const getUserCreds = async () => {
        const userId = await AsyncStorage.getItem('user_id')
        console.log(userId)
        
        setEmail(auth().currentUser.email)
        firestore().collection('users').doc(userId).get()
            .then(response => {
              // console.log(response)
                const data = response["_data"]
                const fullName = `${data.firstname || ''} ${data.lastname || ''}`;
                setName(fullName);
                setUrl(data["profile_pic"])
                console.log(url)
            }).catch(e => console.error(e))

    }
    getUserCreds()
},[])

  return(
  <View style={styles.container}>
    <View style={styles.imageProfile}>
      <View style={styles.circle}>
        <Image source={{uri : url}}
          style={styles.dp}
        />
      </View>
      <Text style={styles.profileNameText}>{name}</Text>
      <Text style={styles.emailText} >{email}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.horizontalLine}></View>
    <View style={styles.list}>
      <TouchableOpacity style={styles.listBox}>
      <Image source={ require('../images/icon-users.png') }
        style={styles.icon_users} />
        <Text style={styles.iconText}>Clients and Chats</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.listBox}>
      <Image source={ require('../images/icon-rename-box.png') }
        style={styles.icon_rename_box} />
        <Text style={styles.iconText}>Edit Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listBox}>
      <Image source={ require('../images/icon-info.png') }
        style={styles.icon_info} />
        <Text style={styles.iconText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listBox}>
      <Image source={ require('../images/icon-fav.png') }
        style={styles.icon_fav} />
        <Text style={styles.iconText}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listBox}>
      <Image source={ require('../images/icon-delete.png') }
        style={styles.icon_delete} />
        <Text style={styles.iconText}>Delete Account</Text>
      </TouchableOpacity>

      
    </View>
    


  </View>
  );
};

export default Profile;

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
  //  borderWidth:2,
  //  borderColor:'red',
  // paddingHorizontal: 20,
   marginLeft: 30,
   marginRight:30.5,
   
   

  },
  circle:{
    marginTop:48,
    width: 171.5,
    height: 171.5,
    borderRadius: 324.988,
    overflow: 'hidden',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  dp:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  
  },
  profileNameText:{
    marginTop:18,
    fontSize:22,
    color:'#324054',
    fontFamily:"Poppins-Bold"
  },
  emailText:{
    marginTop:4,
    fontSize:12.5,
    color:'#71839B',
    fontFamily:"Poppins-Medium"
  },
  editButton: {
    marginTop:22.4,
    borderRadius: 5.285,
    width: '80%',
    height: 35,
    paddingVertical: 2.642,
    paddingHorizontal: 96.448,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28246A',
  },
  editButtonText: {
    color: '#FFFFFF', 
    fontSize: 15, 
    fontFamily:"Poppins-SemiBold"
  },
  horizontalLine:{
    marginTop:17,
    width: '90%',
    height: 0.8,
    backgroundColor: '#000',
    elevation: 2,

  },
  list:{
    marginTop:14,
    // marginLeft: 20,
    marginRight:98.5,
    
  },
  listBox:{
    flexDirection:"row",
    width:250,
    height:52,
    padding: 14,
    // borderWidth:1,
    // borderColor:'red',

  },
  icon_users:{
    alignSelf:"center",
    width:23,
    height:17

  },
  icon_rename_box:{
    alignSelf:"center",
    width:23,
    height:23
  },
  icon_info:{
    alignSelf:"center",
    width:23,
    height:23
  },
  icon_fav:{
    alignSelf:"center",
    width:23.19,
    height:26.562
  },
  icon_delete:{
    alignSelf:"center",
    width:23,
    height:23
  },
  iconText:{
    marginLeft:18.42,
    alignSelf:"center",
    color: '#324054', 
    fontSize: 15, 
    fontFamily:"Poppins-Medium",
  
  },
  
});
