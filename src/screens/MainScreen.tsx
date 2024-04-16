import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "./HomeScreen";
import { Center, Image } from "native-base";
import { Text, View } from "react-native";
import { TabNameEnum } from "@/commons/enum/screens";
import AdventureScreen from "./AdventureScreen";
import RoomScreen from "./RoomScreen";
import ChatScreen from "./ChatScreen";
import DiscoverScreen from "./DiscoverScreen";
import MeScreen from "./MeScreen";

type Props = {};

const Tab = createBottomTabNavigator();

const COLOR_ACTIVE = "#4cc9f0";
const COLOR_INACTIVE = "#adb5bd";

const menuApp = [
  {
    name: TabNameEnum.BoardGameTab,
    label: "Adventure",
    sourceIcon: require("../../assets/icon/gamepad.png"),
    component: AdventureScreen,
  },
  {
    name: TabNameEnum.RoomTab,
    label: "Room",
    sourceIcon: require("../../assets/icon/couch.png"),
    component: RoomScreen,
  },
  {
    name: TabNameEnum.ChatTab,
    label: "Chat",
    sourceIcon: require("../../assets/icon/comments.png"),
    component: ChatScreen,
  },
  {
    name: TabNameEnum.Discover,
    label: "Discover",
    sourceIcon: require("../../assets/icon/discover.png"),
    component: DiscoverScreen,
  },
  {
    name: TabNameEnum.MeTab,
    label: "Me",
    sourceIcon: require("../../assets/icon/icon-me.png"),
    component: MeScreen,
  },
];

const MainScreen = ({}: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={TabNameEnum.BoardGameTab}
      screenOptions={{
        tabBarStyle: {
          height: 90,
          paddingRight: 6,
          paddingLeft: 6,
        },
      }}
    >
      {menuApp.map((menu) => (
        <Tab.Screen
          name={menu.name}
          key={menu.name}
          component={menu.component}
          options={{
            headerShown: false,
            title: menu.label,
            tabBarActiveTintColor: COLOR_ACTIVE,
            tabBarInactiveTintColor: COLOR_INACTIVE,
            tabBarIcon: ({ focused }) => (
              <Image
                alt="Vortex Land"
                source={menu.sourceIcon}
                w="6"
                h="6"
                style={{ tintColor: focused ? COLOR_ACTIVE : COLOR_INACTIVE }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
