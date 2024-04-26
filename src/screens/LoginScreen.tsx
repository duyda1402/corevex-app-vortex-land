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
  Modal,
  Spinner,
} from "native-base";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import {
  ColorType,
  ResponsiveValue,
} from "native-base/lib/typescript/components/types";
import React, { useEffect, useState } from "react";
import { ImageSourcePropType, Platform, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import { appleAuth } from "@invertase/react-native-apple-authentication";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { apiLoginUser } from "@/libs/api";
import OverlayLoading from "@/components/ui/OverlayLoading";
import { useNavigation } from "@react-navigation/native";
import { NavigationCustomProps } from "@/commons/types";
import ModalHandlerLoading from "@/components/layouts/modal/ModalHandlerLoading";

type Props = {
  navigation: any;
};

const APP_NAME = process.env.EXPO_PUBLIC_APP_NAME;

const LoginScreen = ({}: Props) => {
  const [screenIsReady, setScreenIsReady] = useState(false);
  const navigation = useNavigation<NavigationCustomProps>();
  const [loading, setLoading] = useState(false);
  const [providerLogin, setProviderLogin] = useState("");

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "101995807975007259112",
    });
    auth().onAuthStateChanged((userState) => {
      if (!userState) {
        return setScreenIsReady(true);
      } else {
        return switchScreen();
      }
    });
  }, []);

  async function switchScreen() {
    try {
      const idToken = (await auth().currentUser?.getIdToken()) || "";
      const user = await apiLoginUser(idToken);
      if (!user.isNewMember) {
        navigation.replace(ScreenNameEnum.MainScreen);
      } else {
        navigation.replace(ScreenNameEnum.WelcomeScreen, { user: user });
      }
    } catch (error: any) {
      alert("Login failed: " + error?.message);
    } finally {
      setLoading(false);
    }
  }

  async function onGoogleButtonPress() {
    setLoading(() => true);
    setProviderLogin("Google");
    try {
      const hasPlayServices = await GoogleSignin.hasPlayServices();
      if (!hasPlayServices) return;
      const { idToken } = await GoogleSignin.signIn({});
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      return switchScreen();
    } catch (error: any) {
      alert("Login failed: " + error?.message);
      setLoading(false);
    }
  }

  async function onAppleButtonPress() {
    setLoading(() => true);
    setProviderLogin("Apple");
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error("Apple Sign-In failed - no identify token returned");
    }
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    );
    // Sign the user in with the credential
    return switchScreen();
  }

  async function onFacebookButtonPress() {
    setLoading(() => true);
    setProviderLogin("Facebook");
    // try {
    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    //     process.env.EXPO_PUBLIC_FACEBOOK_APP_ID,
    //     {
    //       permissions: ["public_profile", "email"],
    //     }
    //   );
    //   if (type === "success") {
    //     // Get the user's name using Facebook's Graph API
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`
    //     );
    //     const { id, name, email } = await response.json();
    //     const facebookCredential = auth.FacebookAuthProvider.credential(token);
    //     await auth().signInWithCredential(facebookCredential);
    //     return switchScreen();
    //   }
    // } catch (err: any) {
    //   console.error(JSON.stringify(err));
    //   setLoading(false);
    // }
    setTimeout(() => setLoading(false), 6000);
  }

  return (
    <React.Fragment>
      {!screenIsReady ? (
        <OverlayLoading loading />
      ) : (
        <Stack h="100%" direction="column-reverse" bg="white">
          <ModalHandlerLoading
            loading={loading}
            title={`Logging in to ${providerLogin}. Please wait...`}
          />
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
              <Button
                variant="outline"
                rounded={99}
                onPress={onGoogleButtonPress}
              >
                Login with Google
              </Button>
              <Button
                variant="outline"
                rounded={99}
                onPress={onFacebookButtonPress}
              >
                Login with Facebook
              </Button>
              <HStack space={3} justifyContent="center">
                {Platform.OS === "ios" && (
                  <ButtonAnotherLogin
                    source={IconApple}
                    onPress={onAppleButtonPress}
                    bg="gray.100"
                  />
                )}
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
      )}
    </React.Fragment>
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
