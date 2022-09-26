import { StyleSheet } from "react-native";
import React from "react";
import { View, ImageBackground } from "react-native";

const Onboarding = () => {
  return <View style={_styles.IQNwpTQv}>
        <ImageBackground source="https://d3tklmlrp1a8c2.cloudfront.net/media/components/screens/react-native-onboarding.png" resizeMode="contain" style={_styles.IRPOaGnV}>
        </ImageBackground>
      </View>;
};

export default Onboarding;

const _styles = StyleSheet.create({
  IQNwpTQv: {
    padding: 10,
    position: "relative",
    height: "100%"
  },
  IRPOaGnV: {
    flex: 1,
    justifyContent: "center"
  }
});