import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "./HomeScreen";
import StatScreen from "./StatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import CustomTabBar from "@/components/CustomTabBar";

import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import { Image, View, StyleSheet, ImageBackground } from "react-native";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              {/* Background Image for the Bar */}

              {/* Home Icon */}
              <Image
                source={require("@/assets/image/homeIcon1.png")}
                style={[
                  styles.icon,
                  { width: 44, height: 44, marginLeft: 20, marginTop: -8 },
                ]}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={StatScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              {/* Stats Icon */}
              <Image
                source={require("@/assets/image/statsIcon1.png")}
                style={[styles.icon, { width: 44, height: 44, marginTop: -8 }]}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="SettingsDrawer"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              {/* Profile Icon */}
              <Image
                source={require("@/assets/image/ProfileIcon1.png")}
                style={[
                  styles.icon,
                  { width: 44, height: 44, marginRight: 20, marginTop: -8 },
                ]}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconBar: {
    position: "absolute",
    width: "100%",
    height: "100%",
    marginBottom: 55,
    resizeMode: "contain",
    zIndex: -1, // Make sure the frame is behind the icons
  },
  icon: {
    resizeMode: "contain",
  },
});

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
