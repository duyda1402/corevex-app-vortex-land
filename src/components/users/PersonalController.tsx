import { ScreenNameEnum } from "@/commons/enum/screens";
import { RootStackParamList } from "@/commons/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Heading, HStack, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
  isBackground: boolean;
  menu: Array<{
    id: string;
    label: string;
    icon: React.ReactNode;
    router?: ScreenNameEnum;
  }>;
};

PersonalController.defaultProps = {
  title: "Personal Controller",
  menu: [],
  isBackground: false,
};

function PersonalController({ title, menu, isBackground }: Props) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlerItemMenu = (item: {
    id: string;
    label: string;
    icon: React.ReactNode;
    router?: ScreenNameEnum;
  }) => {
    if (item.router) {
      navigation.navigate(item.router);
    } else {
      alert(item.label);
    }
  };

  return (
    <VStack px="4" space="4">
      <Heading size="sm">{title}</Heading>
      <HStack px="3" alignItems="start" justifyContent="space-between">
        {menu.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handlerItemMenu(item)}>
            <RenderItemMenu
              icon={item.icon}
              label={item.label}
              isBackground={isBackground}
            />
          </TouchableOpacity>
        ))}
      </HStack>
    </VStack>
  );
}

export default PersonalController;

const RenderItemMenu = (props: {
  icon: React.ReactNode;
  label: string;
  isBackground: boolean;
}) => {
  return (
    <VStack alignItems="center" space="1" maxW="16">
      <Box
        bg={props.isBackground ? "gray.100" : undefined}
        p="2.5"
        rounded="2xl"
      >
        {props?.icon}
      </Box>
      <Text sub>{props.label}</Text>
    </VStack>
  );
};
