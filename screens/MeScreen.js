import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

const MeScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access the gallery
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/image/statsBackground.png")}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
    >
      <View style={[styles.profileContainer, { marginTop: 20 }]}>
        <TouchableOpacity onPress={pickImage}>
          <ImageBackground
            source={
              profileImage
                ? { uri: profileImage }
                : require("@/assets/image/HarryProfile.png")
            }
            style={styles.profile}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.TodaySet}>
        <ImageBackground
          source={require("@/assets/image/watchBg.png")}
          style={styles.watchBackground}
        >
          <Image
            source={require("@/assets/image/watch.png")}
            style={styles.watch}
          />
          <View>
            <Text style={styles.font20Black}>Smart Watch</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfileIcon.png")}
            style={[styles.ProfileIcon, { marginRight: 0 }]}
          />
        </ImageBackground>

        <ImageBackground
          source={require("@/assets/image/supportBg.png")}
          style={[styles.supportBg, { marginTop: 8 }]}
        >
          <View style={[{ marginLeft: -240 }]}>
            <Text style={styles.font20Black}>Support</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfileIcon.png")}
            style={[styles.ProfileIcon, { marginRight: 0 }]}
          />
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/image/supportBg.png")}
          style={[styles.supportBg, { marginTop: 18 }]}
        >
          <View style={[{ marginLeft: -240 }]}>
            <Text style={styles.font20Black}>General</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfileIcon.png")}
            style={[styles.ProfileIcon, { marginRight: 0 }]}
          />
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/image/supportBg.png")}
          style={[styles.supportBg, { marginTop: 18 }]}
        >
          <View style={[{ marginLeft: -158 }]}>
            <Text style={styles.font20Black}>Privacy & terms</Text>
          </View>
          <View style={[{ marginRight: 20 }]}>
            <Image
              source={require("@/assets/image/ProfileIcon.png")}
              style={[styles.ProfileIcon, { marginRight: 0 }]}
            />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },

  font16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  font20Black: {
    fontFamily: "FuturaPTDemi",
    color: "black",
    fontSize: 20,
    textAlign: "left",
  },

  TodayBackground: {
    width: 400,
    height: 470,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -3,
    marginTop: 35,
  },
  TodayPanel: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,

    marginTop: 36,
  },
  TodaySet: {
    flexDirection: "column",
    alignItems: "center",
    resizeMode: "contain",

    marginLeft: -265,
  },

  watchBackground: {
    width: 360,
    height: 130,
    resizeMode: "cover",
    marginTop: -10,
    marginLeft: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  watch: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginLeft: 3, // Remove margin to keep it at the left
    marginTop: 0,
  },

  TodaySmallBG: {
    width: 430,
    height: 250,
    resizeMode: "cover",
    marginTop: -40,
    marginLeft: 260,
    justifyContent: "space-between",
  },
  smile: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginLeft: 50, // Remove margin to keep it at the left
    marginTop: -30,
  },
  smileContainer: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
    marginTop: 30,
  },
  supportBg: {
    width: 359,
    height: 63,
    resizeMode: "cover",
    marginLeft: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    width: 160,
    height: 190,
    resizeMode: "contain",

    marginTop: 100,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 200,
    alignItems: "right",
    justifyContent: "right",
  },
});

export default MeScreen;
