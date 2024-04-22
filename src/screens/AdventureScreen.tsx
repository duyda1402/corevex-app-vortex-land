import MainAppView from "@/components/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import { Text } from "native-base";
import React from "react";

type Props = {};

function AdventureScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="Adventure Screen" />
    </MainAppView>
  );
}

export default AdventureScreen;
