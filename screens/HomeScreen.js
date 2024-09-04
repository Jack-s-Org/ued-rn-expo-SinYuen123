import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={require("@/assets/image/hp background.png")}
        resizeMode="cover"
      />
      <Image
        style={{
          width: "auto",
          marginLeft: 16,
          marginRight: 16,
          marginTop: -260,
        }}
        source={require("@/assets/image/hpDonePanel.png")}
        resizeMode="contain"
      />
      <Image
        style={style.margin}
        // style={{
        //   height: "4%",
        //   width: "100%",
        // }}
        source={require("@/assets/image/continueButton.png")}
        resizeMode="contain"
      />
      <Image
        style={{
          height: "5%",
          width: "15%",
        }}
        source={require("@/assets/image/shareButton.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});

const style = StyleSheet.create({
  margin: {
    display: "flex",
    flex: 1,
    width: "25%",
    marginLeft: 250,
    marginTop: -850,
  },
});

export default HomeScreen;
