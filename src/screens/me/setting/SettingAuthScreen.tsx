import { KEY_ACCESS_TOKEN, ScreenNameEnum } from "@/commons";
import { NavigationCustomProps } from "@/commons/types";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import MainAppView from "@/components/layouts/ViewMain";
import { useNavigation } from "@react-navigation/native";
import { HStack, ScrollView, useTheme, VStack, Text } from "native-base";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalHandlerLoading from "@/components/layouts/modal/ModalHandlerLoading";
import ActionIcon from "@/components/ui/ActionIcon";
import FeatherIcon from "react-native-vector-icons/Feather";

type Props = {};

const menu = [
  {
    id: "link-account",
    name: "Link Account",
    router: ScreenNameEnum.AccountManagerScreen,
    action: "navigate",
  },
  {
    id: "message-notifications",
    name: "Message Notification",
    router: ScreenNameEnum.MessageNotificationScreen,
    action: "navigate",
  },
  {
    id: "privacy",
    name: "Privacy",
    router: ScreenNameEnum.PrivacyScreen,
    action: "navigate",
  },
  {
    id: "blacklist",
    name: "Blacklist",
    router: ScreenNameEnum.BlacklistScreen,
    action: "navigate",
  },
  {
    id: "switch-language",
    name: "Switch Language",
    router: ScreenNameEnum.SwitchLanguageScreen,
    action: "navigate",
  },
  {
    id: "about",
    name: "About Me",
    description: "V 1.0.1",
    router: ScreenNameEnum.AboutMeScreen,
    action: "navigate",
  },
  {
    id: "logout",
    name: "Logout",
    action: "logout",
  },
];

function SettingAuthScreen({}: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationCustomProps>();
  const [loading, setLoading] = useState(false);

  const onLogoutAccount = async () => {
    setLoading(() => true);
    try {
      await auth().signOut();
      await AsyncStorage.removeItem(KEY_ACCESS_TOKEN);
      return navigation.replace(ScreenNameEnum.LoginScreen);
    } catch (error: any) {
      alert(error?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const onFuncPress = (
    action: string,
    payload?: { router?: ScreenNameEnum }
  ) => {
    switch (action) {
      case "logout":
        return onLogoutAccount();
      default:
        if (payload?.router) navigation.navigate(payload.router);
        return;
    }
  };

  return (
    <MainAppView bg={colors.gray[100]}>
      <HeaderLayout label="Settings" />
      <ScrollView>
        <ModalHandlerLoading loading={loading} title="Please wait..." />
        <VStack space="3" my="4">
          {menu.map((m) => (
            <ActionIcon
              key={m.id}
              onPress={() => onFuncPress(m.action, { router: m?.router })}
            >
              <HStack
                bg="white"
                px="5"
                py="4"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text color="gray.600" fontWeight="semibold">
                  {m.name}
                </Text>
                <HStack alignItems="center" space="2">
                  <Text color="gray.400" fontSize="xs">
                    {m?.description}
                  </Text>
                  <FeatherIcon
                    name="chevron-right"
                    size={18}
                    color={colors.gray[400]}
                  />
                </HStack>
              </HStack>
            </ActionIcon>
          ))}
        </VStack>
      </ScrollView>
    </MainAppView>
  );
}

export default SettingAuthScreen;
