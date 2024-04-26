import HeaderLayout from "@/components/layouts/HeaderLayout";
import MainAppView from "@/components/layouts/ViewMain";
import {
  HStack,
  ScrollView,
  Switch,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React from "react";

type Props = {};

const settings = [
  {
    id: "notifications",
    name: "Show Notifications",
  },
  {
    id: "sound",
    name: "Sound",
  },
  {
    id: "vibrate",
    name: "Vibrate",
  },
  {
    id: "request-invitation",
    name: "Receive Request Invitation",
  },
];

function MessageNotificationScreen({}: Props) {
  const { colors } = useTheme();
  return (
    <MainAppView bg={colors.gray[100]}>
      <HeaderLayout label="Notifications" />
      <ScrollView>
        <Text px="5" py="2">
          In-App Message Notifications
        </Text>
        <VStack space="3">
          {settings.map((m) => (
            <HStack
              key={m.id}
              bg="white"
              px="5"
              py="4"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text color="gray.600" fontWeight="semibold">
                {m.name}
              </Text>
              <Switch
                size="md"
                color="violet.500"
                offTrackColor="indigo.100"
                onTrackColor="indigo.200"
                onThumbColor="indigo.500"
                offThumbColor="indigo.50"
              />
            </HStack>
          ))}
        </VStack>
      </ScrollView>
    </MainAppView>
  );
}

export default MessageNotificationScreen;
