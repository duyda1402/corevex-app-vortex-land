import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: ColorValue;
};

const IconHomeHeart = ({
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
      <Path d="m15.635,12.43c0,1.277-1.917,3.491-3.301,4.598-.119.095-.28.096-.399,0-1.384-1.107-3.3-3.322-3.3-4.598,0-.789.561-1.43,1.25-1.43.622,0,1.25.374,1.25,1.209,0,.552.447,1,1,1s1-.448,1-1c0-.893.674-1.209,1.25-1.209.689,0,1.25.642,1.25,1.43Zm8.365-2.707v9.276c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-9.276c0-1.665.824-3.214,2.203-4.145L9.203.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379.931,2.203,2.48,2.203,4.145Zm-6.365,2.707c0-1.892-1.458-3.43-3.25-3.43-.89,0-1.675.318-2.25.852-.575-.533-1.36-.852-2.25-.852-1.792,0-3.25,1.539-3.25,3.43,0,2.307,2.649,5.038,4.05,6.16.427.342.938.512,1.45.512s1.022-.171,1.449-.512c1.401-1.121,4.051-3.851,4.051-6.16Z" />
    </Svg>
  );
};

export default IconHomeHeart;
