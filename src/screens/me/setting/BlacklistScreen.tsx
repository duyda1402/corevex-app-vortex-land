import MainAppView from "@/components/layouts/ViewMain";
import ComingSoon from "@/components/views/ComingSoon";
import React from "react";

type Props = {};

function BlacklistScreen({}: Props) {
  return (
    <MainAppView>
      <ComingSoon feature="Blacklist Screen" />
    </MainAppView>
  );
}

export default BlacklistScreen;
