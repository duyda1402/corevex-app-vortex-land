import {
  iconAngleLeft,
  iconApps,
  iconGiftColor,
  iconMenuDots,
  iconMicrophone,
} from "@/commons/assets";
import { channelsMockup, userMockupDodyy } from "@/commons/mockups/channels";
import WrapIcon from "@/components/icons/WrapIcon";
import ViewMain from "@/components/ViewMain";
import { getInfoChannel } from "@/untils";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  Heading,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Animated, Dimensions, Keyboard, Platform } from "react-native";

type Props = {
  navigation: any;
  route: any;
};

//Mockup Data
const curUser = userMockupDodyy;

function ChatScreen({ route }: Props) {
  const windowHight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const curChannel = route.params?.channel;
  const infoChannel = getInfoChannel(curChannel, curUser.user_id);
  const messages = [];
  const [paddingBottom] = useState(new Animated.Value(40));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () =>
        Animated.timing(paddingBottom, {
          toValue: 10,
          duration: 200,
          useNativeDriver: false,
        }).start()
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () =>
        Animated.timing(paddingBottom, {
          toValue: 32,
          duration: 200,
          useNativeDriver: false,
        }).start()
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      h={{
        base: windowHight,
        lg: "auto",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ViewMain isInsetsBottom={false}>
        <HStack justifyContent="space-between" alignItems="center" p="4">
          <WrapIcon
            size="4"
            source={iconAngleLeft}
            alt="btn-back"
            onPress={() => navigation.goBack()}
          />
          <Text fontSize="lg" fontWeight="semibold">
            {infoChannel.name}
          </Text>
          <WrapIcon size="4" source={iconMenuDots} alt="btn-menu" />
        </HStack>
        <ScrollView bg="gray.100">
          {!messages.length && (
            <Center h="60">
              <Text fontSize="xs" color="gray.400">
                No Messages
              </Text>
            </Center>
          )}
        </ScrollView>
        <Animated.View
          style={{
            paddingRight: 14,
            paddingLeft: 14,
            paddingTop: 10,
            paddingBottom,
          }}
        >
          <HStack
            space="3"
            alignItems="center"
            flexGrow={1}
            justifyContent="space-between"
          >
            <WrapIcon size="5" source={iconMicrophone} alt="btn-mic" />
            <Input
              isFocused={false}
              rounded={99}
              size="lg"
              maxW="2/3"
              bg="gray.100"
              focusOutlineColor="gray.100"
              variant="filled"
            />
            <WrapIcon size="6" source={iconGiftColor} alt="btn-gift" />
            <WrapIcon size="5" source={iconApps} alt="btn-app-more" />
          </HStack>
        </Animated.View>
      </ViewMain>
    </KeyboardAvoidingView>
  );
}

export default ChatScreen;
