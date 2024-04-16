import RouterApp from "@/routers";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Box } from "native-base";
import { useEffect } from "react";
import { LogBox } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MainScreen from "@/screens/MainScreen";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
      "expo-app-loading is deprecated in favor of expo-splash-screen",
    ]);
  }, []);

  const [fontsLoaded] = useFonts({
    Platypi: require("./assets/fonts/platypi/Platypi-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <RouterApp />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
