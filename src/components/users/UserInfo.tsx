import { Avatar, HStack, Text, useTheme, VStack } from "native-base";
import React from "react";

type Props = {
  user: any;
};

function UserInfo({ user }: Props) {
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
      </VStack>
    </HStack>
  );
}
export default UserInfo;
