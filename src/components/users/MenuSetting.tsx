import {
  iconBag,
  iconContribute,
  iconHeadphone,
  iconProfile,
  iconRatings,
  iconSetting,
} from "@/commons/assets";
import { HStack, Text, useTheme, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
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
  {
    title: "QR Code",
    id: "qr-code",
    iconLeft: iconSetting,
  },
];

function MenuSetting({}: Props) {
  const { colors } = useTheme();
  return (
    <VStack space="3">
      {menuMockup.map((item) => (
        <TouchableOpacity key={item.id}>
          <HStack
            alignItems="center"
            px="5"
            py="4"
            justifyContent="space-between"
          >
            <HStack alignItems="center" space="3">
              <Text fontSize="md" fontWeight="semibold" color="gray.600">
                {item.title}
              </Text>
            </HStack>

            <FeatherIcon
              name="chevron-right"
              size={20}
              color={colors.gray[500]}
            />
          </HStack>
        </TouchableOpacity>
      ))}
    </VStack>
  );
}

export default MenuSetting;
