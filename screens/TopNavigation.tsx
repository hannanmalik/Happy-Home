// TopNavigation.js
import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontSize, Color, FontFamily } from '../GlobalStyles';

const TopNavigation = ({ title, onPressBack, onPressSettings }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
      <Pressable
        onPress={onPressBack || (() => navigation.goBack())}
      >
        <Image
          style={{ width: 18, height: 18 }}
          resizeMode="cover"
          source={require('../assets/back.png')}
        />
      </Pressable>
      <Text style={{ fontSize: 20, color: Color.labelLightPrimary, fontFamily: FontFamily.poppinsSemiBold }}>
        {title}
      </Text>
      <Pressable
        onPress={onPressSettings || (() => {})}
      >
        <Image
          style={{ width: 18, height: 18 }}
          resizeMode="cover"
          source={require('../assets/setting.png')}
        />
      </Pressable>
    </View>
  );
};

export default TopNavigation;
