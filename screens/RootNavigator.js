import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import Onboarding from "./Onboarding";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import PomodoroSetting from "./PomodoroSetting";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding" // Set initial screen to "Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="PomodoroSetting" component={PomodoroSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
