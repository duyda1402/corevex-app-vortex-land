import ViewMain from "@/components/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import { Text } from "native-base";
import React from "react";
import { Platform, StyleSheet } from "react-native";

type Props = {};

function DiscoverScreen({}: Props) {
  return (
    <ViewMain>
      <ComingSoon feature="Discover Screen" />
    </ViewMain>
  );
}

export default DiscoverScreen;
