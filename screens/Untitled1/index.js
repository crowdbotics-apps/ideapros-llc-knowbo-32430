import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: 0
  }}>
      <Pressable onPress={({
      navigation
    }) => navigation.navigate("Qrscannerscreen")}><View style={{
        left: -3,
        top: 19,
        position: "absolute",
        height: 127,
        width: 184,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 8,
      top: 70,
      position: "absolute",
      width: 182,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>QR Scanner </Text><Pressable onPress={() => navigation.navigate("Profile screen")}><View style={{
        left: -1,
        top: 182,
        position: "absolute",
        height: 60,
        width: 178,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 10,
      top: 211,
      position: "absolute",
      width: 182,
      height: 26,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Profile</Text></View>;
};

export default Untitled1;