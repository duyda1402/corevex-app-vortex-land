import {
  iconAngleLeft,
  iconMenu,
  imageDefault,
  imageMockup,
} from "@/commons/assets";
import { Image, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";
import { StatusBar, StyleSheet, View } from "react-native";
import UserInfo from "@/components/users/UserInfo";
import UserController from "@/components/users/UserController";
import { BASE_APP_COLOR } from "@/commons";
import WrapFastImg from "@/components/wrapper/WrapFastImg";
import MenuSetting from "@/components/users/MenuSetting";

type Props = {};

function MeScreen({}: Props) {
  function goBack() {
    console.log("back");
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: BASE_APP_COLOR }}>
      <ParallaxScroll
        // renderHeader={({ animatedValue }) => <Image source={imageDefault} />}
        headerHeight={50}
        isHeaderFixed={true}
        parallaxHeight={280}
        renderParallaxBackground={({}) => (
          <WrapFastImg
            resizeMode="cover"
            style={{
              width: "100%",
              height: 480,
            }}
            source={imageMockup}
            alt="hero"
          />
        )}
        // renderParallaxForeground={({ animatedValue }) => (
        //   <Image source={imageDefault} alt="hero" />
        // )}
        parallaxBackgroundScrollSpeed={5}
        parallaxForegroundScrollSpeed={2.5}
      >
        <ScrollView
          bg="white"
          style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        >
          <UserInfo />
          <UserController />
          <MenuSetting />
        </ScrollView>
      </ParallaxScroll>
      <StatusBar translucent />
    </SafeAreaProvider>
  );
}

export default MeScreen;
