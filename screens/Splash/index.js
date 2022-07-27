import React from "react";
import { View, ImageBackground } from "react-native";

const Splash = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source={{
      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABJ0AAASdCAYAAADqsC1HAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAPZhJREFUeNrt3U+MHFmeH/ZvDea2h83d2RU0kojNvsneBSZbBAx7AaGL8EX2IToJrKePXRRgrS/aJgHeSd4JkFxfpItZPM5aQGfHQZ6LzWoIWAMGuJ0NCLB06hxQcI+9O7PpwxyXoUNGkVnFzKrMjMiMrOLnAxDMP/Fe/F5kRpHxq/d7kQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdOOg6AICr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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/WdfHZ683AYXegAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0wMlQxOToxNToxNSswMDowMDlArgUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMDJUMTk6MTU6MTUrMDA6MDBIHRa5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=="
    }} resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center"
    }}>
        </ImageBackground>
      </View>;
};

export default Splash;