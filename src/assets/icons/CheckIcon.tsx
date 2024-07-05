import React from 'react';
import {useColorScheme} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={isDarkMode ? '#1A2A3D' : '#FFFFFF'}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20 6 9 17l-5-5" />
    </Svg>
  );
};

export default CheckIcon;
