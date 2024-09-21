import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";

const HarryStudy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={StyleSheet.absoluteFill}>
        <Video
          style={[styles.video, { height: "100%" }]}
          source={require("@/assets/image/hpStudy.mp4")}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay={true}
          isLooping={true}
        />
      </ImageBackground>

      <ImageBackground>
        <TouchableOpacity
          style={styles.End}
          onPress={() => {
            navigation.replace("End");
          }}
        >
          <Image
            source={require("@/assets/image/Done.png")}
            style={styles.End}
          />
        </TouchableOpacity>

        <Image
          source={require("@/assets/image/Music.png")}
          style={styles.music}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "left",
    padding: 16,
  },
  font: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },
  font24: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginTop: 100,
  },
  font16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  TodayBackground: {
    width: 400,
    height: 450,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -20,
    marginTop: 415,
  },
  NextButton: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    flex: 1,
    marginTop: 2,
    marginRight: 70,
  },
  Button: {
    color: "white",
    fontFamily: "FuturaPTDemi",
    fontSize: 18,
    marginTop: -34,
    marginLeft: 40,
  },
  End: {
    width: 50,
    height: 50,
    marginLeft: 150,
  },
  music: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: -52,
  },
});

export default HarryStudy;
