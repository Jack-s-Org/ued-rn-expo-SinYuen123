import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StatScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/image/statsBackground.png")}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}></SafeAreaView>

      <ImageBackground
        source={require("@/assets/image/TodayBackground.png")}
        style={styles.TodayBackground}
      >
        <ImageBackground
          source={require("@/assets/image/hpFly.png")}
          style={styles.image} // Add style to control image size and position
        />
        <View>
          <Text style={[styles.font20, { marginTop: -130 }]}>
            Pomodoro Setting
          </Text>
        </View>
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
  font20: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 20,
    marginTop: -80,
    marginLeft: -160,
  },
  font16Black: {
    fontFamily: "FuturaPTDemi",
    color: "black",
    fontSize: 16,
    textAlign: "left",
  },
  image: {
    width: 380,
    height: 560,
    marginTop: -600,
    marginLeft: -160,
    resizeMode: "contain",
  },
  monthlyView: {
    marginLeft: -8,
    width: "100%",
    height: 140,
    resizeMode: "contain",
  },
  monthlySet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "98%",
    paddingHorizontal: 8,
  },
  monthlyCard: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
    height: 100,
    marginHorizontal: 2,
    marginTop: 14,
    marginLeft: 6,
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginLeft: 8,
    marginTop: -20,
  },
  MonthlyDay: {
    fontFamily: "FuturaPTBold",
    color: "black",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  TodayBackground: {
    width: 400,
    height: 470,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -3,
    marginTop: -55,
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

  ticketBackground: {
    width: 440,
    height: 150,
    resizeMode: "cover",
    marginTop: -10,
    marginLeft: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
  todaySmallBg: {
    width: 440,
    height: 300,
    resizeMode: "contain",
    border: 20,
    borderColor: "black",
    marginLeft: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  line: {
    width: 4,
    height: 80,
    alignItems: "left",
    justifyContent: "space-between",
    marginLeft: -95,
    marginTop: -35,
  },
});

export default StatScreen;
