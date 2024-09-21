import React, { useState, useRef } from "react";
import {
  StyleSheet,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import HarryPotter1 from "@/assets/image/HarryPotter1.png";
import HarryPotter2 from "@/assets/image/HarryPotter2.png";

const ChooseTheme = ({ navigation }) => {
  // <-- Destructure navigation here
  const [tapped, setTapped] = useState(false);
  const opacity = useRef(new Animated.Value(1)).current; // Opacity for the first image
  const scale = useRef(new Animated.Value(1)).current; // Scale for the images

  const handleTap = () => {
    // First, fade out HarryPotter1
    Animated.sequence([
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0, // Fade out HarryPotter1
          duration: 300, // Smooth fade-out duration
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 0.9, // Slight scale down
          friction: 7,
          tension: 60,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // After HarryPotter1 fades out, switch the image
      setTapped(!tapped);

      // Then fade in HarryPotter2
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1, // Fade in HarryPotter2
          duration: 600, // Smooth fade-in duration
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1, // Scale back to normal size
          friction: 7,
          tension: 60,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <ImageBackground
      source={require("@/assets/image/statsBackground.png")}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
    >
      <Text style={[styles.font36, { marginTop: 120 }]}>Choose </Text>
      <Text style={styles.font36}>Your Theme</Text>

      <TouchableWithoutFeedback onPress={handleTap}>
        <Animated.Image
          source={tapped ? HarryPotter2 : HarryPotter1}
          style={{
            width: 240,
            height: 240,
            opacity: opacity, // Use animated opacity
            transform: [{ scale: scale }], // Use animated scale
            marginTop: 60,
            marginLeft: 170,
          }}
        />
      </TouchableWithoutFeedback>

      <Image source={require("@/assets/image/bt21.png")} style={styles.bt21} />
      <Image
        source={require("@/assets/image/kakao.png")}
        style={styles.kakao}
      />
      <Image
        source={require("@/assets/image/LineFriend.png")}
        style={styles.Line}
      />

      <ImageBackground
        source={require("@/assets/image/Login.png")}
        style={styles.LoginButton}
      >
        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => {
            navigation.replace("Main"); // Ensure navigation works
          }}
        >
          <Text style={styles.Button}>Done</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },
  font: {
    fontFamily: "FuturaPTBold",
    color: "white",
    fontSize: 20,
  },
  font36: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 36,
    textAlign: "Left",
    paddingLeft: 16,
  },
  bt21: {
    width: 240,
    height: 240,
    marginTop: -240,
    marginLeft: -18,
  },
  kakao: {
    width: 240,
    height: 240,
    marginTop: -50,
    marginLeft: -18,
  },
  Line: {
    width: 240,
    height: 240,
    marginTop: -240,
    marginLeft: 170,
  },
  LoginButton: {
    width: 360,
    height: 56,
    marginTop: 0,
    marginLeft: 20,
  },
  Button: {
    color: "white",
    fontFamily: "FuturaPTDemi",
    fontSize: 20,
    marginTop: 16,
    textAlign: "center",
  },
});

export default ChooseTheme;
