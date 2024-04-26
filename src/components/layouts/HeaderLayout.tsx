import { NavigationCustomProps } from "@/commons/types";
import { useNavigation } from "@react-navigation/native";
import { HStack, useTheme, Text, Box } from "native-base";
import React from "react";
import { ColorValue } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

type Props = {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: string;
  isIconBack?: boolean;
  bg?: ColorValue;
};

HeaderLayout.defaultProps = {
  isIconBack: true,
  bg: "white",
};
function HeaderLayout({ bg, iconRight, iconLeft, label, isIconBack }: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationCustomProps>();
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      py="3"
      px="5"
      style={{ backgroundColor: bg }}
    >
      {isIconBack && !iconLeft && (
        <FeatherIcon
          name="chevron-left"
          size={24}
          color={colors.gray[600]}
          onPress={() => navigation.goBack()}
        />
      )}
      {iconLeft}
      <Text fontSize="md" fontWeight="bold" color="gray.700">
        {label}
      </Text>
      {iconRight ? iconRight : <Box w="4" />}
    </HStack>
  );
}

export default HeaderLayout;
