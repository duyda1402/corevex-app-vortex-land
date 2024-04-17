import { ChannelType } from "@/commons/enum/channel";
import { channelsMockup, userMockupDodyy } from "@/commons/mockups/channels";
import { formatRelativeTime, getInfoChannel } from "@/untils";
import { Avatar, HStack, VStack, Text } from "native-base";
import React from "react";
import { Dimensions, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNameEnum } from "@/commons/enum/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/commons/types/root-stack";

type Props = {};
//Mockup Data
const channelList = channelsMockup;
const curUser = userMockupDodyy;

function GroupChannelList({}: Props) {
  return (
    <VStack space="4">
      {channelList.map((channel) => (
        <React.Fragment key={channel.channel_url}>
          <GroupChannelItem channel={channel} curUser={curUser} />
        </React.Fragment>
      ))}
    </VStack>
  );
}

export default GroupChannelList;

type GroupChannelItemProps = {
  channel: any;
  curUser: any;
};

const GroupChannelItem = ({ channel, curUser }: GroupChannelItemProps) => {
  const windowWidth = Dimensions.get("window").width;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToScreenChat = () => {
    return navigation.navigate(ScreenNameEnum.ChatScreen, {
      channel: channel,
    });
  };

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => goToScreenChat()}
    >
      <HStack
        space="3"
        alignItems="center"
        style={{ width: windowWidth }}
        px="5"
        py="2"
      >
        <Avatar
          source={{
            uri: getInfoChannel(channel, curUser?.user_id).imgCover,
          }}
        />
        <VStack space="0.5" flexGrow={1} flexShrink={1}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontWeight="semibold" color="gray.700" maxW="3/4" isTruncated>
              {getInfoChannel(channel, curUser?.user_id).name}
            </Text>
            <Text fontSize="xs" color="gray.400">
              {formatRelativeTime(channel?.last_message?.created_at)}
            </Text>
          </HStack>
          <Text color="gray.400" isTruncated>
            {channel.last_message?.message?.replace(/\n/g, " ")}
          </Text>
        </VStack>
      </HStack>
    </TouchableHighlight>
  );
};
