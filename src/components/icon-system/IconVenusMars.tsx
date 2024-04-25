import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: ColorValue;
};

const IconVenusMars = ({
  size = 24,
  strokeWidth = 2,
  color = "#000",
  ...propsSvg
}: Props) => {
  return (
    <Svg
      data-name="Layer 1"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...propsSvg}
    >
      <Path d="M24,7V1a1,1,0,0,0-1-1H17l2.439,2.439L16.905,4.974a6.445,6.445,0,0,0-6.9.054A6.5,6.5,0,1,0,5,16.818V19H3v3H5v2H8V22h2V19H8V16.819a6.435,6.435,0,0,0,2.006-.847A6.487,6.487,0,0,0,19.026,7.1l2.535-2.534ZM3,10.5A3.494,3.494,0,0,1,7.862,7.279a6.449,6.449,0,0,0,0,6.442A3.494,3.494,0,0,1,3,10.5ZM13.5,14A3.5,3.5,0,1,1,17,10.5,3.5,3.5,0,0,1,13.5,14Z" />
    </Svg>
  );
};

export default IconVenusMars;
