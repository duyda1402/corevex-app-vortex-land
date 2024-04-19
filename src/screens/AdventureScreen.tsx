import ViewMain from "@/components/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import { Text } from "native-base";
import React from "react";

type Props = {};

function AdventureScreen({}: Props) {
  return (
    <ViewMain>
      <ComingSoon feature="Adventure Screen" />
    </ViewMain>
  );
}

export default AdventureScreen;
