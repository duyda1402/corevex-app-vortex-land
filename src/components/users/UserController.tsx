import { Center, HStack } from "native-base";
import React from "react";

type Props = {};

const UserController = ({}: Props) => {
  return (
    <HStack px="4" mt="6" space={3} justifyContent="space-around">
      <Center h="20" w="20" bg="gray.300" rounded="md" shadow={2} />
      <Center h="20" w="20" bg="gray.500" rounded="md" shadow={2} />
      <Center h="20" w="20" bg="gray.700" rounded="md" shadow={2} />
      <Center h="20" w="20" bg="gray.700" rounded="md" shadow={2} />
    </HStack>
  );
};

export default UserController;
