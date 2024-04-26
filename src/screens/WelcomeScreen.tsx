import { GenderEnum, ScreenNameEnum } from "@/commons";
import { avatarDefault } from "@/commons/assets";
import { NavigationCustomProps, UserInfo } from "@/commons/types";
import IconCamera from "@/components/icon-system/IconCamera";
import IconCircleX from "@/components/icon-system/IconCircleX";
import IconFemale from "@/components/icon-system/IconFemale";
import IconMale from "@/components/icon-system/IconMale";
import IconVenusMars from "@/components/icon-system/IconVenusMars";
import MainAppView from "@/components/layouts/ViewMain";
import ActionIcon from "@/components/ui/ActionIcon";
import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Input,
  ScrollView,
  Select,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ColorValue } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ModalHandlerLoading from "@/components/layouts/modal/ModalHandlerLoading";
import {
  countriesMockup,
  countryStateMockup,
} from "@/commons/mockups/countries";
import { apiUpdateMe } from "@/libs/api";

type Props = {
  route: any;
};

const genders = [
  {
    label: "Male",
    value: GenderEnum.Male,
    icon: (color: ColorValue) => <IconMale color={color} size={18} />,
    activeTintColor: "blue.500",
  },
  {
    label: "Female",
    value: GenderEnum.Female,
    icon: (color: ColorValue) => <IconFemale color={color} size={18} />,
    activeTintColor: "pink.500",
  },
  {
    label: "Unknown",
    value: GenderEnum.Unknown,
    icon: (color: ColorValue) => <IconVenusMars color={color} size={18} />,
    activeTintColor: "violet.500",
  },
];

type FormUpdateUser = UserInfo & { inviteCode?: string };

function WelcomeScreen({ route }: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationCustomProps>();
  const user = route?.params?.user as UserInfo | undefined;
  const [loading, setLoading] = useState(false);
  const [countriesData] = useState(countriesMockup);
  const [countryStateData] = useState(countryStateMockup);

  const { control, handleSubmit, setValue, watch } = useForm<FormUpdateUser>({
    defaultValues: {
      unionId: user?.unionId,
      nickname: user?.nickname,
      picture: user?.picture,
      gender: user?.gender,
      stateCode: user?.stateCode,
      countryCode: user?.countryCode,
    },
  });

  const onPressGoHome = () => navigation.replace(ScreenNameEnum.MainScreen);

  const countryStateFilter = countryStateData.filter(
    (i) => i.countryCode === watch("countryCode")
  );

  const onPickImagePress = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log("Select Image", result);

    if (!result.canceled) {
      setValue("picture", result.assets[0].uri);
    }
  };

  const onConfigPress = async (values: FormUpdateUser) => {
    setLoading(() => true);
    const [result, error] = await apiUpdateMe(values);
    if (!result || error) {
      return alert("Error: " + error);
    }
    setLoading(() => false);
    return onPressGoHome();
  };

  return (
    <MainAppView>
      <ScrollView>
        <ModalHandlerLoading
          loading={loading}
          title="Updating information, please wait ..."
        />
        <VStack
          px="5"
          space="5"
          justifyContent="center"
          alignItems="center"
          mt="10"
        >
          <Controller
            control={control}
            name="picture"
            render={({ field: { value } }) => (
              <Box my="10" position="relative">
                <Avatar
                  size="2xl"
                  bg="gray.100"
                  source={value ? { uri: value } : avatarDefault}
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
                    onPress={onPickImagePress}
                    style={{
                      padding: 8,
                    }}
                  >
                    <IconCamera color="white" size={14} />
                  </ActionIcon>
                </Box>
              </Box>
            )}
          />

          <Controller
            control={control}
            name="nickname"
            render={({ field: { onChange, value } }) => (
              <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
                <Input
                  onChange={(event) => onChange(event.nativeEvent.text)}
                  value={value as string}
                  maxLength={50}
                  pl="6"
                  pr="10"
                  variant="unstyled"
                  fontWeight="semibold"
                  fontSize="md"
                  placeholder="Name"
                />
                {watch("nickname") && (
                  <BtnResetField
                    color={colors.gray[400]}
                    onPress={() => setValue("nickname", "")}
                  />
                )}
              </Box>
            )}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <HStack justifyContent="space-between" w="100%">
                {genders.map((gender) => (
                  <ActionIcon
                    key={gender.value}
                    onPress={() => onChange(gender.value)}
                  >
                    <HStack
                      space="2"
                      alignItems="center"
                      bg={
                        gender.value === value
                          ? gender.activeTintColor
                          : "blueGray.100"
                      }
                      px="4"
                      py="2.5"
                      rounded={99}
                    >
                      {gender.icon(
                        gender.value === value ? "white" : colors.gray[600]
                      )}
                      <Text
                        color={gender.value === value ? "white" : "gray.600"}
                        fontSize="md"
                        fontWeight="bold"
                      >
                        {gender.label}
                      </Text>
                    </HStack>
                  </ActionIcon>
                ))}
              </HStack>
            )}
          />
          <Controller
            control={control}
            name="countryCode"
            render={({ field: { onChange, value } }) => (
              <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
                <Select
                  w="100%"
                  rounded={99}
                  variant="unstyled"
                  selectedValue={value as string}
                  onValueChange={(itemValue: string) => onChange(itemValue)}
                  placeholder="Choose Country"
                  placeholderTextColor={colors.gray[600]}
                  fontSize="md"
                  fontWeight="semibold"
                  accessibilityLabel="Choose Country"
                  px="6"
                  _selectedItem={{
                    bg: "gray.200",
                  }}
                >
                  {!countriesData.length && (
                    <Center h="40">
                      <Text color="gray.200" fontSize="xs">
                        No data!
                      </Text>
                    </Center>
                  )}
                  {countriesData.map((country) => (
                    <Select.Item
                      key={country.code}
                      label={country.name}
                      value={country.code}
                    />
                  ))}
                </Select>
              </Box>
            )}
          />

          <Controller
            control={control}
            name="stateCode"
            render={({ field: { onChange, value } }) => (
              <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
                <Select
                  w="100%"
                  rounded={99}
                  variant="unstyled"
                  selectedValue={value as string}
                  onValueChange={(itemValue) => onChange(itemValue)}
                  placeholder="Choose State"
                  placeholderTextColor={colors.gray[600]}
                  fontSize="md"
                  fontWeight="semibold"
                  accessibilityLabel="Choose State"
                  px="6"
                  _selectedItem={{
                    bg: "gray.200",
                  }}
                >
                  {!countryStateFilter.length && (
                    <Center h="40">
                      <Text fontSize="sm" zIndex={100}>
                        No data!
                      </Text>
                    </Center>
                  )}
                  {countryStateFilter.map((country) => (
                    <Select.Item
                      key={country.code}
                      label={country.name}
                      value={country.code}
                    />
                  ))}
                </Select>
              </Box>
            )}
          />

          <Controller
            control={control}
            name="inviteCode"
            render={({ field: { onChange, value } }) => (
              <Box w="100%" rounded={99} bg="blueGray.100" position="relative">
                <Input
                  onChange={(event) => onChange(event.nativeEvent.text)}
                  value={value as string}
                  maxLength={50}
                  pl="6"
                  pr="10"
                  variant="unstyled"
                  fontWeight="semibold"
                  fontSize="md"
                  placeholder="Invite Code (optional)"
                />
                {watch("inviteCode") && (
                  <BtnResetField
                    color={colors.gray[400]}
                    onPress={() => setValue("inviteCode", undefined)}
                  />
                )}
              </Box>
            )}
          />
        </VStack>
      </ScrollView>
      <VStack px="5" my="3" space="4">
        <Button colorScheme="violet" rounded={99}>
          <Text
            color="white"
            fontWeight="semibold"
            onPress={handleSubmit(onConfigPress)}
          >
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

const BtnResetField = ({
  onPress,
  color,
  size = 16,
}: {
  onPress?: () => void;
  color?: ColorValue;
  size?: number;
}) => {
  return (
    <ActionIcon
      onPress={onPress}
      style={{
        position: "absolute",
        top: 8,
        right: 12,
        padding: 6,
      }}
    >
      <IconCircleX color={color} size={size} />
    </ActionIcon>
  );
};
