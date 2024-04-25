import { GenderEnum } from "@/commons";
import { avatarDefault } from "@/commons/assets";
import { UserInfo } from "@/commons/types";
import { convertCountryState } from "@/utils";
import { Avatar, HStack, Text, useTheme, VStack } from "native-base";
import React from "react";
import IconFemale from "../icon-system/IconFemale";
import IconMale from "../icon-system/IconMale";
import IconVenusMars from "../icon-system/IconVenusMars";

type Props = {
  me?: UserInfo | null;
};

function PersonalHero({ me }: Props) {
  const { colors } = useTheme();
  return (
    <HStack
      style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
      py="4"
      px="4"
      bg="white"
      alignItems="center"
      justifyContent="center"
    >
      <VStack space={3} alignItems="center">
        <Avatar
          source={me?.picture ? { uri: me?.picture } : avatarDefault}
          size="xl"
          mt="5"
        />

        <Text fontWeight="semibold" fontSize="lg">
          {me?.nickname}
        </Text>
        <HStack space={1} alignItems="center">
          <Text color="gray.700" fontSize="xs">
            ID: {me?.unionId}
          </Text>
          <Text color="gray.300" fontSize="xs">
            |
          </Text>
          {me?.gender === GenderEnum.Female && (
            <IconFemale color={colors.pink[500]} size={14} />
          )}
          {me?.gender === GenderEnum.Male && (
            <IconMale color={colors.blue[500]} size={14} />
          )}
          {me?.gender === GenderEnum.Unknown && (
            <IconVenusMars color={colors.violet[500]} size={14} />
          )}
          {me?.countryCode && (
            <Text color="gray.300" fontSize="xs">
              |
            </Text>
          )}
          <Text color="gray.700" fontSize="xs">
            {convertCountryState({
              country: me?.countryCode,
              state: me?.stateCode,
            })}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
export default PersonalHero;
