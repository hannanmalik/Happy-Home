import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import Payment2 from "./Payment2";

const Payment1 = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.payment1}>
      <Text style={[styles.noPaymentFound, styles.titleTypo]}>
        No Payment Found
      </Text>
      <Text style={[styles.youCanAdd, styles.addTypo]}>
        You can add payments during checkout...
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.ellipseParent, styles.clickToAddLayout]}>
          <Pressable onPress={() => navigation.navigate(Payment2)}>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/Ellipse.png")}
            />
          </Pressable>
          <Text style={[styles.clickToAdd, styles.clickToAddLayout]}>
            Click to Add Payment Methods
          </Text>
        </View>
      </View>
      {/* <View style={[styles.navigationBarLightLarge, styles.navigationPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/plus.svg")}
        />
        <View style={[styles.navigationBarComponents, styles.titlePosition]}>
          <Pressable
            style={[styles.back, styles.backLayout]}
            onPress={() => {}}
          ></Pressable>
        </View>
        <Image
          style={[styles.navigationBarComponents1, styles.navigationPosition]}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
        <Text style={[styles.title]}>Payment</Text>
        <Pressable
          style={[styles.setting, styles.backLayout]}
          onPress={() => {}}
        >
          <Image
            style={[styles.backgroundIcon]}
            resizeMode="cover"
            source={require("../assets/setting.png")}
          />
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  addTypo: {
    height: 49,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  clickToAddLayout: {
    width: 251,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  navigationPosition: {
    right: 0,
    position: "absolute",
  },
 titlePosition: {
  height: 24,
  top: 40, 
  position: "absolute",
  
},

  backLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  noPaymentFound: {
    top: "36.5%",
    left: "28.67%",
    fontSize: 17,
    color: "#131313",
    position: "absolute",
  },
  youCanAdd: {
    top: 342,
    left: 61,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: "rgba(0, 0, 0, 0.7)",
    width: 249,
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: 18,  
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderStyle: "solid",
    borderColor: "#374a9f",
    borderWidth: 2,
    width: 314,
    height: 185,
    position: "absolute",
  },
  
  groupItem: {
    left: 108,
    width: 56,
    height: 56,
    top: 0,
    position: "absolute",
  },
  iconPlus: {
    height: "15.9%",
    width: "8.3%",
    top: "13.74%",
    right: "45.88%",
    bottom: "79.35%",
    left: "45.82%",
  },
  clickToAdd: {
    top: 82,
    color: "#282477",
    left: 18,
    height: 49,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    width: 251,
  },
   imageStyle: {
  width: 18,
  height: 18,
  top: 6,
  left: -0.5,
},

  ellipseParent: {
    top: 40,
    left: 31,
    height: 131,
  },
  rectangleParent: {
    top: 582,
    left: 24,
    width: 312,
    height: 183,
    position: "absolute",
  },
  backgroundIcon: {
    height: "100%",
    top: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  back: {
    top: 6,
    left: 0,
  },
  navigationBarComponents: {
    left: 16,
    width: 170,
  },
  navigationBarComponents1: {
    top: 43,
    width: 185,
    height: 43,
    display: "none",
  },
  title: {
    left: 42,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 40,
    color: Color.labelLightPrimary,
    width: 201,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 40, 
  },
  setting: {
    top: 33,
    left: 322,
  },
  navigationBarLightLarge: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 90,
    left: 0,
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  payment1: {
    backgroundColor: "#f0f5ff",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Payment1;
