import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const MeScreen = () => {
//   return (
//     <ImageBackground
//       source={require("@/assets/image/statsBackground.png")}
//       style={StyleSheet.absoluteFill}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.container}>
//         <View>
//           <ImageBackground
//             source={require("@/assets/image/HarryProfile.png")}
//             style={styles.profile}
//           ></ImageBackground>
//         </View>

//         <Text style={[styles.font, { marginTop: -50 }]}>Harry</Text>

//         {/* <ImageBackground
//           source={require("@/assets/image/supportBg.png")}
//           style={styles.supportBg}
//         ></ImageBackground> */}

//         {/* <ImageBackground
//           source={require("@/assets/image/profileBar.png")}
//           style={styles.profileBar}
//         ></ImageBackground> */}
//       </SafeAreaView>

//       <ImageBackground
//         source={require("@/assets/image/TodayBackground.png")}
//         style={styles.TodayBackground}
//       >
//         <View style={styles.TodaySet}>
//           <ImageBackground
//             source={require("@/assets/image/TodayPanel.png")}
//             style={styles.TodayPanel}
//           >
//             <Text style={styles.font16}>Today</Text>
//           </ImageBackground>
//           <Text style={styles.font16Black}>17 Jun 2024</Text>

//           <ImageBackground
//             source={require("@/assets/image/ticketBackground.png")}
//             style={styles.ticketBackground}
//           >
//             <Image
//               source={require("@/assets/image/smile.png")}
//               style={styles.smile}
//             />
//             <View style={[{ marginTop: -30 }]}>
//               <Text style={styles.font16Black}>6:44PM</Text>
//               <Text style={styles.font16Black}>You noticed your emotion.</Text>
//             </View>
//           </ImageBackground>

//           <ImageBackground
//             source={require("@/assets/image/TodaySmallBG.png")}
//             style={[styles.todaySmallBg, { marginTop: -60 }]}
//           >
//             <Image
//               source={require("@/assets/image/smile.png")}
//               style={[styles.smile, { marginTop: -170 }]}
//             />
//             <View style={[{ marginTop: -170 }]}>
//               <Text style={styles.font16Black}>9:24PM</Text>
//               <Text style={styles.font16Black}>Focus.</Text>
//             </View>
//             <Image
//               source={require("@/assets/image/Line.png")}
//               style={styles.line}
//             />

//             <Image
//               source={require("@/assets/image/smile.png")}
//               style={[styles.smile, { marginTop: 110, marginLeft: -40 }]}
//             />
//             <View style={[{ marginTop: 110 }]}>
//               <Text style={styles.font16Black}>9:24PM</Text>
//               <Text style={styles.font16Black}>
//                 Harry spent two hours drawing.
//               </Text>
//             </View>
//           </ImageBackground>

//           <ImageBackground
//             source={require("@/assets/image/ticketBackground.png")}
//             style={[styles.ticketBackground, { marginTop: -60 }]}
//           >
//             <Image
//               source={require("@/assets/image/smile.png")}
//               style={styles.smile}
//             />
//             <View style={[{ marginTop: -30 }]}>
//               <Text style={styles.font16Black}>9:44PM</Text>
//               <Text style={styles.font16Black}>Rest.</Text>
//             </View>
//           </ImageBackground>
//         </View>
//       </ImageBackground>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1, // Ensures the background fills the entire screen
//   },
//   container: {
//     alignItems: "center",
//     paddingLeft: 12,
//   },
//   profileContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   profile: {
//     width: 160,
//     height: 180,
//     resizeMode: "contain",
//   },
//   nameText: {
//     marginTop: 10,
//     fontSize: 20,
//     color: "white",
//   },
//   font: {
//     fontFamily: "FuturaPTBold",
//     color: "white",
//     fontSize: 20,
//   },
//   smallBg: {
//     // width: "98%",
//     // height: 110,
//     // resizeMode: "cover",
//     // marginTop: 50,
//     width: "98%",
//     height: 110,
//     resizeMode: "contain",
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   supportBg: {
//     width: "98%",
//     height: 80,

//     marginTop: 50,
//   },
//   profileBar: {
//     width: 30,
//     height: 420,
//     marginTop: 70,
//     marginLeft: 1,
//   },
//   font16: {
//     fontFamily: "FuturaPTDemi",
//     color: "white",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   font16Black: {
//     fontFamily: "FuturaPTDemi",
//     color: "black",
//     fontSize: 16,
//     textAlign: "left",
//   },
//   ticketBackground: {
//     width: 440,
//     height: 150,
//     resizeMode: "cover",
//     marginTop: -10,
//     marginLeft: 260,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   smile: {
//     width: 80,
//     height: 80,
//     resizeMode: "contain",
//     marginLeft: 50, // Remove margin to keep it at the left
//     marginTop: -30,
//   },
// });

// export default MeScreen;

const MeScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/image/statsBackground.png")}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
    >
      <View style={[styles.profileContainer, { marginTop: 20 }]}>
        <ImageBackground
          source={require("@/assets/image/HarryProfile.png")}
          style={styles.profile}
        ></ImageBackground>
      </View>
      <View style={styles.TodaySet}>
        <ImageBackground
          source={require("@/assets/image/watchBg.png")}
          style={styles.watchBackground}
        >
          <Image
            source={require("@/assets/image/watch.png")}
            style={styles.watch}
          />
          <View>
            <Text style={styles.font20Black}>Smart Watch</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfileIcon.png")}
            style={[styles.ProfileIcon, { marginRight: 0 }]}
          />
        </ImageBackground>

        <ImageBackground
          source={require("@/assets/image/supportBg.png")}
          style={[styles.supportBg, { marginTop: 8 }]}
        >
          <View style={[{ marginLeft: -240 }]}>
            <Text style={styles.font20Black}>Support</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfileIcon.png")}
            style={[styles.ProfileIcon, { marginRight: 0 }]}
          />
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/image/supportBg.png")}
          style={[styles.supportBg, { marginTop: 18 }]}
        >
          <View style={[{ marginLeft: -240 }]}>
            <Text style={styles.font20Black}>General</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfileIcon.png")}
            style={[styles.ProfileIcon, { marginRight: 0 }]}
          />
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/image/supportBg.png")}
          style={[styles.supportBg, { marginTop: 18 }]}
        >
          <View style={[{ marginLeft: -178 }]}>
            <Text style={styles.font20Black}>Privacy & terms</Text>
          </View>
          <View style={[{ marginRight: 20 }]}>
            <Image
              source={require("@/assets/image/ProfileIcon.png")}
              style={[styles.ProfileIcon, { marginRight: 0 }]}
            />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },

  font16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  font20Black: {
    fontFamily: "FuturaPTDemi",
    color: "black",
    fontSize: 20,
    textAlign: "left",
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

  watchBackground: {
    width: 360,
    height: 130,
    resizeMode: "cover",
    marginTop: -10,
    marginLeft: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  watch: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginLeft: 3, // Remove margin to keep it at the left
    marginTop: 0,
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
  supportBg: {
    width: 359,
    height: 63,
    resizeMode: "cover",
    marginLeft: 260,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    width: 160,
    height: 190,
    resizeMode: "contain",

    marginTop: 100,
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 200,
    alignItems: "right",
    justifyContent: "right",
  },
});

export default MeScreen;
