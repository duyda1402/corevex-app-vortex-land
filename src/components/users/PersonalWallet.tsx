import { Box, Center, HStack, Text, useTheme, VStack } from "native-base";
import React from "react";
import WrapIcon from "../wrapper/WrapIcon";
import { iconCoinBase, iconDiamondBase } from "@/commons/assets";

type Props = {};

function PersonalWallet({}: Props) {
  return (
    <HStack space={3} justifyContent="center">
      <VStack shadow="1" px="3" py="2" bg="white" rounded="lg" w="1/3">
        <Text fontSize="md" fontWeight="semibold" color="gray.500">
          Wallet
        </Text>
        <HStack space="1.5" alignItems="center">
          <WrapIcon source={iconDiamondBase} size="5" />
          <Text fontWeight="semibold">9995</Text>
        </HStack>
      </VStack>
      <VStack shadow="1" px="3" py="2" bg="white" rounded="lg" w="1/3">
        <Text fontSize="md" fontWeight="semibold" color="gray.500">
          Task Center
        </Text>
        <HStack space="1.5" alignItems="center">
          <WrapIcon source={iconCoinBase} size="5" />
          <Text fontWeight="semibold">1M</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default PersonalWallet;
