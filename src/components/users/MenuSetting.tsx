import {
  iconAngleRight,
  iconBag,
  iconContribute,
  iconHeadphone,
  iconProfile,
  iconRatings,
  iconSetting,
} from "@/commons/assets";
import { Box, FlatList, HStack, Text } from "native-base";
import React from "react";
import WrapIcon from "../wrapper/WrapIcon";
import { TouchableHighlight, TouchableOpacity } from "react-native";
type Props = {};

const menuMockup = [
  {
    title: "My Profile",
    id: "profile",
    iconLeft: iconProfile,
  },
  {
    title: "My Rank",
    id: "rank",
    iconLeft: iconRatings,
  },
  {
    title: "My bag",
    id: "bag",
    iconLeft: iconBag,
  },
  {
    title: "Contribute topics",
    id: "contribute-topics",
    iconLeft: iconContribute,
  },
  {
    title: "Customer support and care",
    id: "support-customer",
    iconLeft: iconHeadphone,
  },
  {
    title: "Setting",
    id: "setting",
    iconLeft: iconSetting,
  },
];

function MenuSetting({}: Props) {
  return (
    <Box mt="4">
      <FlatList
        data={menuMockup}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <HStack
              alignItems="center"
              px="5"
              py="4"
              justifyContent="space-between"
            >
              <HStack alignItems="center" space="3">
                <WrapIcon size="8" source={item.iconLeft} alt="btn-right" />
                <Text fontSize="md" fontWeight="semibold" color="gray.600">
                  {item.title}
                </Text>
              </HStack>

              <WrapIcon size="3" source={iconAngleRight} alt="btn-right" />
            </HStack>
          </TouchableOpacity>
        )}
      />
    </Box>
  );
}

export default MenuSetting;
