import React from "react";
import Svg, { Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconRocketLunch = ({
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
      <Path d="M2.751,15H0V14A7.634,7.634,0,0,1,4.065,7.169a10.975,10.975,0,0,1,3.9-1.09q-.889,1.1-1.783,2.338A40.582,40.582,0,0,0,2.751,15Zm12.832,2.813A40.582,40.582,0,0,1,9,21.249V24h1a7.634,7.634,0,0,0,6.831-4.065,10.975,10.975,0,0,0,1.09-3.9Q16.826,16.92,15.583,17.813ZM24,2.991c-.133,4.353-3.267,8.67-9.582,13.2A34.995,34.995,0,0,1,9,19.063V18.5A3.517,3.517,0,0,0,5.5,15H4.937A34.912,34.912,0,0,1,7.813,9.583C12.332,3.278,16.642.144,20.988,0,23.154,0,24,.885,24,2.991ZM18,8.5a2.5,2.5,0,0,0-5,0A2.5,2.5,0,0,0,18,8.5ZM1.374,23.785c1.126-.2,3.841-.758,4.748-1.664h0a3,3,0,0,0-4.243-4.243C.973,18.785.414,21.5.215,22.626l-.247,1.406Z" />
    </Svg>
  );
};

export default IconRocketLunch;
