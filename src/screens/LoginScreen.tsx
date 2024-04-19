import { IconApple, iconLogo, IconMobile, IconTiktok } from "@/commons/assets";
import { ScreenNameEnum } from "@/commons/enum/screens";
import WrapIcon from "@/components/wrapper/WrapIcon";
import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "native-base";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import {
  ColorType,
  ResponsiveValue,
} from "native-base/lib/typescript/components/types";
import React from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";

type Props = {
  navigation: any;
};

const APP_NAME = process.env.EXPO_PUBLIC_APP_NAME;

const LoginScreen = ({ navigation }: Props) => {
  const handlerGoMainScreen = () =>
    navigation.navigate(ScreenNameEnum.MainScreen);

  return (
    <Stack h="100%" direction="column-reverse" bg="white">
      <Box>
        <Center>
          <VStack alignItems="center" space={2}>
            <WrapIcon source={iconLogo} alt="Logo" size="40" />
            <Heading>
              <Text fontFamily="Platypi" color="gray.700">
                {APP_NAME}
              </Text>
            </Heading>
          </VStack>
        </Center>
        {/* Spacing */}
        <Box h="25%"></Box>
        <VStack space={4} paddingX="12">
          <Button variant="outline" rounded={99} onPress={handlerGoMainScreen}>
            Login with Google
          </Button>
          <Button variant="outline" rounded={99}>
            Login with Facebook
          </Button>
          <HStack space={3} justifyContent="center">
            <ButtonAnotherLogin
              source={IconApple}
              onPress={() => console.log("Login Apple")}
              bg="gray.100"
            />
            <ButtonAnotherLogin
              source={IconTiktok}
              onPress={() => console.log("Login Tiktok")}
              bg="gray.100"
            />
            <ButtonAnotherLogin
              source={IconMobile}
              onPress={() => console.log("Login Mobile")}
              bg="gray.100"
            />
          </HStack>
        </VStack>
        <Box mt={8}>
          <Text fontWeight="semibold" textAlign="center" fontSize="xs">
            Are you having trouble logging in? Contact customer service.
          </Text>
          <Text textAlign="center" fontSize="xs" color="gray.400">
            Logging in means you have read and agreed to the{" "}
            <Text fontWeight="semibold" color="gray.400" underline>
              Terms of Service
            </Text>
            and{" "}
            <Text fontWeight="semibold" color="gray.400" underline>
              Privacy Policy
            </Text>
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default LoginScreen;

type ButtonAnotherLoginProps = {
  onPress?: () => void;
  source?: ImageSourcePropType;
  bg?: ResponsiveValue<ColorType | ILinearGradientProps>;
};

const ButtonAnotherLogin = ({
  onPress,
  source,
  bg = "gray.200",
}: ButtonAnotherLoginProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar h={12} w={12} bg={bg} p={3} source={source} />
    </TouchableOpacity>
  );
};
