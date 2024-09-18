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
      <SafeAreaView style={styles.container}>
        <Text style={styles.font}>Daily Mood Record</Text>
        <Image
          source={require("@/assets/image/MoodRecord.png")}
          style={styles.image} // Add style to control image size and position
        />
        <Text style={[styles.font, { marginTop: 14 }]}>Monthly View</Text>

        <ImageBackground
          source={require("@/assets/image/MonthlyView.png")}
          style={styles.monthlyView}
        >
          <View style={styles.monthlySet}>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Mon</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Tue</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Wed</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Wed</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Tue</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Fri</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Sat</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.monthlyCard}>
              <Text style={styles.MonthlyDay}>Sun</Text>
              <Image
                source={require("@/assets/image/MonthlyCard.png")}
                style={styles.cardImage}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <ImageBackground
        source={require("@/assets/image/TodayBackground.png")}
        style={styles.TodayBackground}
      >
        <View style={styles.TodaySet}>
          <ImageBackground
            source={require("@/assets/image/TodayPanel.png")}
            style={styles.TodayPanel}
          >
            <Text style={styles.font16}>Today</Text>
          </ImageBackground>
          <Text style={styles.font16Black}>17 Jun 2024</Text>

          <ScrollView style={styles.scrollView}>
            <ImageBackground
              source={require("@/assets/image/ticketBackground.png")}
              style={styles.ticketBackground}
            >
              <Image
                source={require("@/assets/image/smile.png")}
                style={styles.smile}
              />
              <View style={[{ marginTop: -30 }]}>
                <Text style={styles.font16Black}>6:44PM</Text>
                <Text style={styles.font16Black}>
                  You noticed your emotion.
                </Text>
              </View>
            </ImageBackground>

            <ImageBackground
              source={require("@/assets/image/TodaySmallBG.png")}
              style={[styles.todaySmallBg, { marginTop: -60 }]}
            >
              <Image
                source={require("@/assets/image/smile.png")}
                style={[styles.smile, { marginTop: -170 }]}
              />
              <View style={[{ marginTop: -170 }]}>
                <Text style={styles.font16Black}>9:24PM</Text>
                <Text style={styles.font16Black}>Focus.</Text>
              </View>
              <Image
                source={require("@/assets/image/Line.png")}
                style={styles.line}
              />

              <Image
                source={require("@/assets/image/smile.png")}
                style={[styles.smile, { marginTop: 110, marginLeft: -40 }]}
              />
              <View style={[{ marginTop: 110 }]}>
                <Text style={styles.font16Black}>9:24PM</Text>
                <Text style={styles.font16Black}>
                  Harry spent two hours drawing.
                </Text>
              </View>
            </ImageBackground>

            <ImageBackground
              source={require("@/assets/image/ticketBackground.png")}
              style={[styles.ticketBackground, { marginTop: -60 }]}
            >
              <Image
                source={require("@/assets/image/smile.png")}
                style={styles.smile}
              />
              <View style={[{ marginTop: -30 }]}>
                <Text style={styles.font16Black}>9:44PM</Text>
                <Text style={styles.font16Black}>Rest.</Text>
              </View>
            </ImageBackground>
          </ScrollView>
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
  font16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  font16Black: {
    fontFamily: "FuturaPTDemi",
    color: "black",
    fontSize: 16,
    textAlign: "left",
  },
  image: {
    width: "95%",
    height: 160,
    marginTop: 20,
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
    marginTop: 35,
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
