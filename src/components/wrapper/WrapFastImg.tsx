import { Image, ImageContentFit, ImageStyle } from "expo-image";
import React from "react";
import { ImageSourcePropType, StyleProp } from "react-native";

type Props = {
  onPress?: () => void;
  size?: number | string;
  source?: ImageSourcePropType;
  uri?: string;
  alt?: string;
  style?: StyleProp<ImageStyle>;
  headers?: any;
  resizeMode?: ImageContentFit;
};

function WrapFastImg({
  source,
  uri,
  resizeMode = "cover",
  style = { width: 200, height: 200 },
  headers,
}: Props) {
  return (
    <Image
      style={style}
      source={
        source
          ? source
          : {
              uri: uri,
              headers: headers,
            }
      }
      contentFit={resizeMode}
      transition={1000}
    />
  );
}

export default WrapFastImg;
