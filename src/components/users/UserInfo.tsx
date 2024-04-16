import { avatarMockup, IconAngleRight } from "@/commons/assets";
import { Avatar, Box, HStack, Image, Stack, Text } from "native-base";
import React from "react";
type Props = {};

const user = {
  name: "Mì ❄️",
  id: "dodyy14",
  lv: 140,
};

function UserInfo({}: Props) {
  return (
    <HStack
      py="4"
      px="3"
      bg="blueGray.100"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack space={3} alignItems="center">
        <Avatar source={avatarMockup} size="lg" />
        <Stack>
          <Text fontWeight="semibold" fontSize="lg">
            {user.name}
          </Text>
          <Text color="gray.500">ID: {user.id}</Text>
          <HStack>
            <Box bg="violet.600" px="1" rounded="md">
              <Text fontSize="xs" color="white">
                Lv.{user.lv}
              </Text>
            </Box>
          </HStack>
        </Stack>
      </HStack>
      <Image
        w="4"
        h="4"
        source={IconAngleRight}
        alt="btn"
        style={{ tintColor: "gray" }}
      />
    </HStack>
  );
}
export default UserInfo;
