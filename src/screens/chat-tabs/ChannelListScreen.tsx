import GroupChannelList from "@/components/chatters/GroupChannelList";
import ViewMain from "@/components/ViewMain";
import { Box, Heading, ScrollView, Text } from "native-base";
import React from "react";

type Props = {};

function ChannelListScreen({}: Props) {
  return (
    <ViewMain>
      <Box p="3">
        <Heading>Messages</Heading>
      </Box>
      <ScrollView>
        <GroupChannelList />
      </ScrollView>
    </ViewMain>
  );
}

export default ChannelListScreen;
