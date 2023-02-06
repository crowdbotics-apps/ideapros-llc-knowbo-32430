import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.KTflwCPx}>
      <Pressable onPress={({
      navigation
    }) => navigation.navigate("Qrscannerscreen")}><View style={_styles.dLvbCkvG}></View></Pressable><Text style={_styles.VbSqnytx}>QR Scanner </Text><Pressable onPress={() => navigation.navigate("Profilescreenpatientcopy1")}><View style={_styles.dTuzLyuD}></View></Pressable><Text style={_styles.HwUvnydg}>Profile</Text></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  KTflwCPx: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: 0
  },
  dLvbCkvG: {
    left: -3,
    top: 19,
    position: "absolute",
    height: 127,
    width: 184,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  VbSqnytx: {
    left: 8,
    top: 70,
    position: "absolute",
    width: 182,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  dTuzLyuD: {
    left: -1,
    top: 182,
    position: "absolute",
    height: 60,
    width: 178,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  HwUvnydg: {
    left: 10,
    top: 211,
    position: "absolute",
    width: 182,
    height: 26,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  }
});