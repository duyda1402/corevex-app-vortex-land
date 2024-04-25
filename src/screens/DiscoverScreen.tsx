import MainAppView from "@/components/layouts/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import { Text } from "native-base";
import React from "react";
import { Platform, StyleSheet } from "react-native";

type Props = {};

function DiscoverScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="Discover Screen" />
    </MainAppView>
  );
}

export default DiscoverScreen;
