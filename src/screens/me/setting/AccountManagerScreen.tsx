import HeaderLayout from "@/components/layouts/HeaderLayout";
import MainAppView from "@/components/layouts/ViewMain";
import { RootState } from "@/libs/store";
import { HStack, ScrollView, Text, useTheme } from "native-base";
import React, { useState } from "react";
import { useSelector } from "react-redux";

type Props = {};

function AccountManagerScreen({}: Props) {
  const { colors } = useTheme();
  const me = useSelector((state: RootState) => state.auth.me);
  return (
    <MainAppView bg={colors.gray[100]}>
      <HeaderLayout label="Manager Account" />
      <ScrollView>
        <HStack
          mt="3"
          bg="white"
          px="5"
          py="4"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text color="gray.600" fontWeight="semibold">
            UID
          </Text>
          <Text color="gray.600" fontSize="xs" fontWeight="semibold">
            {me?.unionId}
          </Text>
        </HStack>
      </ScrollView>
    </MainAppView>
  );
}

export default AccountManagerScreen;
