import { avatarDefault } from "@/commons/assets";
import { NavigationCustomProps, UserInfo } from "@/commons/types";
import MainAppView from "@/components/layouts/ViewMain";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Input,
  Radio,
  useTheme,
  VStack,
  Text,
  Button,
  ScrollView,
  Select,
} from "native-base";
import { ColorValue, StyleSheet } from "react-native";
import React from "react";
import ActionIcon from "@/components/ui/ActionIcon";
import IconCircleX from "@/components/icon-system/IconCircleX";
import IconFemale from "@/components/icon-system/IconFemale";
import IconMale from "@/components/icon-system/IconMale";
import IconVenusMars from "@/components/icon-system/IconVenusMars";
import { GenderEnum, ScreenNameEnum } from "@/commons";
import { useNavigation } from "@react-navigation/native";
import IconCamera from "@/components/icon-system/IconCamera";

type Props = {
  route: any;
};

const genders = [
  {
    label: "Male",
    value: GenderEnum.Male,
    icon: (color: ColorValue) => <IconMale color={color} size={18} />,
  },
  {
    label: "Female",
    value: GenderEnum.Female,
    icon: (color: ColorValue) => <IconFemale color={color} size={18} />,
  },
  {
    label: "Unknown",
    value: GenderEnum.Unknown,
    icon: (color: ColorValue) => <IconVenusMars color={color} size={18} />,
  },
];

function WelcomeScreen({ route }: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationCustomProps>();
  const user = route?.params?.user as UserInfo | undefined;
  const onPressGoHome = () => navigation.navigate(ScreenNameEnum.MainScreen);
  return (
    <MainAppView>
      <ScrollView>
        <VStack
          px="5"
          space="5"
          justifyContent="center"
          alignItems="center"
          mt="10"
        >
          <Box my="10" position="relative">
            <Avatar
              size="2xl"
              bg="gray.100"
              source={user?.picture ? { uri: user.picture } : avatarDefault}
            />
            <Box
              borderColor="white"
              borderWidth={2}
              position="absolute"
              backgroundColor="violet.500"
              rounded={99}
              bottom={0}
              right={0}
              p="0.5"
            >
              <ActionIcon
                style={{
                  padding: 8,
                }}
              >
                <IconCamera color="white" size={14} />
              </ActionIcon>
            </Box>
          </Box>
          <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
            <Input
              maxLength={50}
              px="6"
              variant="unstyled"
              style={style.textInputs}
              defaultValue={user?.nickname || ""}
              fontWeight="semibold"
              fontSize="md"
              placeholder="Name"
            />
            <ActionIcon
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                padding: 6,
              }}
            >
              <IconCircleX color={colors.gray[600]} size={16} />
            </ActionIcon>
          </Box>
          <HStack justifyContent="space-between" w="100%">
            {genders.map((gender) => (
              <HStack
                key={gender.value}
                space="2"
                alignItems="center"
                bg="blueGray.100"
                px="4"
                py="2.5"
                rounded={99}
              >
                {gender.icon(colors.gray[600])}
                <Text color="gray.600" fontSize="md" fontWeight="bold">
                  {gender.label}
                </Text>
              </HStack>
            ))}
          </HStack>
          <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
            <Select
              w="100%"
              rounded={99}
              variant="unstyled"
              // selectedValue={service}
              // onValueChange={(itemValue, itemIndex) => setService(itemValue)}
              placeholder="Choose Country"
              placeholderTextColor={colors.gray[600]}
              style={style.textInputs}
              fontSize="md"
              fontWeight="semibold"
              accessibilityLabel="Choose Country"
              px="6"
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>

          <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
            <Select
              w="100%"
              rounded={99}
              variant="unstyled"
              // selectedValue={service}
              // onValueChange={(itemValue, itemIndex) => setService(itemValue)}
              placeholder="Choose State"
              placeholderTextColor={colors.gray[600]}
              style={style.textInputs}
              fontSize="md"
              fontWeight="semibold"
              accessibilityLabel="Choose State"
              px="6"
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Box>

          <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
            <Input
              maxLength={50}
              px="6"
              variant="unstyled"
              style={style.textInputs}
              fontWeight="semibold"
              fontSize="md"
              placeholder="Invite Code (optional)"
            />
            <ActionIcon
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                padding: 6,
              }}
            >
              <IconCircleX color={colors.gray[600]} size={16} />
            </ActionIcon>
          </Box>
        </VStack>
      </ScrollView>
      <VStack px="5" mt="5" space="4">
        <Button colorScheme="violet" rounded={99}>
          <Text color="white" fontWeight="semibold">
            Confirm
          </Text>
        </Button>
        <Button variant="unstyled">
          <Text
            color="violet.700"
            fontWeight="semibold"
            onPress={onPressGoHome}
          >
            Go to Home
          </Text>
        </Button>
      </VStack>
    </MainAppView>
  );
}

export default WelcomeScreen;

const style = StyleSheet.create({
  textInputs: {},
});
