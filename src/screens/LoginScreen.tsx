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
  Stack,
  Text,
  VStack,
} from "native-base";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import {
  ColorType,
  ResponsiveValue,
} from "native-base/lib/typescript/components/types";
import React, { useEffect, useState } from "react";
import { ImageSourcePropType, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import { appleAuth } from "@invertase/react-native-apple-authentication";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
type Props = {
  navigation: any;
};

const APP_NAME = process.env.EXPO_PUBLIC_APP_NAME;
const CLIENT_ID =
  "184480126089-uujdp1rq4vjadol4j3lqrf9geoid4prh.apps.googleusercontent.com";
const LoginScreen = ({ navigation }: Props) => {
  const handlerGoMainScreen = () =>
    navigation.navigate(ScreenNameEnum.MainScreen);

  useEffect(() => {}, [
    GoogleSignin.configure({
      webClientId: CLIENT_ID,
    }),
  ]);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      const hasPlayServices = await GoogleSignin.hasPlayServices();
      if (!hasPlayServices) return;
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      console.log("Google idToken", idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      const user = await auth().signInWithCredential(googleCredential);
      console.log("Google idToken", user);
      return alert(idToken);
    } catch (err: any) {
      console.error(JSON.stringify(err));
    }
  }

  async function onAppleButtonPress() {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      // As per the FAQ of react-native-apple-authentication, the name should come first in the following array.
      // See: https://github.com/invertase/react-native-apple-authentication#faqs
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error("Apple Sign-In failed - no identify token returned");
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    );

    // Sign the user in with the credential
    return alert(JSON.stringify(auth().signInWithCredential(appleCredential)));
  }

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
          <Button variant="outline" rounded={99} onPress={onGoogleButtonPress}>
            Login with Google
          </Button>
          <Button variant="outline" rounded={99}>
            Login with Facebook
          </Button>
          <HStack space={3} justifyContent="center">
            <ButtonAnotherLogin
              source={IconApple}
              onPress={onAppleButtonPress}
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
