import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled6 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 20,
      top: 17,
      position: "absolute",
      height: 99,
      width: 160,
      backgroundColor: "#312fa1",
      borderRadius: 0,
      color: "#777777",
      borderWidth: 2
    }}></View><Text style={{
      left: 20,
      top: 50,
      position: "absolute",
      width: 160,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Generated QR Code</Text><View style={{
      left: 20,
      top: 126,
      position: "absolute",
      height: 56,
      width: 113,
      backgroundColor: "#a02f2f",
      borderRadius: 0,
      color: "#777777",
      borderWidth: 2
    }}></View><View style={{
      left: 20,
      top: 208,
      position: "absolute",
      height: 31,
      width: 160,
      backgroundColor: "#2fa135",
      borderRadius: 0,
      color: "#777777",
      borderWidth: 2
    }}></View><Text style={{
      left: 20,
      top: 144,
      position: "absolute",
      width: 114,
      height: 19,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Emergency</Text><Pressable onPress={({
      navigation
    }) => navigation.navigate("Profilescreen")}><View style={{
        left: 10,
        top: 232,
        position: "absolute",
        height: 31,
        width: 160,
        backgroundColor: "#49c44f",
        borderRadius: 0,
        color: "#777777",
        borderWidth: 2
      }}></View></Pressable><Pressable onPress={({
      navigation
    }) => navigation.navigate("Untitled8")}><View style={{
        left: 10,
        top: 265,
        position: "absolute",
        height: 31,
        width: 160,
        backgroundColor: "#26c02e",
        borderRadius: 0,
        color: "#777777",
        borderWidth: 2
      }}></View></Pressable><Text style={{
      left: 20,
      top: 214,
      position: "absolute",
      width: 160,
      height: 19,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Home</Text><Text style={{
      left: 21,
      top: 285,
      position: "absolute",
      width: 160,
      height: 19,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Medical History</Text><Text style={{
      left: 22,
      top: 249,
      position: "absolute",
      width: 160,
      height: 19,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Profile</Text><Pressable onPress={({
      navigation
    }) => navigation.navigate("Untitled9")}><View style={{
        left: 12,
        top: 302,
        position: "absolute",
        height: 31,
        width: 160,
        backgroundColor: "#2fa135",
        borderRadius: 0,
        color: "#777777",
        borderWidth: 2
      }}></View></Pressable><Text style={{
      left: 19,
      top: 319,
      position: "absolute",
      width: 160,
      height: 19,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Summary</Text><Text style={{
      left: 20,
      top: 193,
      position: "absolute",
      width: 159,
      height: 14,
      lineHeight: 8,
      fontSize: 14,
      borderRadius: 0,
      textAlign: "center"
    }}>Bottom Menu</Text><Pressable onPress={() => navigation.navigate("Untitled2")}><View style={{
        left: 130,
        top: 118,
        position: "absolute",
        height: 55,
        width: 40,
        backgroundColor: "#dda7a7",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 144,
      top: 144,
      position: "absolute",
      width: 31,
      height: 22,
      lineHeight: 9,
      fontSize: 14,
      borderRadius: 0
    }}>Em. Settings </Text></View>;
};

export default Untitled6;