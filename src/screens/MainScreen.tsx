import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar } from "native-base";
import React from "react";

import { TabNameEnum } from "@/commons/enum/screens";
import { userAuth } from "@/commons/mockups/auther";
import IconCommentDots from "@/components/icon-system/IconCommentDots";
import IconCouch from "@/components/icon-system/IconCouch";
import IconGamePad from "@/components/icon-system/IconGamePad";
import IconWishlistHeart from "@/components/icon-system/IconWishlistHeart";
import AdventureScreen from "./AdventureScreen";
import ChannelListScreen from "./chat-tabs/ChannelListScreen";
import DiscoverScreen from "./DiscoverScreen";
import MeScreen from "./MeScreen";
import RoomScreen from "./RoomScreen";

type Props = {};

const Tab = createBottomTabNavigator();

const COLOR_ACTIVE = "#4cc9f0";
const COLOR_INACTIVE = "#adb5bd";

const menuApp = [
  {
    name: TabNameEnum.BoardGameTab,
    label: "Adventure",
    sourceIcon: ({ focused }: { focused: boolean }) => (
      <IconGamePad size={24} color={focused ? COLOR_ACTIVE : COLOR_INACTIVE} />
    ),
    component: AdventureScreen,
  },
  {
    name: TabNameEnum.RoomTab,
    label: "Party",
    sourceIcon: ({ focused }: { focused: boolean }) => (
      <IconCouch size={24} color={focused ? COLOR_ACTIVE : COLOR_INACTIVE} />
    ),
    component: RoomScreen,
  },
  {
    name: TabNameEnum.ChannelTab,
    label: "Chat",
    sourceIcon: ({ focused }: { focused: boolean }) => (
      <IconCommentDots
        size={24}
        color={focused ? COLOR_ACTIVE : COLOR_INACTIVE}
      />
    ),
    component: ChannelListScreen,
  },
  {
    name: TabNameEnum.Discover,
    label: "Discover",
    sourceIcon: ({ focused }: { focused: boolean }) => (
      <IconWishlistHeart
        size={24}
        color={focused ? COLOR_ACTIVE : COLOR_INACTIVE}
      />
    ),
    component: DiscoverScreen,
  },
  {
    name: TabNameEnum.MeTab,
    label: "Me",
    sourceIcon: ({ focused }: { focused: boolean }) => (
      <Avatar
        borderColor={focused ? COLOR_ACTIVE : COLOR_INACTIVE}
        borderWidth={2}
        source={{ uri: userAuth.profile_url }}
        size="sm"
      />
    ),
    component: MeScreen,
  },
];

const MainScreen = ({}: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={TabNameEnum.BoardGameTab}
      screenOptions={{
        tabBarStyle: {
          height: 60,
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
            tabBarIcon: ({ focused }) => menu.sourceIcon({ focused }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
