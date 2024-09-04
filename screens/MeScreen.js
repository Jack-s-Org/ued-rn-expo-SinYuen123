import { ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/image/statsBackground.png")}
      style={styles.background} // Apply the correct style for full-screen background
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Me</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MeScreen;
