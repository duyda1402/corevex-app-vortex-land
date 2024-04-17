import {
  avatarMockup,
  IconAngleRight,
  IconRank10,
  IconRank11,
  IconRank9,
} from "@/commons/assets";
import { Avatar, Box, Flex, HStack, Image, Stack, Text } from "native-base";
import React from "react";
type Props = {};

const user = {
  name: "Mì ❄️",
  id: "dodyy14",
  rank: 99,
  gender: "male",
  address: "Ho Chi Minh City,Vietnam",
};

function UserInfo({}: Props) {
  return (
    <HStack
      py="4"
      px="4"
      bg="blueGray.100"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack space={3} alignItems="center">
        <Avatar source={avatarMockup} size="lg" />
        <Stack space={1}>
          <Text fontWeight="semibold" fontSize="lg">
            {user.name}
          </Text>
          <HStack space={1}>
            <Text color="gray.700" fontSize="xs">
              ID: {user.id}
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

          <HStack>
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
          </HStack>
        </Stack>
      </HStack>
      <Image
        w="3"
        h="3"
        source={IconAngleRight}
        alt="btn"
        style={{ tintColor: "gray" }}
      />
    </HStack>
  );
}
export default UserInfo;
