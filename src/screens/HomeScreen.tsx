import { Box, Button, Text } from "native-base";
import React from "react";

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Box alignItems="center">
      <Text fontSize="sm">sm</Text>
      <Button onPress={() => console.log("hello world")}>Click Me</Button>
    </Box>
  );
};

export default HomeScreen;
