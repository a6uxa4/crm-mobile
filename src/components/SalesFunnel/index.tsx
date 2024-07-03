import {useColorScheme} from 'react-native';
import Svg, {Polygon, Line, Text} from 'react-native-svg';

const SalesFunnel = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const width = 230;
  const height = 130;
  const funnelBgColor = isDarkMode ? '#0060A6' : '#B2DFFF';
  const lineColor = isDarkMode ? '#1A2A3D' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#3D3F44';
  const gridColor = isDarkMode ? '#848FA0' : '#DCDCDC';
  return (
    <Svg width={width} height={height}>
      <Polygon
        points={`50,20 ${width - 10},20 ${width - 60},${height} 100,${height}`}
        fill={funnelBgColor}
      />
      <Line
        x1="20"
        y1="43"
        x2={width - 20}
        y2="43"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Line
        x1="30"
        y1="66"
        x2={width - 30}
        y2="66"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Line
        x1="40"
        y1="87"
        x2={width - 40}
        y2="87"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Line
        x1="50"
        y1="107"
        x2={width - 50}
        y2="107"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Text
        x="135"
        y="13"
        fill="#848FA0"
        fontSize="15"
        fontWeight="400"
        textAnchor="middle">
        Воронка продаж
      </Text>
      <Text x="135" y="36" fill={textColor} fontSize="14" textAnchor="middle">
        12890
      </Text>
      <Text x="135" y="59" fill={textColor} fontSize="14" textAnchor="middle">
        1584
      </Text>
      <Text x="135" y="81" fill={textColor} fontSize="14" textAnchor="middle">
        182
      </Text>
      <Text x="135" y="102" fill={textColor} fontSize="14" textAnchor="middle">
        59
      </Text>
      <Text x="135" y="123" fill={textColor} fontSize="14" textAnchor="middle">
        28
      </Text>
      <Line
        x1="0"
        y1="43"
        x2="60"
        y2="43"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="66"
        x2="70"
        y2="66"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="87"
        x2="80"
        y2="87"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="107"
        x2="90"
        y2="107"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="129"
        x2="100"
        y2="129"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Text
        x="15"
        y="59"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        11,2%
      </Text>
      <Text
        x="15"
        y="80"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        18,7%
      </Text>
      <Text
        x="15"
        y="101"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        29,8%
      </Text>
      <Text
        x="15"
        y="122"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        48,1%
      </Text>
    </Svg>
  );
};

export default SalesFunnel;
