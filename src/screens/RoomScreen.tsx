import ViewMain from "@/components/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import { ScrollView, Text } from "native-base";
import React from "react";

type Props = {};

function RoomScreen({}: Props) {
  return (
    <ViewMain>
      <ComingSoon feature="Room Screen" />
    </ViewMain>
  );
}

export default RoomScreen;
