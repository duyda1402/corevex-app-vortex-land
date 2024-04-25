import MainAppView from "@/components/layouts/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
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
