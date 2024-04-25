import GroupChannelList from "@/components/chatters/GroupChannelList";
import MainAppView from "@/components/layouts/ViewMain";
import { Box, Heading, ScrollView } from "native-base";
import React from "react";

type Props = {};

function ChannelListScreen({}: Props) {
  return (
    <MainAppView>
      <Box p="3">
        <Heading>Messages</Heading>
      </Box>
      <ScrollView>
        <GroupChannelList />
      </ScrollView>
    </MainAppView>
  );
}

export default ChannelListScreen;
