import { Center, Container, Heading, Text } from "native-base";
import React from "react";

type Props = { feature?: string };

const ComingSoon = ({ feature }: Props) => (
  <Center>
    <Container>
      <Heading>
        <Text color="violet.500"> Coming Soon!</Text>
      </Heading>
      <Text mt="3" fontWeight="medium">
        We are launching feature {feature} the site very soon. Please come back
        later
      </Text>
    </Container>
  </Center>
);

export default ComingSoon;
