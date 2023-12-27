  import 'react-native-gesture-handler'
  import * as React from 'react';
  import { View, Text } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import HomeScreen from './screens/HomeScreen';
  import Properties from './screens/Properties';
  import Profile from './screens/Profile';
  import Chats from './screens/Chats';
  import AddProperty from './screens/AddProperty';
  import EditProfile from './screens/EditProfile';
  import DescriptionScreen from './screens/DescriptionScreen';
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function HomeTab() {
    return (
      <Tab.Navigator >
        <Tab.Screen name="Profile"  component={Profile} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="AddProperty" component={AddProperty} />
        <Tab.Screen name="Gallery" component={Properties} />
        
      </Tab.Navigator>
    );
  }

  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileTab" component={HomeTab} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false,  }}/>
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