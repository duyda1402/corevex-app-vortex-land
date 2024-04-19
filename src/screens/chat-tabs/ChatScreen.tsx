import {
  iconAngleLeft,
  iconApps,
  iconGiftColor,
  iconMenuDots,
  iconMicrophone,
  iconX,
} from "@/commons/assets";
import { userMockupDodyy } from "@/commons/mockups/channels";
import GiftsSheet from "@/components/gift/GiftsSheet";
import WrapIcon from "@/components/wrapper/WrapIcon";
import ViewMain from "@/components/ViewMain";
import { getInfoChannel } from "@/untils";
import { useNavigation } from "@react-navigation/native";
import {
  Actionsheet,
  Center,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Stack,
  Text,
  useDisclose,
  useTheme,
} from "native-base";
import React, { useState } from "react";
import {
  Animated,
  Keyboard,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MessageList from "./MessageList";

type Props = {
  navigation: any;
  route: any;
};

//Mockup Data
const curUser = userMockupDodyy;

function ChatScreen({ route }: Props) {
  const { colors } = useTheme();
  const {
    isOpen: isAppMore,
    onOpen: onOpenAppMore,
    onClose: onCloseAppMore,
  } = useDisclose();
  const {
    isOpen: isOpenGift,
    onOpen: onOpenGift,
    onClose: onCloseGift,
  } = useDisclose();
  const navigation = useNavigation();

  // Info Channel
  const curChannel = route.params?.channel;
  const infoChannel = getInfoChannel(curChannel, curUser.user_id);
  const messages = [curChannel?.last_message];

  const [heightMenu] = useState(new Animated.Value(0));
  // console.log("curChannel 5555555555", curChannel);
  const toggleAppMoreMenu = () => {
    if (!isAppMore) {
      Animated.timing(heightMenu, {
        toValue: 220,
        duration: 200,
        useNativeDriver: false,
      }).start();
      onOpenAppMore();
      Keyboard.dismiss();
    } else {
      focusCloseAppMore();
    }
  };

  const focusCloseAppMore = () => {
    onCloseAppMore();
    Animated.timing(heightMenu, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const toggleGiftMenu = () => {
    Keyboard.dismiss();
    onCloseAppMore();
    focusCloseAppMore();
    return onOpenGift();
  };

  return (
    <ViewMain isInsetsBottom={true}>
      <HStack justifyContent="space-between" alignItems="center" py="3" px="5">
        <WrapIcon
          size="4"
          source={iconAngleLeft}
          alt="btn-back"
          onPress={() => navigation.goBack()}
        />
        <Text fontSize="md" fontWeight="semibold">
          {infoChannel.name}
        </Text>
        <WrapIcon size="4" source={iconMenuDots} alt="btn-menu" />
      </HStack>
      <ScrollView bg="gray.100">
        {!messages.length ? (
          <Center h="60">
            <Text fontSize="xs" color="gray.400">
              No Messages
            </Text>
          </Center>
        ) : (
          <MessageList messages={messages} />
        )}
      </ScrollView>
      {isAppMore && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={focusCloseAppMore}
          activeOpacity={1}
        />
      )}
      <KeyboardAvoidingView
        keyboardVerticalOffset={10}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Stack paddingX="4" paddingTop="3">
          <HStack
            space="3"
            alignItems="center"
            flexGrow={1}
            justifyContent="space-between"
          >
            <WrapIcon
              size="5"
              style={{ tintColor: colors.gray[600] }}
              source={iconMicrophone}
              alt="btn-mic"
            />
            {/* Input chat */}
            <Input
              isFocused={false}
              rounded={99}
              size="lg"
              maxW="2/3"
              bg="gray.100"
              onFocus={focusCloseAppMore}
              focusOutlineColor="gray.100"
              variant="filled"
            />
            <WrapIcon
              size="6"
              source={iconGiftColor}
              onPress={toggleGiftMenu}
              alt="btn-gift"
            />
            {isAppMore ? (
              <WrapIcon
                size="5"
                source={iconX}
                alt="btn-x-app-more"
                style={{ tintColor: colors.gray[600] }}
                onPress={toggleAppMoreMenu}
              />
            ) : (
              <WrapIcon
                size="5"
                source={iconApps}
                alt="btn-app-more"
                style={{ tintColor: colors.gray[600] }}
                onPress={toggleAppMoreMenu}
              />
            )}
          </HStack>
          {/* Screen Sheet Gift */}
          <Actionsheet isOpen={isOpenGift} onClose={onCloseGift}>
            <GiftsSheet
              usersTo={
                curChannel.members?.filter(
                  (m: any) => m?.user_id !== curUser.user_id
                ) || []
              }
            />
          </Actionsheet>
          <Animated.View style={{ height: heightMenu }}>
            {/* Screen App More*/}
            {isAppMore && (
              <ScrollView>
                <Text>More App</Text>
              </ScrollView>
            )}
          </Animated.View>
        </Stack>
      </KeyboardAvoidingView>
    </ViewMain>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
});
