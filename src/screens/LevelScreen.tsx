import HeaderLayout from "@/components/layouts/HeaderLayout";
import MainAppView from "@/components/layouts/ViewMain";
import { formatLargeNumber } from "@/utils";
import {
  Divider,
  Heading,
  Progress,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";

type Props = {};

function LevelScreen({}: Props) {
  const layout = useWindowDimensions();
  const obj = {
    level: 99,
    preExp: 2804804502,
    curExp: 2904804502,
    nextExp: 135356228,
  };

  return (
    <MainAppView>
      <HeaderLayout label="My Level" />
      <ScrollView style={{ width: layout.width }}>
        <VStack px="5" space="2" alignItems="center" py="10">
          <Heading>{obj.level}</Heading>
          <Progress
            w="100%"
            size="md"
            bg="coolGray.100"
            _filledTrack={{
              bg: "lime.500",
            }}
            value={
              (obj.curExp - obj.preExp) /
              (obj.curExp + obj.nextExp - obj.preExp)
            }
            min={0}
            max={1}
          />
          <Text fontSize="xs" fontWeight="semibold">
            Experience points: {formatLargeNumber(obj.curExp)}. Points to next
            level: {formatLargeNumber(obj.nextExp)}
          </Text>
        </VStack>
        <Divider my="2" bg="gray.100" thickness="1" />
      </ScrollView>
    </MainAppView>
  );
}

export default LevelScreen;
