import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModeSetting = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* ImageBackground to fill entire scrollable content */}
      <ImageBackground
        source={require("@/assets/image/Modeee.png")}
        resizeMode="cover"
        style={styles.background}
      >
        {/* Your content inside ImageBackground */}
        <TouchableOpacity
          style={styles.End}
          onPress={() => {
            navigation.replace("Main");
          }}
        >
          <Image
            source={require("@/assets/image/backWhite.png")}
            style={styles.End}
          />
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  background: {
    width: "100%", // Full width of the container
    height: 980, // Adjust this height based on the length of your image
  },
  End: {
    width: 50,
    height: 50,
    marginLeft: 4,
    marginTop: 8,
  },
  music: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: -52,
  },
});

export default ModeSetting;
