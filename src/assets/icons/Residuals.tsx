import Svg, {Path} from 'react-native-svg';

const ResidualsIcon = ({color = '#FFCC18', signColor = 'black'}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24">
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
