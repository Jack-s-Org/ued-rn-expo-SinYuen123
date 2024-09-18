import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={require("@/assets/image/HomeBg.png")}
        resizeMode="cover"
      >
        <ImageBackground
          style={styles.relaxCard}
          source={require("@/assets/image/RelaxCard.png")}
          resizeMode="contain"
        >
          <ImageBackground
            style={styles.focusCard}
            source={require("@/assets/image/FocusCard.png")}
            resizeMode="contain"
          />
        </ImageBackground>
        <Text style={styles.fontDemi}>Focus</Text>
        <Image
          style={styles.focusIcon}
          source={require("@/assets/image/FocusIcon.png")}
        />
        <View style={{ marginTop: 28 }}>
          <Text style={styles.font16}>Lock your phone and stay</Text>
          <Text style={styles.font16}>focused! You can’t use any app</Text>
          <Text style={styles.font16}>unless it’s an emergency</Text>
        </View>

        <ImageBackground
          source={require("@/assets/image/ClickButton.png")}
          style={styles.clickButton}
        >
          <TouchableOpacity
            style={styles.NextButton}
            onPress={() => navigation.replace("PomodoroSetting")}
          >
            <Text style={styles.Button}></Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground
          source={require("@/assets/image/TodayBackground.png")}
          style={styles.TodayBackground}
        >
          <Text style={[styles.font20, { marginLeft: -230, marginTop: -200 }]}>
            Mode Setting
          </Text>
        </ImageBackground>
      </ImageBackground>

      <View style={{ marginTop: 68 }}>
        <Text style={styles.font}>Harry focus</Text>
        <Text style={styles.fontBold}>2 hours</Text>
        <Text style={styles.font}>Today</Text>
      </View>

      <ScrollView
        style={[styles.scrollView, { marginTop: 360 }]}
        horizontal={true}
      >
        <Image
          source={require("@/assets/image/work.png")}
          style={styles.work}
        />
        <Image
          source={require("@/assets/image/studyCard.png")}
          style={styles.Study}
        />
        <Image
          source={require("@/assets/image/Rest.png")}
          style={styles.work}
        />
        <Image
          source={require("@/assets/image/sleep.png")}
          style={styles.Study}
        />
        <Image
          source={require("@/assets/image/plus.png")}
          style={styles.work}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 16,
  },
  margin: {
    display: "flex",
    flex: 1,
    width: "25%",
    marginLeft: 250,
    marginTop: -850,
  },
  hpStudy: {
    width: 530,
    height: 580,
    resizeMode: "contain",
    marginLeft: 14,
    marginTop: 12,
  },
  font: {
    fontFamily: "FuturaPTDemi",
    color: "black",
    fontSize: 24,
    textAlign: "left",
  },
  font16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    marginLeft: 76,
    marginTop: 2,
  },
  fontDemi: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 24,
    marginLeft: 36,
    marginTop: -250,
  },
  fontBold: {
    fontFamily: "FuturaPTBold",
    color: "black",
    fontSize: 36,
    textAlign: "left",
  },
  font20: {
    fontFamily: "FuturaPTDemi",
    color: "black",
    fontSize: 20,
    textAlign: "left",
  },
  focusCard: {
    width: 380,
    height: 380,
    marginLeft: 0,
    marginTop: 25,
  },
  relaxCard: {
    width: 380,
    height: 380,
    marginLeft: 0,
    marginTop: 178,
  },
  focusIcon: {
    width: 24,
    height: 24,
    marginLeft: 102,
    marginTop: -26,
  },
  clickButton: {
    width: 124,
    height: 84,
    marginLeft: 260,
    marginTop: -126,
  },
  TodayBackground: {
    width: 400,
    height: 470,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -3,
    marginTop: 120,
  },
  scrollView: {
    width: "100%",
    height: "100%",
    marginTop: "100,",
  },
  work: {
    width: 154,
    height: 154,
    marginLeft: -12,
  },
  Study: {
    width: 145,
    height: 140,
    marginTop: 6,
    marginLeft: -12,
  },
  scrollContent: {
    paddingVertical: 370, // Adjust this padding as needed
  },
  NextButton: {
    width: 120,
    height: 50,
    resizeMode: "cover",
    flex: 1,
    marginTop: 47,
  },
});

export default HomeScreen;
