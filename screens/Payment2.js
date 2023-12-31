import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles.ts";
import TopNavigation from "./TopNavigation.tsx";
import { useNavigation } from "@react-navigation/native";
import Payment1 from "./Payment1.js";
import Payment3 from "./Payment3.js";

const Payment2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.payment2}>
         <Pressable onPress={() => navigation.navigate(Payment3)}>
        <View style={styles.ecommerceCard}>
          <View style={styles.rectangle} />
          <View style={styles.line} />
          <Image
            style={styles.chevronschevronRightIcon}
            resizeMode="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Visa</Text>
          <View style={styles.moneyContainer}>
            <View style={styles.moneyRectangle}>
              <Image
                style={styles.moneyVisa}
                resizeMode="contain"
                source={require("../assets/visa.png")}
              />
            </View>
          </View>
        </View>
      </Pressable>
<Pressable onPress={() => navigation.navigate(Payment3)}>
      <View style={[styles.post32, styles.postLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.line} />

        <Image
          style={[styles.chevronschevronRightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chevron-right.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>MasterCard</Text>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyRectangle}>
            <Image
              style={styles.moneyVisa}
              resizeMode="contain"
              source={require("../assets/Group4.png")}
            />
          </View>
        </View>
      </View>
      </Pressable>
<Pressable onPress={() => navigation.navigate(Payment3)}>
      <View style={[styles.post33, styles.postLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.line} />

        <Image
          style={[styles.chevronschevronRightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chevron-right.png")}
        />
        <Text style={[styles.americanExpress, styles.labelTypo]}>
          American Express
        </Text>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyRectangle}>
            <Image
              style={styles.moneyVisa}
              resizeMode="contain"
              source={require("../assets/am_ex.png")}
            />
          </View>
        </View>
      </View>
      </Pressable>
<Pressable onPress={() => navigation.navigate(Payment3)}>
      <View style={[styles.post34, styles.postLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.line} />

        <Image
          style={[styles.chevronschevronRightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chevron-right.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>PayPal</Text>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyRectangle}>
            <Image
              style={styles.moneyVisa }
              resizeMode="contain"
              source={require("../assets/paypal.png")}
            />
          </View>
        </View>
      </View>
</Pressable>
<Pressable onPress={() => navigation.navigate(Payment3)}>
      <View style={[styles.post35, styles.postLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.line} />

        <Image
          style={[styles.chevronschevronRightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chevron-right.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>Diners</Text>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyRectangle}>
            <Image
              style={styles.moneyVisa}
              resizeMode="contain"
              source={require("../assets/icons8-diners_club.png")}
            />
          </View>
        </View>
      </View>
      </Pressable>
      <View style={[styles.navigationBarLightLarge, styles.navigationPosition]}>
        <View style={[styles.navigationBarComponents, styles.titlePosition]}>
          <Pressable style={[styles.back, styles.backLayout]}>
            <Image
              style={[styles.backgroundIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/back.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.title]}>Payment</Text>
        <Pressable style={[styles.setting, styles.backLayout]} onPress={() => {}}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/setting.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postLayout: {
    height: 84,
    left: 0,
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  navigationPosition: {
    right: 0,
    position: "absolute",
  },
  titlePosition: {
    height: 24,
    top: 30,
    position: "absolute",
  },
  backLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  line: {
    height: "0.6%",
    width: "100.14%",
    top: "99.7%",
    right: "-0.07%",
    bottom: "-0.3%",
    left: "-0.07%",
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_100,
    borderTopWidth: 0.5,
    position: "absolute",
  },
  chevronschevronRightIcon: {
    height: "31.82%",
    width: "7.47%",
    top: "34.09%",
    right: "3.57%",
    bottom: "34.09%",
    left: "88.97%",
  },
  label: {
    width: "33.78%",
    display: "flex",
    alignItems: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.aBeeZeeRegular,
    lineHeight: 25,
    left: "22.13%",
    top: "34.6%",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  moneyVisa: { 
    height: "100%",
    width: "100%",

    
  },
  moneyContainer: {
    position: "absolute",
    top: "22.73%",
    left: "5.33%",
    
   
    height: "54.55%",
    width: "12.8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  moneyRectangle: {
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    height: "100%",
    width: "100%",
    
  },
  ecommerceCard: {
    top: 100,
    width: 360,
    height: 84,
    position: "absolute",
  },
  post32: {
    top: 199,
    width: 360,
    height: 84,
    position: "absolute",
  },
  americanExpress: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.aBeeZeeRegular,
    lineHeight: 25,
    left: "22.13%",
    top: "34.6%",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  post33: {
    top: 298,
    width: 360,
    height: 84,
    position: "absolute",
  },
  post34: {
    top: 397,
    width: 360,
    height: 84,
    position: "absolute",
  },
  post35: {
    top: 496,
    width: 360,
    height: 84,
    position: "absolute",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "100%",
    height: "100%",
    width: "100%",
  },
  back: {
    top: 6,
    left: 0,
    height: 18,
    width: 18,
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
    letterSpacing: 0,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.labelLightPrimary,
    width: 201,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 44,
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
  payment2: {
    backgroundColor: Color.colorsNeutralWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Payment2;
