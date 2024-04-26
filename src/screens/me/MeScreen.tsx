import { avatarDefault } from "@/commons/assets";
import { ScreenNameEnum } from "@/commons/enum/screens";
import { NavigationCustomProps, UserInfo } from "@/commons/types";
import IconBackpack from "@/components/icon-system/IconBackpack";
import IconCalendarCheck from "@/components/icon-system/IconCalendarCheck";
import IconCrown from "@/components/icon-system/IconCrown";

import IconGem from "@/components/icon-system/IconGem";
import IconHomeHeart from "@/components/icon-system/IconHomeHeart";
import IconPeopleRoof from "@/components/icon-system/IconPeopleRoof";
import IconRocketLunch from "@/components/icon-system/IconRocketLunch";
import IconSearchHeart from "@/components/icon-system/IconSearchHeart";
import ActionIcon from "@/components/ui/ActionIcon";
import ParallaxHeaderScrollView from "@/components/ui/ParallaxHeaderScrollView";
import MenuSetting from "@/components/users/MenuSetting";
import PersonalController from "@/components/users/PersonalController";
import PersonalHero from "@/components/users/PersonalHero";
import PersonalWallet from "@/components/users/PersonalWallet";
import WrapFastImg from "@/components/wrapper/WrapFastImg";
import { RootState } from "@/libs/store";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, HStack, Text, useTheme, View, VStack } from "native-base";
import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

type Props = {};

const IMG_HEIGHT = 330;

function MeScreen({}: Props) {
  const me = useSelector((state: RootState) => state.auth.me);
  const { colors } = useTheme();
  const menuPersonal = [
    {
      id: "backpack",
      label: "Backpack",
      icon: <IconBackpack color={colors.gray[700]} size={20} />,
    },
    {
      id: "friendship",
      label: "Friendship",
      icon: <IconHomeHeart color={colors.gray[700]} size={20} />,
    },
    {
      id: "check-in",
      label: "Check In",
      icon: <IconCalendarCheck color={colors.gray[700]} size={20} />,
    },
    {
      id: "level",
      label: "Level",
      icon: <IconRocketLunch color={colors.gray[700]} size={20} />,
      router: ScreenNameEnum.LevelScreen,
    },
  ];

  const menuPrivileges = [
    {
      id: "noble",
      label: "Noble",
      icon: <IconCrown color={colors.gray[700]} size={20} />,
    },
    {
      id: "vip",
      label: "VIP",
      icon: <IconGem color={colors.gray[700]} size={20} />,
    },
    {
      id: "family",
      label: "Family",
      icon: <IconPeopleRoof color={colors.gray[700]} size={20} />,
    },
    {
      id: "guest",
      label: "Guest",
      icon: <IconSearchHeart color={colors.gray[700]} size={20} />,
    },
  ];

  return (
    <SafeAreaProvider>
      <ParallaxHeaderScrollView
        renderHeader={(props) => <HeaderCustom me={me} {...props} />}
        renderParallaxBackground={({ width, height }) => (
          <WrapFastImg
            source={me?.picture ? { uri: me.picture } : avatarDefault}
            alt="hero"
            style={{ width, height: height }}
            resizeMode="cover"
          />
        )}
        wrapperStyle={{ backgroundColor: colors.white }}
        isHeaderFixed={true}
        headerFixedBackgroundColor={colors.gray[100]}
        headerHeight={44}
        parallaxHeight={IMG_HEIGHT}
        wrapperContentStyle={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        nestedScrollEnabled={true}
      >
        <VStack space="4">
          <Box marginTop={-5}>
            <PersonalHero me={me} />
          </Box>
          <PersonalWallet />
          <PersonalController
            menu={menuPersonal}
            title="Personal"
            isBackground
          />
          <PersonalController menu={menuPrivileges} title="Privileges" />
          <MenuSetting />
        </VStack>
      </ParallaxHeaderScrollView>

      <StatusBar translucent />
    </SafeAreaProvider>
  );
}

export default MeScreen;

const HeaderCustom = ({
  width,
  height,
  animatedValue,
  me,
}: {
  width?: number;
  height?: number;
  animatedValue?: SharedValue<any>;
  me?: UserInfo | null;
}) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationCustomProps>();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: !height
        ? 0
        : interpolate(
            animatedValue?.value,
            [0, height * 3.99, height * 4],
            [0, 0, 1]
          ),
    };
  });

  const iconColor = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        animatedValue?.value,
        [0, Number(height ?? 0) * 2],
        [colors.white, colors.gray[600]]
      ),
    };
  }, []);

  return (
    <View
      style={[
        {
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: insets.top + 6,
          width: width,
        },
      ]}
    >
      <Animated.View style={[headerAnimatedStyle]}>
        <HStack space="3" alignItems="center">
          <Avatar
            size="sm"
            source={me?.picture ? { uri: me?.picture } : avatarDefault}
          />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {me?.nickname}
          </Text>
        </HStack>
      </Animated.View>
      <HStack space="3">
        <TouchableOpacity onPress={() => alert("Scan")}>
          <Animated.Text style={[iconColor]}>
            <Ionicons name="scan" size={24} />
          </Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Shop")}>
          <Animated.Text style={[iconColor]}>
            <Ionicons name="storefront-outline" size={24} />
          </Animated.Text>
        </TouchableOpacity>
        <ActionIcon
          onPress={() => navigation.navigate(ScreenNameEnum.SettingAuthScreen)}
        >
          <Animated.Text style={[iconColor]}>
            <Ionicons name="settings-outline" size={24} />
          </Animated.Text>
        </ActionIcon>
      </HStack>
    </View>
  );
};
