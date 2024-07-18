import {useColorScheme} from 'react-native';
import Svg, {Polygon, Line, Text} from 'react-native-svg';
import {formattedNumber} from '../../utils/helpers';

const SalesFunnel = ({expenditureData, voronkaData, ordersData, data}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const width = 230;
  const height = 110;
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
        x1="30"
        y1="43"
        x2={width - 20}
        y2="43"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Line
        x1="50"
        y1="66"
        x2={width - 30}
        y2="66"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Line
        x1="50"
        y1="89"
        x2={width - 30}
        y2="89"
        stroke={lineColor}
        strokeWidth="1.5"
      />
      <Line
        x1="50"
        y1="109"
        x2={width}
        y2="110"
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
        {formattedNumber(voronkaData?.clicks?.quantity)}
      </Text>
      <Text x="135" y="58" fill={textColor} fontSize="14" textAnchor="middle">
        {formattedNumber(voronkaData?.basket?.quantity)}
      </Text>
      <Text x="135" y="82" fill={textColor} fontSize="14" textAnchor="middle">
        {formattedNumber(voronkaData?.ordersCount?.quantity)}
      </Text>
      <Text x="135" y="105" fill={textColor} fontSize="14" textAnchor="middle">
        {formattedNumber(voronkaData?.buyoutsCount?.quantity)}
      </Text>
      <Line
        x1="0"
        y1="43"
        x2="63"
        y2="43"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="66"
        x2="76"
        y2="66"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="89"
        x2="89"
        y2="89"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Line
        x1="0"
        y1="109"
        x2="100"
        y2="109"
        stroke={gridColor}
        strokeWidth="1.5"
      />
      <Text
        x="15"
        y="57"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        {voronkaData?.basket?.percentage}
      </Text>
      <Text
        x="15"
        y="79"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        {voronkaData?.ordersCount?.percentage}
      </Text>
      <Text
        x="15"
        y="102"
        fill={textColor}
        fontSize="12px"
        fontWeight="700"
        textAnchor="start">
        {voronkaData?.buyoutsCount?.percentage}
      </Text>
    </Svg>
  );
};

export default SalesFunnel;
