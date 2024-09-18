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

const Onboarding2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={StyleSheet.absoluteFill}>
        <Video
          style={[styles.video, { height: "100%" }]}
          source={require("@/assets/image/OnboardingVideo2.mp4")}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay={true}
          isLooping={true}
        />
      </ImageBackground>

      <ImageBackground
        source={require("@/assets/image/OnboardingPanel2.png")}
        style={styles.TodayBackground}
      >
        <Text style={styles.font24}>White noise & chill music</Text>
        <Text style={[styles.font16, { marginTop: 8 }]}>
          Use the pomodoro method to work and
        </Text>
        <Text style={styles.font16}>achieve the best results</Text>
        <ImageBackground
          source={require("@/assets/image/NextButton.png")}
          style={styles.NextButton}
        >
          <TouchableOpacity
            style={styles.NextButton}
            onPress={() => {
              navigation.replace("Onboarding3");
            }}
          >
            <Text style={styles.Button}>Next</Text>
          </TouchableOpacity>
        </ImageBackground>
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
    width: 120,
    height: 50,
    resizeMode: "cover",
    flex: 1,
    marginTop: 47,
  },
  Button: {
    color: "white",
    fontFamily: "FuturaPTDemi",
    fontSize: 18,
    marginTop: -34,
    marginLeft: 40,
  },
});

export default Onboarding2;
