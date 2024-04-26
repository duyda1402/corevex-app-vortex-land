import MainAppView from "@/components/layouts/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import React from "react";

type Props = {};

function SwitchLanguageScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="Switch Language Screen" />
    </MainAppView>
  );
}

export default SwitchLanguageScreen;
