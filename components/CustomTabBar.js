import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    // The view below is the container of your tab bar.
    // This is the place where you should assign stylings such as border radius and border color

    <ImageBackground
      source={require("@/assets/image/IconBar.png")}
      style={[styles.IconBar, styles.tabBar]}
    >
      {/* below is a loop on each of your Tab.Screen in MainScreen.js file */}
      {state.routes.map((route, index) => {
        const descriptor = descriptors[route.key];
        const { options } = descriptor;

        const isFocused = state.index === index;
        const color = isFocused
          ? options.tabBarActiveTintColor
          : options.tabBarInactiveTintColor;

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const labelText = label instanceof Function ? label() : label;

        const icon = options.tabBarIcon({ focused: isFocused, color });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Below is the component to render for each of the item in the tab bar e.g. icon and label
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {/* You should edit your UI for the item starting from here. Keep the TouchableOpacity the same */}
            {icon}
            {labelText && (
              <Text style={{ color: isFocused ? "#fff" : "#a0a0a0" }}>
                {labelText}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 10,
    left: 55,
    right: 0,
    flexDirection: "row",
    width: 250,
    height: 62,

    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  IconBar: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomTabBar;
