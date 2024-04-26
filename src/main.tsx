import RouterApp from "@/routers";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { NativeBaseProvider } from "native-base";
import { useEffect } from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import "expo-dev-client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./libs/store";
function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
      "ViewPropTypes will be removed from React Native",
      "We can not support a function callback. See Github Issues for details",
    ]);
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ReduxProvider store={store}>
          <RouterApp />
        </ReduxProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

registerRootComponent(App);
