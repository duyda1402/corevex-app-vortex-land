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
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
      {...propsSvg}
    >
      <Path d="m18.854,23.958c-.119.028-.238.042-.354.042-.676,0-1.29-.46-1.457-1.146-.551-2.269-2.625-3.854-5.042-3.854s-4.492,1.585-5.042,3.854c-.195.805-1.003,1.298-1.811,1.104-.805-.195-1.299-1.007-1.104-1.812.878-3.619,4.15-6.146,7.958-6.146s7.08,2.527,7.958,6.146c.195.805-.299,1.616-1.104,1.812ZM6,8V.764c0-.754.978-1.051,1.397-.423l1.603,2.659L11.297.32c.37-.431,1.037-.431,1.406,0l2.297,2.68,1.603-2.659c.419-.628,1.397-.331,1.397.423v7.236c0,3.309-2.691,6-6,6s-6-2.691-6-6Zm3-1v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h-6Z" />
    </Svg>
  );
};

export default IconCrown;
