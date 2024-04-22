import React from "react";
import Svg, { Circle, Color, Path } from "react-native-svg";

type Props = {
  size?: number;

  strokeWidth?: number;
  color?: Color;
};

const IconGamePad = ({
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
      x="0px"
      y="0px"
      width={size}
      height={size}
      fill={color}
      {...propsSvg}
    >
      <Path d="M473.759,107.286c-19.12-31.867-53.112-53.112-91.353-53.112H127.469c-38.241,0-72.232,21.245-91.353,53.112  C12.747,149.776,0,196.515,0,245.378c0,116.846,46.739,212.448,106.224,212.448c31.867,0,57.361-29.743,76.481-91.353  c2.124-8.498,10.622-14.871,21.245-14.871h104.1c8.498,0,16.996,6.373,21.245,14.871c19.12,61.61,44.614,91.353,76.481,91.353  c59.485,0,106.224-95.602,106.224-212.448C509.876,196.515,497.129,149.776,473.759,107.286z M403.651,415.336  c-6.373,0-21.245-16.996-36.116-61.61c-8.498-27.618-33.992-44.614-61.61-44.614H203.95c-27.618,0-53.112,19.12-61.61,44.614  c-14.871,44.614-29.743,61.61-36.116,61.61c-21.245,0-63.734-65.859-63.734-169.958c0-40.365,10.622-80.73,29.743-116.846  c12.747-19.12,33.992-31.867,55.237-31.867h254.938c21.245,0,42.49,12.747,55.237,31.867c19.12,36.116,29.743,76.481,29.743,116.846  C467.386,349.477,424.896,415.336,403.651,415.336z" />
      <Path d="M192,192h-21.333v-21.333c0-12.8-8.533-21.333-21.333-21.333c-12.8,0-21.333,8.533-21.333,21.333V192h-21.333  c-12.8,0-21.333,8.533-21.333,21.333c0,12.8,8.533,21.333,21.333,21.333H128V256c0,12.8,8.533,21.333,21.333,21.333  c12.8,0,21.333-8.533,21.333-21.333v-21.333H192c12.8,0,21.333-8.533,21.333-21.333C213.333,200.533,204.8,192,192,192z" />
      <Circle cx={394.667} cy={181.333} r={32} />
      <Circle cx={330.667} cy={245.333} r={32} />
    </Svg>
  );
};

export default IconGamePad;
