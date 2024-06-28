import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ResidualsIcon = ({ size = 24, color = '#FFCC18', signColor = 'black' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M12 3L2 20H22L12 3Z"
      fill={color}
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <Path
      d="M11 14.5H13V17H11V13.5ZM11 8H13V12.5H11V8Z"
      fill={signColor}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default ResidualsIcon;