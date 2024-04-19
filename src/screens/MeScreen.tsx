import { BASE_APP_COLOR } from "@/commons";
import { imageMockup } from "@/commons/assets";
import MenuSetting from "@/components/users/MenuSetting";
import UserController from "@/components/users/UserController";
import UserInfo from "@/components/users/UserInfo";
import WrapFastImg from "@/components/wrapper/WrapFastImg";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";
import { HStack, useDisclose, useTheme, View, Text } from "native-base";
import React, { useRef, useState } from "react";
import { StatusBar, Animated } from "react-native";
// import Animated, {
//   interpolate,
//   useAnimatedRef,
//   useAnimatedStyle,
//   useScrollViewOffset,
// } from "react-native-reanimated";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FeatherIcon from "react-native-vector-icons/Feather";

type Props = {};

const IMG_HEIGHT = 480;

function MeScreen({}: Props) {
  const [me] = useState({
    name: "Mì ❄️",
    id: "dodyy14",
    rank: 99,
    gender: "male",
    address: "Ho Chi Minh City,Vietnam",
  });
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ParallaxScroll>();
  // const scrollOfSet = useScrollViewOffset(scrollRef);
  const {
    isOpen: isFixedTop,
    onOpen: onOpenFixedTop,
    onClose: onCloseFixedTop,
  } = useDisclose();

  // const headerAnimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     tintColor: interpolate(
  //       scrollOfSet.value,
  //       [IMG_HEIGHT / 2, colors.white],
  //       [0, colors.white]
  //     ),
  //   };
  // });

  return (
    <SafeAreaProvider style={{ backgroundColor: BASE_APP_COLOR }}>
      <ParallaxScroll
        innerRef={scrollRef}
        renderHeader={(props: any) => {
          return (
            <Animated.View
              style={[
                {
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingLeft: 16,
                  paddingRight: 16,
                  marginTop: insets.top,
                },
                // headerAnimatedStyle,
              ]}
            >
              <FeatherIcon
                name="menu"
                size={20}
                color={isFixedTop ? colors.gray[600] : colors.white}
              />
              {isFixedTop && (
                <Text
                  color={colors.gray[600]}
                  fontSize="md"
                  fontWeight="semibold"
                >
                  {me.name}
                </Text>
              )}
              <FeatherIcon
                name="more-vertical"
                size={20}
                color={isFixedTop ? colors.gray[600] : colors.white}
              />
            </Animated.View>
          );
        }}
        onChangeHeaderVisibility={() => console.log("change header visibility")}
        headerFixedBackgroundColor={colors.gray[100]}
        onHeaderFixed={onOpenFixedTop}
        headerHeight={insets.top + 36}
        isHeaderFixed={true}
        parallaxHeight={280}
        renderParallaxBackground={({}) => (
          <WrapFastImg
            resizeMode="cover"
            style={{
              width: "100%",
              height: IMG_HEIGHT,
            }}
            source={imageMockup}
            alt="hero"
          />
        )}
        parallaxBackgroundScrollSpeed={5}
        backgroundScaleOrigin="top"
      >
        <View
          bg="white"
          style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        >
          <UserInfo user={me} />
          <UserController />
          <MenuSetting />
        </View>
      </ParallaxScroll>
      <StatusBar translucent />
    </SafeAreaProvider>
  );
}

export default MeScreen;
