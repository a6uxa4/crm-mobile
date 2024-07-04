import {useColorScheme} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const UserIcon = () => {
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
      <Circle cx="12" cy="12" r="10" />
      <Circle cx="12" cy="10" r="3" />
      <Path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </Svg>
  );
};

export default UserIcon;
