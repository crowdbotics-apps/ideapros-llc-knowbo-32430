import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled9 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 10,
      top: 16,
      position: "absolute",
      width: 175,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>- Patient name</Text><Text style={{
      left: 10,
      top: 65,
      position: "absolute",
      width: 175,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>- DOB</Text><Text style={{
      left: 10,
      top: 114,
      position: "absolute",
      width: 175,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>- Medications: Names and details about medicaments user uses</Text><Text style={{
      left: 10,
      top: 169,
      position: "absolute",
      width: 175,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>- Conditions: List of conditions user checked</Text><Text style={{
      left: 10,
      top: 214,
      position: "absolute",
      width: 175,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}> - Allergies: List of allergies user entered</Text><Text style={{
      left: 10,
      top: 263,
      position: "absolute",
      width: 175,
      height: 39,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}> - DNR: Text entered on DNR card
    </Text></View>;
};

export default Untitled9;