import 'react-native-gesture-handler'
import React, {useState, useEffect,useCallback} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,Text,TextInput,TouchableOpacity,FlatList,Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GiftedChat,Bubble,InputToolbar ,Send,Composer} from 'react-native-gifted-chat';
import { Center } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Messages = ({route,navigation,}) => {
//   const [name, setName] = React.useState('Michael Smith');
//   const [email, setEmail] = React.useState('mmk12@gmail.com');
  const [users,setUsers] = React.useState([]);
    const [currentDate, setCurrentDate] = useState('');
    
    const [messages, setMessages] = useState([])

    useEffect(() => {

      const subscriber = firestore().collection('chats')
      .doc(route.params.id+route.params.data.userId)
      .collection('messages')
      .orderBy('createdAt','desc');

        subscriber.onSnapshot(querysnapshot => {
            const allMessages = querysnapshot.docs.map(item=>{
                return{...item._data,createdAt: item._data.createdAt }
            });
            setMessages(allMessages);
        });
    }, []);
  
    const onSend = useCallback((messages = []) => {
        const msg = messages[0];
        const myMsg = {
            ...msg,sentBy:route.params.id,sentTo:route.params.data.userId, createdAt: Date.parse(msg.createdAt)
        };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );


      firestore().collection('chats')
      .doc(''+route.params.id+route.params.data.userId)
      .collection('messages')
      .add(myMsg);

      firestore().collection('chats')
      .doc(''+route.params.data.userId+route.params.id)
      .collection('messages')
      .add(myMsg);


    }, []);


    const renderBubble = (props) => (
        <Bubble
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: '#E9E9EB',
              padding:8

            },
            right: {
              backgroundColor: '#282466',
              padding:8

            },
          }}
          textProps={{
            style: {
              color: props.position === 'left' ? '#000' : '#FFF',
              fontFamily: props.position === 'left' ? "Poppins-Regular" : "Poppins-Regular",
              
            },
          }}
          textStyle={{
            left: {
              color: '#000',
            },
            right: {
              color: '#FFF',
            },
          }}
        />
      );

      const renderSend = (props) => {
        return (
            
            <Send
              {...props}>
                <View style={{flexDirection:'row',}}>
                <Image source={ require('../images/chatArrow.png')} style={{marginRight:10,marginBottom:-10,height:50,width:50}}/>
                </View>
              </Send>
             
          );
      };
      const customtInputToolbar = props => {
        return (
            
          <InputToolbar
            {...props}
            textInputStyle={{color:'black'}}
            containerStyle={{
              backgroundColor: "#F0F5FF",
              borderRadius:50,
              marginLeft:20,
              marginRight:20,
              marginBottom:10,
            }}
          />
        );
      };

      const renderComposer= (props) => { return ( <Composer {...props} placeholder={'     Message'} /> ); } 
  

  return(
  <View style={styles.container}>
    <View style={styles.userItem}>
    
          
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => navigation.goBack()}>
          <Image source={ require('../images/chat_back.png') }
          style={{marginLeft:19}} />
          <Image source={ require('../images/chatImg.png') }
          style={{marginLeft:8.5}} />
          </TouchableOpacity>
          <Text style={styles.userItemT}>{`${route.params.data.firstname || ''} ${route.params.data.lastname || ''}`}</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={ require('../images/phone.png') }
          style={{marginRight:13.5}} />
          <Image source={ require('../images/3dotmenu.png') }
          style={{marginRight:15.01}} />
          </View>
    </View>
    <View style={styles.horizontalLine}></View>
    <View style={styles.chatcontainer }>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: route.params.id,
      }}
      alwaysShowSend
      renderSend={props => renderSend(props)}
      renderBubble={props => renderBubble(props)}
      renderInputToolbar={props => customtInputToolbar(props)}
      renderComposer={props => renderComposer(props)}
    />
    
    </View>


  </View>
  );
};

export default Messages;




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
      width: '100%',
      height: 0.8,
      backgroundColor: '#3C3C4399',
      elevation: 5,
  
    },

    navigation_bar_light_edit:{

    },
    userItem:{
      
      alignItems:'center',
      width:Dimensions.get('window').width,
      flexDirection:'row',
      justifyContent:'space-between',
      height:64.5,

      
    },
    userItemT:{
      color:'#000000',
      fontFamily:"Poppins-SemiBold",
      fontSize:17.5,
      marginLeft:9.5,
    },
    userItemDateT:{
      color:'#3C3C4399',
      fontFamily:"Poppins-Regular",
      fontSize:14,
      
    },

chatcontainer:{
    flex:1,
width:'100%'
},














     
});
