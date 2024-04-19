import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "native-base";
import React from "react";

import { TabNameEnum } from "@/commons/enum/screens";
import {
  IconAdventure,
  IconChat,
  IconDiscover,
  IconMe,
  IconRoom,
} from "@/commons/assets";
import AdventureScreen from "./AdventureScreen";
import ChannelListScreen from "./chat-tabs/ChannelListScreen";
import DiscoverScreen from "./DiscoverScreen";
import MeScreen from "./MeScreen";
import RoomScreen from "./RoomScreen";
import WrapIcon from "@/components/wrapper/WrapIcon";
import WrapFastImg from "@/components/wrapper/WrapFastImg";

type Props = {};

const Tab = createBottomTabNavigator();

const COLOR_ACTIVE = "#4cc9f0";
const COLOR_INACTIVE = "#adb5bd";

const menuApp = [
  {
    name: TabNameEnum.BoardGameTab,
    label: "Adventure",
    sourceIcon: IconAdventure,
    component: AdventureScreen,
  },
  {
    name: TabNameEnum.RoomTab,
    label: "Room",
    sourceIcon: IconRoom,
    component: RoomScreen,
  },
  {
    name: TabNameEnum.ChannelTab,
    label: "Chat",
    sourceIcon: IconChat,
    component: ChannelListScreen,
  },
  {
    name: TabNameEnum.Discover,
    label: "Discover",
    sourceIcon: IconDiscover,
    component: DiscoverScreen,
  },
  {
    name: TabNameEnum.MeTab,
    label: "Me",
    sourceIcon: IconMe,
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
              <WrapFastImg
                alt={menu.label}
                source={menu.sourceIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLOR_ACTIVE : COLOR_INACTIVE,
                }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
