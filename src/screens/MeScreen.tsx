import {
  IconAngleLeft,
  IconMenu,
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

type Props = {};

const COLOR_BASE = "#90e0ef";

function MeScreen({}: Props) {
  function goBack() {
    console.log("back");
  }

  return (
    <SafeAreaProvider>
      <ParallaxScroll
        // renderHeader={({ animatedValue }) => <Image source={imageDefault} />}
        headerHeight={50}
        isHeaderFixed={true}
        parallaxHeight={280}
        renderParallaxBackground={({ animatedValue }) => (
          <Image
            w="100%"
            resizeMode="cover"
            h="500"
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
        </ScrollView>
      </ParallaxScroll>
      <StatusBar
        // barStyle="light-content"
        // backgroundColor={COLOR_BASE}
        translucent
      />
    </SafeAreaProvider>
  );
}

export default MeScreen;
