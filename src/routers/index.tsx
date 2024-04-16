import { ScreenNameEnum } from "@/commons/enum/screens";
import HomeScreen from "@/screens/HomeScreen";
import LoginScreen from "@/screens/LoginScreen";
import MainScreen from "@/screens/MainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function RouterApp() {
  return (
    <Stack.Navigator initialRouteName={ScreenNameEnum.LoginScreen}>
      <Stack.Screen
        name={ScreenNameEnum.MainScreen}
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.LoginScreen}
        options={{ headerShown: false }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
export default RouterApp;
