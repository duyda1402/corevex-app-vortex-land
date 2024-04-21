import { imageMockup } from "@/commons/assets";
import { userAuth } from "@/commons/mockups/auther";
import ParallaxHeaderScrollView from "@/components/ui/ParallaxHeaderScrollView";
import MenuSetting from "@/components/users/MenuSetting";
import UserController from "@/components/users/UserController";
import UserInfo from "@/components/users/UserInfo";
import WrapFastImg from "@/components/wrapper/WrapFastImg";
import { Avatar, Box, HStack, Text, useTheme, View } from "native-base";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FeatherIcon from "react-native-vector-icons/Feather";

type Props = {};

const IMG_HEIGHT = 330;

function MeScreen({}: Props) {
  const [me] = useState(userAuth);
  const { colors } = useTheme();

  return (
    <SafeAreaProvider>
      <ParallaxHeaderScrollView
        renderHeader={(props) => <HeaderCustom me={me} {...props} />}
        renderParallaxBackground={({ width, height }) => (
          <WrapFastImg
            source={imageMockup}
            alt="hero"
            style={{ width, height: height }}
            resizeMode="cover"
          />
        )}
        wrapperStyle={{ backgroundColor: colors.white }}
        isHeaderFixed={true}
        headerFixedBackgroundColor={colors.gray[100]}
        headerHeight={40}
        parallaxHeight={IMG_HEIGHT}
        wrapperContentStyle={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        <View>
          <Box marginTop={-10}>
            <UserInfo user={me} />
          </Box>

          <UserController />
          <MenuSetting />
          <MenuSetting />
        </View>
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
  me?: any;
}) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: !height
        ? 0
        : interpolate(
            animatedValue?.value,
            [0, height * 2, height * 3],
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

  console.log(iconColor);
  return (
    <View
      style={[
        {
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: insets.top,
          width: width,
        },
      ]}
    >
      <Animated.View style={[headerAnimatedStyle]}>
        <HStack space="3" alignItems="center">
          <Avatar size="sm" source={{ uri: me?.profile_url }} />
          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            {me?.nickname}
          </Text>
        </HStack>
      </Animated.View>
      <Animated.Text style={[iconColor]}>
        <FeatherIcon name="more-vertical" size={20} />
      </Animated.Text>
    </View>
  );
};
