import ViewMain from "@/components/ViewMain";
import { ScrollView, Text } from "native-base";
import React from "react";

type Props = {};

function ChatScreen({}: Props) {
  return (
    <ViewMain>
      <ScrollView>
        <Text>Chat Screen</Text>
      </ScrollView>
    </ViewMain>
  );
}

export default ChatScreen;
