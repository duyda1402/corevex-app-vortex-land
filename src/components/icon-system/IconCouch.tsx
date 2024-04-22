import React from "react";
import Svg, { Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconCouch = ({
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
      <Path d="M22 9.172V7c0-3.309-2.691-6-6-6H8C4.691 1 2 3.691 2 7v2.172A3.004 3.004 0 000 12v4c0 1.632.786 3.084 2 3.997V22a1 1 0 002 0v-1.101c.323.066.658.101 1 .101h14c.342 0 .677-.035 1-.101V22a1 1 0 002 0v-2-.003A4.994 4.994 0 0024 16v-4a3.004 3.004 0 00-2-2.828zM8 3h8c2.206 0 4 1.794 4 4v2.172A3.004 3.004 0 0018 12v2H6v-2a3.004 3.004 0 00-2-2.828V7c0-2.206 1.794-4 4-4zm14 13c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-4c0-.551.449-1 1-1s1 .449 1 1v3a1 1 0 001 1h14a1 1 0 001-1v-3c0-.551.449-1 1-1s1 .449 1 1v4z" />
    </Svg>
  );
};

export default IconCouch;
