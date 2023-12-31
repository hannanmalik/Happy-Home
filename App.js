  import * as React from 'react';
  import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';  import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import HomeScreen from './screens/HomeScreen';
  import Properties from './screens/Properties';
  import Profile from './screens/Profile';
  import Chats from './screens/Chats';
  import AddProperty from './screens/AddProperty';
  import EditProfile from './screens/EditProfile';
  import DescriptionScreen from './screens/DescriptionScreen';
  import RegisterScreen from './screens/signup';
  import LoginScreen from './screens/login';
  import Messages from './screens/Message';
  import Gallery1 from './screens/Gallery';
  import Payment1 from './screens/Payment1';
  import Payment2 from './screens/Payment2';
  import Payment3 from './screens/Payment3';
  import addPro2 from './screens/addPro2';
  import addPro3 from './screens/addPro3';

  
           
  

  import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import { Pattern } from 'react-native-svg';


  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  // function HomeTab() {
  //   return (
  //     <Tab.Navigator >

  //       <Tab.Screen name="Chats" component={Chats} options={{ headerShown: false }}/>
  //       <Tab.Screen name="Profile"  component={Profile} options={{ headerShown: false }} />
  //       <Tab.Screen name="Home" component={HomeScreen} />
        
  //       <Tab.Screen name="AddProperty" component={AddProperty} />
  //       <Tab.Screen name="Gallery" component={Properties} />
        
  //     </Tab.Navigator>
  //   );
  // }

  const ProfileStack = () => {
    return (
      
      <Stack.Navigator>
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
        {/* <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />

        <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      /> */}
       <Stack.Screen
            name="Payment1"
            component={Payment1}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="Payment2"
            component={Payment2}
            options={{ headerShown: false }}
          />
             <Stack.Screen
            name="Payment3"
            component={Payment3}
            options={{ headerShown: false }}
          />


          <Stack.Screen
            name="AddPro2"
            component={addPro2}
            options={{ headerShown: true}}
          />
      
      <Stack.Screen
            name="AddPro3"
            component={addPro3}
            options={{ headerShown: true}}
          />
<Stack.Screen name="ProfileTab" component={HomeTab} options={{ headerShown: false }}/>

      
      
              {/* <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} options={{ headerShown: false }}/> */}

      
        {/* <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileTab" component={HomeTab} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false   }}/> */}
      </Stack.Navigator>
    );
  }

  // function HomeDrawer() {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="HomeTab" component={HomeTab} />
  //     </Drawer.Navigator>
  //   );
  // }

  export default function App() {
    return (
      <NavigationContainer>
        <ProfileStack />
      </NavigationContainer>
    );
  }


  
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Add your profile picture, name, and email here */}
      <View style={styles.profileContainer}>
        <Image
          source={require('./images/account-picture.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>your.email@example.com</Text>
        </View>
      </View>
      <DrawerItem
        label="Home"
        icon={() => (
          <Image
            source={require('./images/drawerhome.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="My Properties"
        icon={() => (
          <Image
            source={require('./images/drawerproperties.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('MyProperties')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Flats/Appartments"
        icon={() => (
          <Image
            source={require('./images/drawerflats.png')}
            style={{ ...styles.drawerIcon }}
          />
        )}
        onPress={() => props.navigation.navigate('Flats')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Villas"
        icon={() => (
          <Image
            source={require('./images/drawervillas.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Villas')}
        labelStyle={styles.drawerLabel}
      />
      <View style={styles.blank} />
      <DrawerItem
        label="Messages"
        icon={() => (
          <Image
            source={require('./images/drawerchats.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Messages')}
        labelStyle={styles.drawerLabel}
      />

      <View style={styles.blank} />
      <DrawerItem
        label="Logout"
        icon={() => (
          <Image
            source={require('./images/drawerlogout.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Logout')}
        labelStyle={styles.drawerLabel}
      />
    </DrawerContentScrollView>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            position: 'absolute',
            
            
          },
          route.name === 'Chats' ? { display: 'none' } : null,
        ],
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let labelStyle;

          if (route.name === 'Home') {
            iconSource = require('./images/home.png');
          } else if (route.name === 'Chats') {
            iconSource = require('./images/chat.png');
          } else if (route.name === 'Gallery') {
            iconSource = require('./images/gallery.png');
          } else if (route.name === 'Profile') {
            iconSource = require('./images/profile.png');
          }

          if (focused) {
            labelStyle = {
              color: '#000',
              fontFamily: 'Poppins',
              fontSize: 10,
              fontWeight: 'medium',
            };
          } else {
            labelStyle = { display: 'none' };
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={{
                  width: 18,
                  height: 18,
                  opacity: focused ? 1 : 0.4,
                }}
              />
              <Text style={labelStyle}>{route.name}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }} />
      <Tab.Screen name="Chats" component={Chats}options={{ headerShown: false }} />
      <Tab.Screen
        name=" "
        component={AddProperty}
        options={{
          tabBarIcon: () => (
            <View style={styles.plusIcon}>
              <Image
                source={require('./images/plus.png')}
                style={styles.icon}
              />
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen name="Gallery" component={Properties} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function HomeDrawer({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Home" screenOptions={{
      header: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', justifyContent: 'center' }}>
          <Image
            source={require('./images/logoWhite2.png')}
            style={{ width: 150, height: 30, marginTop: 10, resizeMode: 'contain' }}
          />
        </View>
      ),
    }}>
      <Drawer.Screen name="Homme" component={HomeScreen} />
      <Drawer.Screen name="MyProperties" component={Properties} options={{ headerShown: false }}/>
      <Drawer.Screen name="Flats" component={Gallery1} />
      <Drawer.Screen name="Villas" component={Gallery1} />
      <Drawer.Screen name="Messages" component={Chats}  />
      <Drawer.Screen name="Logout" component={Profile} />
    </Drawer.Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <HomeTab />
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  blank: {
    height: 25,
  },
  tabBar: {
    height: 70,
    borderTopWidth: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 27,
    height: 27,
  },
  plusIcon: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    overflow: 'hidden',
    backgroundColor: '#28246A',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    margin: 20,
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 40,
    margin: 5,
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#324054',
  },
  profileEmail: {
    fontSize: 12,
    color: 'gray',
  },
  drawerIcon: {
    width: 23.017,
    height: 23.017,
    marginStart: 20,
  },
  drawerLabel: {
    color: '#324054',
    fontFamily: 'Poppins',
    fontSize: 14.998,
  },
});
