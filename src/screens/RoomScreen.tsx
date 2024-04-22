import MainAppView from "@/components/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import { ScrollView, Text } from "native-base";
import React from "react";

type Props = {};

function RoomScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="Room Screen" />
    </MainAppView>
  );
}

export default RoomScreen;
