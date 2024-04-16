import { ScreenNameEnum } from "@/commons/enum/screens";
import { Button, Center, Container, Heading, Text } from "native-base";
import React from "react";

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Center>
      <Container>
        <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        <Button
          variant="outline"
          onPress={() => navigation.navigate(ScreenNameEnum.LoginScreen)}
        >
          Logout
        </Button>
      </Container>
    </Center>
  );
};

export default HomeScreen;
