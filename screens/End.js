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

const End = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/image/hp background.png")}
        style={StyleSheet.absoluteFill}
      ></ImageBackground>

      <ImageBackground
        source={require("@/assets/image/Continue.png")}
        style={styles.continue}
      >
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.replace("Main");
          }}
        >
          <Image
            source={require("@/assets/image/continueButton.png")}
            style={styles.continueButton}
          />
        </TouchableOpacity>
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
  continue: {
    width: 365,
    height: 218,
    marginLeft: -5,
  },
  continueButton: {
    width: 106,
    height: 44,
    marginLeft: 234,
    marginTop: 155,
  },
});

export default End;
