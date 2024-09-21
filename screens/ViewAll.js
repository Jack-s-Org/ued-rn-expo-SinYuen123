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

const ViewAll = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/image/ViewAll.png")}
        style={StyleSheet.absoluteFill}
      ></ImageBackground>

      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => {
          navigation.replace("StatScreen");
        }}
      >
        <ImageBackground
          source={require("@/assets/image/backWhite.png")}
          style={styles.backWhite}
        ></ImageBackground>
      </TouchableOpacity>
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
  backWhite: {
    width: 50,
    height: 50,
    marginTop: -25,
    marginLeft: -15,
  },
});

export default ViewAll;
