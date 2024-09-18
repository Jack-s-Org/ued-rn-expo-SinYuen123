import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/image/statsBackground.png")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      ></ImageBackground>

      <Text style={[styles.font, { marginTop: 120 }]}>Hey,</Text>
      <Text style={styles.font}>Welcome Back</Text>

      <ImageBackground
        source={require("@/assets/image/EmailPanel.png")}
        style={[styles.EmailPanel, { marginTop: 70 }]}
      >
        <Image
          source={require("@/assets/image/EmailID.png")}
          style={styles.Email}
        />
      </ImageBackground>

      <ImageBackground
        source={require("@/assets/image/EmailPanel.png")}
        style={[styles.EmailPanel, { marginTop: 20 }]}
      >
        <Image
          source={require("@/assets/image/Password.png")}
          style={styles.Email}
        />
        <ImageBackground
          source={require("@/assets/image/Login.png")}
          style={styles.LoginButton}
        >
          <TouchableOpacity
            style={styles.NextButton}
            onPress={() => {
              navigation.replace("Main");
            }}
          >
            <Text style={styles.Button}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.font16}>Don’t have an account? Sign Up</Text>
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
  Email: {
    width: 130,
    height: 80,
    resizeMode: "contain",
    marginLeft: 14, // Remove margin to keep it at the left
    marginTop: -12,
  },
  EmailPanel: {
    width: "100%",
    height: 56,
    resizeMode: "cover",
    marginLeft: 0, // Remove margin to keep it at the left
    marginTop: 40,
  },
  Button: {
    color: "white",
    fontFamily: "FuturaPTDemi",
    fontSize: 20,
    marginTop: 16,
    textAlign: "center",
  },
  LoginButton: {
    width: 360,
    height: 56,
    marginTop: 40,
  },
  font16: {
    fontFamily: "FuturaPTDemi",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
  },
});

export default SignInScreen;
