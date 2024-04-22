import React from "react";
import Svg, { Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconBackpack = ({
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
      <Path d="M16 24H8a3 3 0 01-2.886-2.225 6.993 6.993 0 0113.772 0A3 3 0 0116 24zM3 21v-7.576A5 5 0 000 18v1a5 5 0 003.924 4.876A4.953 4.953 0 013 21zm18-7.576V21a4.953 4.953 0 01-.924 2.876A5 5 0 0024 19v-1a5 5 0 00-3-4.576zM19 11v6.356a8.978 8.978 0 00-14 0V11a6.992 6.992 0 013-5.736V4a4 4 0 018 0v1.264A6.992 6.992 0 0119 11zm-9-6.7a6.927 6.927 0 014 0V4a2 2 0 00-4 0zm5 5.7a1 1 0 00-1-1h-4a1 1 0 00-1 1 1 1 0 001 1h4a1 1 0 001-1z" />
    </Svg>
  );
};

export default IconBackpack;
