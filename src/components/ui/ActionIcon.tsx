import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
  onPress?: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
const ActionIcon = ({ children, style, onPress }: Props) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ActionIcon;
