import { IconAngleLeft, IconMenu, imageDefault } from "@/commons/icons";
import { Image, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import ParallaxScrollView from "react-native-parallax-scroll-view";
import { StatusBar, StyleSheet, View } from "react-native";

type Props = {};

const COLOR_BASE = "#90e0ef";

function MeScreen({}: Props) {
  function goBack() {
    console.log("back");
  }

  return (
    <SafeAreaProvider>
      {/* <ParallaxScrollView
        backgroundColor="blue"
        contentBackgroundColor="pink"
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <View
            style={{
              height: 300,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={imageDefault} alt="hero" />
          </View>
        )}
      >
        <View style={{ height: 500 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView> */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLOR_BASE}
        translucent
      />
    </SafeAreaProvider>
  );
}

export default MeScreen;

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 24,
  },
  stretchContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
});
