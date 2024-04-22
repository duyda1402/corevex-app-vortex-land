import React from "react";
import Svg, { Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconPeopleRoof = ({
  size = 24,
  strokeWidth = 2,
  color = "#000",
  ...propsSvg
}: Props) => {
  return (
    <Svg
      data-name="Layer 1"
      strokeWidth={3}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...propsSvg}
    >
      <Path d="M.213 9.145a1 1 0 01.171-1.404l8.535-6.679a4.99 4.99 0 016.162 0l8.535 6.679a1 1 0 01-1.232 1.576l-8.535-6.679a2.993 2.993 0 00-3.697 0L1.616 9.316a1 1 0 01-1.403-.171zm3.524 8.89C1.571 18.626 0 20.714 0 23a1 1 0 102 0c0-1.379.973-2.684 2.263-3.035a1 1 0 10-.526-1.93zm16.525 0a1 1 0 00-.526 1.93c1.29.352 2.263 1.656 2.263 3.035a1 1 0 102 0c0-2.286-1.571-4.374-3.737-4.965zM4.499 11a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm17.5 2.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-10-5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 7c-2.757 0-5 2.243-5 5v3a1 1 0 102 0v-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3a1 1 0 102 0v-3c0-2.757-2.243-5-5-5z" />
    </Svg>
  );
};

export default IconPeopleRoof;
