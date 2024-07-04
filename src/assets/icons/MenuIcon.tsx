import {useColorScheme} from 'react-native';
import Svg, {Line} from 'react-native-svg';

const MenuIcon = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke={isDarkMode ? '#878C9F' : '#3F3F4D'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Line x1="4" y1="12" x2="20" y2="12" />
      <Line x1="4" y1="6" x2="20" y2="6" />
      <Line x1="4" y1="18" x2="20" y2="18" />
    </Svg>
  );
};

export default MenuIcon;
