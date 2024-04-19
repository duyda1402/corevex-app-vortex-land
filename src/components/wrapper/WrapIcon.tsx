import React from "react";
import { Image, useTheme } from "native-base";
import { ImageSourcePropType, StyleProp, TouchableOpacity } from "react-native";
import lodash from "lodash";
import WrapFastImg from "./WrapFastImg";
import { ImageStyle } from "expo-image";

type Props = {
  onPress?: () => void;
  size?: any;
  source: ImageSourcePropType;
  alt?: string;
  style?: StyleProp<ImageStyle>;
};

function WrapIcon({ alt = "icon", size = "3", source, style, onPress }: Props) {
  const { sizes } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <WrapFastImg
        style={[
          {
            width: lodash.get(sizes, size),
            height: lodash.get(sizes, size),
          },
          style,
        ]}
        source={source}
        alt={alt}
      />
    </TouchableOpacity>
  );
}

export default WrapIcon;
