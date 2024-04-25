import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: ColorValue;
};

const IconCrown = ({
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
      <Path d="M22.766 4.566a1.994 1.994 0 00-2.18.434L18 7.586 13.414 3a2 2 0 00-2.828 0L6 7.586 3.414 5A2 2 0 000 6.414V17a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V6.414a2 2 0 00-1.234-1.848zM22 17a3 3 0 01-3 3H5a3 3 0 01-3-3V6.414l3.293 3.293a1 1 0 001.414 0L12 4.414l5.293 5.293a1 1 0 001.414 0L22 6.414z" />
    </Svg>
  );
};

export default IconCrown;
