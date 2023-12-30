import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,Text,TextInput,TouchableOpacity,FlatList,Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Messages from './Message';
import HomeScreen from './HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
const Stack = createNativeStackNavigator();

let id ='';
const Chats = ({navigation}) => {
  const [name, setName] = React.useState('Michael Smith');
  const [email, setEmail] = React.useState('mmk12@gmail.com');
  const [users,setUsers] = React.useState([]);
    const [currentDate, setCurrentDate] = useState('');
    
  

    
    useEffect(() => {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, '0');
      const monthOptions = { month: 'long' };
      const month = currentDate.toLocaleString('en-US', monthOptions);
      const year = currentDate.getFullYear();
    
      const formattedDate = `${day} ${month}, ${year}`;
      setCurrentDate(formattedDate);
    }, []);


useEffect(() => {
  const getUsers = async () => {
    try {
      let temp = [];
      const userId = await AsyncStorage.getItem('user_id');
      id = userId;
      setEmail(auth().currentUser.email);

      const response = await firestore()
        .collection('users')
        .where('userId', '!=', userId)
        .get();
      if (!response.empty) {
        response.docs.map(item => {
          temp.push(item.data())
        });

        setUsers(temp);
        console.log(users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  getUsers();
}, []);

return(<Stack.Navigator >
  <Stack.Screen name="Chats1" component={Chats1} options={{ headerShown: false }}/>
  <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
</Stack.Navigator>);

function Chats1(){
  return(
  <View style={styles.container}>
    <View style={styles.chatHeader}>
      <Text style={styles.dateTextHeader}>{currentDate}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',}}>
        <TouchableOpacity  style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}  onPress={() => navigation.goBack()}>
        <Image source={ require('../images/chat_back.png') } style={{height:15,width:15}}/>
        <Text style={[styles.chatTextHeader,{marginLeft:3}]}>Chat</Text>
        </TouchableOpacity>
        <Image source={ require('../images/navigation-bar-light-edit.png') }
          style={styles.navigation_bar_light_edit} />
      </View>
    </View>
    <View style={styles.horizontalLine}></View>
    <FlatList  data={users} renderItem={({item,index}) => {
      return(
        <TouchableOpacity style={styles.userItem} onPress={() => navigation.navigate('Messages',{data:item,id:id})}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri: item.profile_pic} }
          style={{width:60,height:60,borderRadius:48}} />
          {/* <Text style={styles.userItemT}>Ronald Robertson</Text> */}
          <Text style={styles.userItemT}>{`${item.firstname || ''} ${item.lastname || ''}`}</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.userItemDateT}>Today</Text>
          <Image source={ require('../images/arrow_right.png') }
          style={styles.arrow_right} />
          </View>
        </TouchableOpacity>
  );
    }} />
    
    


  </View>
  );
};
}
export default Chats;




  const styles = StyleSheet.create({
    container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor:'white',
     
  
    },chatHeader:{
      width:'100%',
      alignItems:"flex-start",
      paddingLeft:16,
      paddingRight:22.5
    },
    dateTextHeader:{
      marginTop:36,
      color:'#3C3C4399',
      fontFamily:"Poppins-Medium",
      fontSize:13
    }
    ,
    chatTextHeader:{
      marginTop:3,
      color:'#000000',
      fontFamily:"Poppins-Bold",
      fontSize:25
    }
    ,



    horizontalLine:{
      marginTop:15,
      width: '100%',
      height: 0.8,
      backgroundColor: '#3C3C4399',
      elevation: 5,
  
    },

    navigation_bar_light_edit:{

    },
    userItem:{
      
      alignItems:'center',
      width:Dimensions.get('window').width-20,
      flexDirection:'row',
      justifyContent:'space-between',
      height:80,
      borderBottomColor:'black',
      borderBottomWidth:0.5
      
    },
    userItemT:{
      color:'#000000',
      fontFamily:"Poppins-Medium",
      fontSize:15,
      marginLeft:14,
    },
    userItemDateT:{
      color:'#3C3C4399',
      fontFamily:"Poppins-Regular",
      fontSize:14,
      
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
