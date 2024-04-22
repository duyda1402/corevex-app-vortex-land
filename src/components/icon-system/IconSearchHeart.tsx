import React from "react";
import Svg, { Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconSearchHeart = ({
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
      <Path d="M506.02 475.743L378.865 348.588c74.591-91.227 61.105-225.649-30.122-300.239S123.095-12.757 48.504 78.47s-61.105 225.649 30.122 300.24c78.578 64.249 191.54 64.249 270.118 0l127.155 127.155c8.463 8.173 21.949 7.939 30.122-.524 7.972-8.255 7.972-21.343-.001-29.598zM43.604 213.87c0-94.121 76.3-170.421 170.421-170.421s170.421 76.3 170.421 170.421-76.3 170.421-170.421 170.421c-94.077-.106-170.315-76.344-170.421-170.421zm213.027-85.211a61.584 61.584 0 00-42.605 17.383 61.588 61.588 0 00-42.605-17.383c-36.433 1.262-64.997 31.73-63.908 68.168 0 42.605 43.479 86.553 79.97 115.886 15.533 12.371 37.553 12.371 53.086 0 36.491-29.334 79.97-73.281 79.97-115.886 1.088-36.438-27.475-66.906-63.908-68.168zm-42.478 150.823c-39.495-31.741-64.036-63.482-64.036-82.654-1.063-12.906 8.416-24.282 21.303-25.563 12.886 1.281 22.366 12.657 21.303 25.563 0 11.765 9.537 21.303 21.303 21.303 11.765 0 21.303-9.537 21.303-21.303-1.063-12.906 8.416-24.282 21.303-25.563 12.886 1.281 22.366 12.657 21.303 25.563-.002 19.172-24.542 50.913-63.782 82.654z" />
    </Svg>
  );
};

export default IconSearchHeart;
