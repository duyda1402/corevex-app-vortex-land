import MainAppView from "@/components/ViewMain";
import { formatLargeNumber } from "@/untils";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Progress,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

type Props = {};

function LevelScreen({}: Props) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const layout = useWindowDimensions();
  const obj = {
    level: 99,
    preExp: 2804804502,
    curExp: 2904804502,
    nextExp: 135356228,
  };

  return (
    <MainAppView>
      <HStack justifyContent="space-between" alignItems="center" py="3" px="5">
        <FeatherIcon
          name="chevron-left"
          size={24}
          color={colors.gray[600]}
          onPress={() => navigation.goBack()}
        />
        <Text fontSize="md" fontWeight="bold">
          My Level
        </Text>
        <Box w="4" />
      </HStack>
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
