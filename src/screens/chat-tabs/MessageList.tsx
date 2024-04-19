import { userMockupDodyy } from "@/commons/mockups/channels";
import { HStack, VStack, Text, Avatar, Box, Stack } from "native-base";
import React from "react";

type Props = {
  messages: Array<any>;
};

//Mockup Data
const curUser = userMockupDodyy;
const messageMockupByAuth = {
  channel_type: "group",
  channel_url:
    "sendbird_group_channel_4ssf411068_2326cc40d54ee27f89a28ebf144503b2w2317a34",
  created_at: 1712893833869,
  custom_type: "",
  data: "",
  file: {},
  is_op_msg: false,
  is_removed: false,
  mention_type: "users",
  mentioned_users: [],
  message: "Hi pro!",
  message_events: {
    send_push_notification: "receivers",
    update_last_message: true,
    update_mention_count: true,
    update_unread_count: true,
  },
  message_id: 2178333722,
  message_retention_hour: -1,
  message_survival_seconds: -1,
  req_id: "rq-ba033f4f-3faf-414b-b50b-5e811f69bb58",
  silent: false,
  translations: {},
  type: "MESG",
  updated_at: 0,
  user: userMockupDodyy,
};

const messageMockupByAuth2 = {
  ...messageMockupByAuth,
  message_id: 2178333123,
  message: "Thank you",
};

function MessageList({ messages }: Props) {
  return (
    <VStack px="3" py="4" space="3">
      {[messageMockupByAuth, ...messages, messageMockupByAuth2].map(
        (message) => (
          <Stack
            key={message?.message_id}
            // space="4"
            direction={
              message?.user?.user_id !== curUser.user_id ? "row" : "row-reverse"
            }
          >
            <Avatar
              style={{ marginHorizontal: 10 }}
              size="md"
              source={{ uri: message?.user?.profile_url }}
            />
            <VStack space="2">
              {message?.user?.user_id !== curUser.user_id && (
                <Text color="gray.600" fontSize="xs">
                  {message?.user?.nickname}
                </Text>
              )}
              <Box
                bg={
                  message?.user?.user_id !== curUser.user_id
                    ? "white"
                    : "blue.200"
                }
                px="3"
                py="2"
                rounded="md"
              >
                <Text>{message?.message}</Text>
              </Box>
            </VStack>
          </Stack>
        )
      )}
    </VStack>
  );
}

export default MessageList;
