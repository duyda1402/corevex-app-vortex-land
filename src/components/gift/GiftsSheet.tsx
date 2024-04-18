import { userMockupB } from "@/commons/mockups/channels";
import { giftCategoriesMockup } from "@/commons/mockups/gift";
import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabView,
} from "react-native-tab-view";
import GiftRouters from "./GiftRouters";

type Props = {};

const user = userMockupB;
const giftCategories = giftCategoriesMockup;
function GiftsSheet({}: Props) {
  const layout = useWindowDimensions();
  const { colors } = useTheme();
  const [index, setIndex] = React.useState(1);

  const [routes] = React.useState(() => {
    const curRouter = [
      { key: "bag", title: "Bag" },
      { key: "popular", title: "Popular" },
    ];
    const category = giftCategories.map((i) => ({
      key: i.id,
      title: i.name,
    }));
    return curRouter.concat(category);
  });

  const COLOR_BASE_BG = colors.gray[100];

  return (
    <Actionsheet.Content bg={COLOR_BASE_BG} h={414}>
      <VStack>
        <TabView
          navigationState={{ index, routes }}
          renderTabBar={(props) => (
            <TabBarMainCustom bgColorMain={COLOR_BASE_BG} {...props} />
          )}
          renderScene={SceneMap({
            bag: () => <GiftRouters typeRouter="bag" />,
            popular: () => <GiftRouters typeRouter="popular" />,
            loveSpace: () => <GiftRouters typeRouter="loveSpace" />,
            vip: () => <GiftRouters typeRouter="vip" />,
          })}
          onIndexChange={setIndex}
          sceneContainerStyle={{ height: "auto" }}
          // lazy
          pagerStyle={{
            width: layout.width,
          }}
        />
        <HStack alignItems="center" justifyContent="space-between" px="3">
          <HStack space={2} alignItems="center">
            <Text color="gray.700" fontWeight="semibold">
              To
            </Text>
            <Avatar size="xs" source={{ uri: user.profile_url }} />
            <Text color="gray.700">{user.nickname}</Text>
          </HStack>
          <Button size="sm" rounded={99} colorScheme="rose">
            Send
          </Button>
        </HStack>
      </VStack>
    </Actionsheet.Content>
  );
}

export default GiftsSheet;

const TabBarMainCustom = (props: any) => {
  const { colors } = useTheme();
  return (
    <TabBar
      {...props}
      renderIndicator={(props) => <TabBarIndicatorCustom {...props} />}
      renderTabBarItem={(props) => <TabBarItemCustom {...props} />}
      activeColor="gray.700"
      inactiveColor="gray.300"
      contentContainerStyle={{
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
      }}
      style={{ backgroundColor: props.bgColorMain }}
      tabBarWidth={200}
      gap={4}
    />
  );
};

const TabBarItemCustom = (props: any) => {
  const { navigationState, route, activeColor, inactiveColor } = props;
  const focus =
    navigationState?.routes?.at(navigationState.index)?.key === route?.key;
  return (
    <Box px="2">
      <Text
        fontWeight="semibold"
        key={route.key}
        fontSize={focus ? "lg" : "sm"}
        color={focus ? activeColor : inactiveColor}
      >
        {route.title}
      </Text>
    </Box>
  );
};

const TabBarIndicatorCustom = (props: any) => {
  const { colors } = useTheme();
  return (
    <TabBarIndicator
      {...props}
      width={44}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.rose[500],
      }}
    />
  );
};
