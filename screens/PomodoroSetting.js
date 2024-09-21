import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PomodoroSetting = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("@/assets/image/statsBackground.png")}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
    >
      <ImageBackground
        source={require("@/assets/image/what.png")}
        style={styles.what}
      >
        <Text style={[styles.font_20, { marginLeft: 170 }]}>What do you</Text>
        <Text style={[styles.font_20, { marginTop: 5 }]}>
          like to focus on now?
        </Text>
        <Text style={[styles.font_20, { marginTop: 5, marginLeft: 190 }]}>
          Drawing
        </Text>
      </ImageBackground>

      <ImageBackground
        source={require("@/assets/image/Set.png")}
        style={styles.set}
      >
        <Text style={[styles.font_20, { marginTop: 55, marginLeft: 170 }]}>
          Set a timer
        </Text>
        <Text style={[styles.font_16, { marginTop: 3, marginLeft: 184 }]}>
          Focus for
        </Text>
        <Text style={[styles.font_20, { marginTop: 5, marginLeft: 172 }]}>
          00 H 00M
        </Text>
      </ImageBackground>

      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.replace("Main");
        }}
      >
        <Image
          source={require("@/assets/image/back.png")}
          style={styles.back}
        />
      </TouchableOpacity>

      <ImageBackground
        source={require("@/assets/image/TodayBackground.png")}
        style={styles.TodayBackground}
      >
        <ImageBackground
          source={require("@/assets/image/hpFly.png")}
          style={styles.image}
        />
        <View>
          <Text style={[styles.font20, { marginTop: -150 }]}>
            Pomodoro Setting
          </Text>
        </View>
        <Image
          source={require("@/assets/image/PomoWork.png")}
          style={styles.work}
        />
        <Image
          source={require("@/assets/image/PomoShort.png")}
          style={styles.short}
        />
        <Image
          source={require("@/assets/image/PomoSection.png")}
          style={styles.short}
        />

        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => {
            navigation.replace("HarryStudy");
          }}
        >
          <ImageBackground
            source={require("@/assets/image/NextButton.png")}
            style={styles.NextButton}
          >
            <Text style={styles.Button}>Start</Text>
          </ImageBackground>
        </TouchableOpacity>
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
    marginTop: 0,
    marginLeft: -160,
  },
  font_20: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 20,
    marginTop: 70,
    marginLeft: 140,
  },
  font_16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    marginTop: 70,
    marginLeft: 140,
  },
  image: {
    width: 380,
    height: 560,
    marginTop: -360,
    marginLeft: -180,
    resizeMode: "contain",
  },
  TodayBackground: {
    width: 400,
    height: 470,
    resizeMode: "contain",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -3,
    marginTop: 145,
  },
  work: {
    width: 350,
    height: 105,
    marginTop: -130,
  },
  short: {
    width: 350,
    height: 105,
    marginTop: -30,
  },
  what: {
    width: 390,
    height: 265,
    marginTop: 40,
  },
  set: {
    width: 370,
    height: 255,
    marginTop: -70,
    marginLeft: 60,
  },
  back: {
    width: 46,
    height: 45,
    marginTop: -210,
    marginLeft: 10,
  },
  NextButton: {
    width: 120,
    height: 50,
    resizeMode: "cover",
    flex: 1,
    marginTop: -8,
  },
  Button: {
    color: "white",
    fontFamily: "FuturaPTDemi",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 40,
  },
});

export default PomodoroSetting;
