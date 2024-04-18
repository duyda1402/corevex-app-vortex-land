import React from "react";
import { Image, useTheme } from "native-base";
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import lodash from "lodash";

type Props = {
  onPress?: () => void;
  size?: string;
  source: ImageSourcePropType;
  alt?: string;
  style?: StyleProp<ImageStyle>;
};

function WrapIcon({ alt = "icon", size = "3", source, style, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image w={size} h={size} source={source} alt={alt} style={[style]} />
    </TouchableOpacity>
  );
}

export default WrapIcon;
