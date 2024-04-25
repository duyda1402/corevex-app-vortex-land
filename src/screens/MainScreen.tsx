import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, useTheme } from "native-base";
import React, { useEffect, useState } from "react";
import { TabNameEnum } from "@/commons/enum/screens";
import { UserInfo } from "@/commons/types";
import IconCommentDots from "@/components/icon-system/IconCommentDots";
import IconCouch from "@/components/icon-system/IconCouch";
import IconGamePad from "@/components/icon-system/IconGamePad";
import IconWishlistHeart from "@/components/icon-system/IconWishlistHeart";
import { apiGetMe } from "@/libs/api";
import { actionSetMe, RootState } from "@/libs/store";
import { useDispatch, useSelector } from "react-redux";
import AdventureScreen from "./AdventureScreen";
import ChannelListScreen from "./chat-tabs/ChannelListScreen";
import DiscoverScreen from "./DiscoverScreen";
import MeScreen from "./MeScreen";
import RoomScreen from "./RoomScreen";
import OverlayLoading from "@/components/ui/OverlayLoading";

type Props = {};

const Tab = createBottomTabNavigator();

const COLOR_ACTIVE = "#4cc9f0";
const COLOR_INACTIVE = "#adb5bd";

const MainScreen = ({}: Props) => {
  const [screenIsReady, setScreenIsReady] = useState(false);
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.auth.me);
  useEffect(() => {
    apiGetMe()
      .then((me: UserInfo | null) => {
        dispatch(actionSetMe(me));
      })
      .finally(() => setScreenIsReady(true));
  }, []);

  const menuApp = [
    {
      name: TabNameEnum.BoardGameTab,
      label: "Adventure",
      sourceIcon: ({ focused }: { focused: boolean }) => (
        <IconGamePad
          size={24}
          color={focused ? COLOR_ACTIVE : COLOR_INACTIVE}
        />
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
          source={{ uri: me?.picture || "" }}
          size="sm"
        />
      ),
      component: MeScreen,
    },
  ];

  return (
    <React.Fragment>
      {!screenIsReady ? (
        <OverlayLoading loading={!screenIsReady} />
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default MainScreen;
