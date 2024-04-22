import React from "react";
import Svg, { Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconWishlistHeart = ({
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
      <Path d="M15 6a1 1 0 01-1 1h-4a1 1 0 110-2h4a1 1 0 011 1zm-1 4h-4a1 1 0 100 2h4a1 1 0 100-2zm-2 12H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v5.5a1 1 0 102 0V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h7a1 1 0 100-2zm12-5.5c0 2.65-3.114 5.884-4.622 7.034-.405.31-.892.465-1.378.465s-.973-.155-1.378-.465C15.114 22.384 12 19.15 12 16.5c0-1.93 1.57-3.5 3.5-3.5.979 0 1.864.403 2.5 1.053A3.49 3.49 0 0120.5 13c1.93 0 3.5 1.57 3.5 3.5zm-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5a1 1 0 11-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 1.677 2.458 4.395 3.835 5.444a.273.273 0 00.33 0C19.542 20.894 22 18.176 22 16.5zM5.5 4.5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005.5 4.5zm0 10a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005.5 14.5zm0-5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 005.5 9.5z" />
    </Svg>
  );
};

export default IconWishlistHeart;
