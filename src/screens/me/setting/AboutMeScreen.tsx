import MainAppView from "@/components/layouts/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import React from "react";

type Props = {};

function AboutMeScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="About Me Screen" />
    </MainAppView>
  );
}

export default AboutMeScreen;
