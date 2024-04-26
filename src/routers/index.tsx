import { ScreenNameEnum } from "@/commons/enum/screens";
import ChatScreen from "@/screens/chat-tabs/ChatScreen";
import LevelScreen from "@/screens/LevelScreen";
import LoginScreen from "@/screens/LoginScreen";
import MainScreen from "@/screens/MainScreen";
import AboutMeScreen from "@/screens/me/setting/AboutMeScreen";
import AccountManagerScreen from "@/screens/me/setting/AccountManagerScreen";
import BlacklistScreen from "@/screens/me/setting/BlacklistScreen";
import MessageNotificationScreen from "@/screens/me/setting/MessageNotificationScreen";
import PrivacyScreen from "@/screens/me/setting/PrivacyScreen";
import SettingAuthScreen from "@/screens/me/setting/SettingAuthScreen";
import SwitchLanguageScreen from "@/screens/me/setting/SwitchLanguageScreen";
import WelcomeScreen from "@/screens/WelcomeScreen";
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
      <Stack.Screen
        name={ScreenNameEnum.ChatScreen}
        options={{ headerShown: false }}
        component={ChatScreen}
      />
      <Stack.Screen
        name={ScreenNameEnum.LevelScreen}
        options={{ headerShown: false }}
        component={LevelScreen}
      />
      <Stack.Screen
        name={ScreenNameEnum.WelcomeScreen}
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />

      {/* Setting */}
      <Stack.Screen
        name={ScreenNameEnum.SettingAuthScreen}
        component={SettingAuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.AccountManagerScreen}
        component={AccountManagerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.MessageNotificationScreen}
        component={MessageNotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.PrivacyScreen}
        component={PrivacyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.BlacklistScreen}
        component={BlacklistScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.SwitchLanguageScreen}
        component={SwitchLanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNameEnum.AboutMeScreen}
        component={AboutMeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default RouterApp;
