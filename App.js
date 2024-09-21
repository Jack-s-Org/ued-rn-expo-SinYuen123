import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    FuturaPTDemi: require("@/assets/font/FuturaPT-Demi.ttf"),
    FuturaPTBold: require("@/assets/font/FuturaPT-Bold.ttf"),
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    setLoading(true);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Sorry, we need camera roll permissions to make this work!"
      );
      setLoading(false);
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setLoading(false);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      Alert.alert("Image selection canceled");
    }
  };

  const resetImage = () => {
    setImage(null);
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Button title="Reset Image" onPress={resetImage} />
        </>
      )}
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
