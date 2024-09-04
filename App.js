import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    FuturaPTDemi: require("@/assets/font/FuturaPT-Demi.ttf"),
    FuturaPTBold: require("@/assets/font/FuturaPT-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
  return <RootNavigator />;
}
