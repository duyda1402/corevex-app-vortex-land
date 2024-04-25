import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: ColorValue;
};

const IconCommentDots = ({
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
      <Path d="M13.5 12a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0113.5 12zm3.5-1.5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 0017 10.5zm-10 0a1.5 1.5 0 10.001 3.001A1.5 1.5 0 007 10.5zm17 1.84V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .47 19.208.03 12.854c-.241-3.476 1.027-6.878 3.479-9.333S9.363-.206 12.836.029C19.096.454 24 5.862 24 12.341zm-2 0c0-5.431-4.084-9.962-9.299-10.316a10.015 10.015 0 00-7.777 2.91 10.019 10.019 0 00-2.899 7.782c.373 5.38 5.024 9.285 11.059 9.285h5.917c1.654 0 3-1.346 3-3v-6.66z" />
    </Svg>
  );
};

export default IconCommentDots;
