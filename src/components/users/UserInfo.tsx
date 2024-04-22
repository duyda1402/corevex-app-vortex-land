import { avatarMockup } from "@/commons/assets";
import { Avatar, HStack, Text, useTheme, VStack } from "native-base";
import React from "react";

type Props = {
  user: any;
};

function UserInfo({ user }: Props) {
  const { colors } = useTheme();
  return (
    <HStack
      style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      py="4"
      px="4"
      bg="gray.100"
      alignItems="center"
      justifyContent="center"
    >
      <VStack space={3} alignItems="center">
        <Avatar source={{ uri: user.profile_url }} size="xl" mt="5" />

        <Text fontWeight="semibold" fontSize="lg">
          {user.nickname}
        </Text>
        <HStack space={1}>
          <Text color="gray.700" fontSize="xs">
            ID: {user.user_id}
          </Text>
          <Text color="gray.300" fontSize="xs">
            |
          </Text>
          <Text color="gray.700" fontSize="sm" fontWeight="bold">
            {user.gender === "male" ? "♂" : "♀"}
          </Text>
          <Text color="gray.300" fontSize="xs">
            |
          </Text>
          <Text color="gray.700" fontSize="xs">
            {user.address}
          </Text>
        </HStack>

        {/* <HStack>
            <HStack
              space="0.5"
              bg="violet.700"
              px="1"
              rounded="sm"
              alignItems="center"
            >
              <Image w="3.5" h="3.5" source={IconRank11} alt="rank" />
              <Text fontSize="xs" color="white" fontWeight="bold">
                {user.rank}
              </Text>
            </HStack>
          </HStack> */}
      </VStack>
      {/* <FeatherIcon name="chevron-right" size={20} color={colors.gray[500]} /> */}
    </HStack>
  );
}
export default UserInfo;
