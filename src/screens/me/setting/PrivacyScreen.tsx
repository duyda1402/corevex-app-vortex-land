import MainAppView from "@/components/layouts/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import React from "react";

type Props = {};

function PrivacyScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="Privacy Screen" />
    </MainAppView>
  );
}

export default PrivacyScreen;
