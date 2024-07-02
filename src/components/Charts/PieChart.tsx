import {View, useColorScheme} from 'react-native';
import Svg, {Path, G, Text as SvgText, Circle} from 'react-native-svg';

const PieChart = ({data, colors}: any) => {
  const total =
    data &&
    Object.entries(data).reduce(
      (sum: any, [key, value]: any) => sum + value,
      0,
    );
  let startAngle = 0;

  const isDarkMode = useColorScheme() === 'dark';

  return (
    total && (
      <View style={{alignItems: 'center'}}>
        <Svg height="150" width="150" viewBox="-1 -1 2 2">
          {Object.entries(data).map(([key, value]: any, index) => {
            const angle = (value / total) * 359.9;
            const largeArcFlag = angle > 180 ? 1 : 0;
            const endAngle = startAngle + angle;

            const x1 = Math.cos((startAngle * Math.PI) / 180);
            const y1 = Math.sin((startAngle * Math.PI) / 180);
            const x2 = Math.cos((endAngle * Math.PI) / 180);
            const y2 = Math.sin((endAngle * Math.PI) / 180);

            const pathData = `M ${x1} ${y1} A 1 1 0 ${largeArcFlag} 1 ${x2} ${y2} L 0 0`;

            const midAngle = startAngle + angle / 5;
            const textX = Math.cos((midAngle * Math.PI) / 180) * 0.5;
            const textY = Math.sin((midAngle * Math.PI) / 180) * 0.6;

            startAngle = endAngle;

            return (
              <G key={index}>
                <Path
                  d={pathData}
                  fill={colors[index]}
                  stroke={isDarkMode ? '#1A2A3D' : 'white'}
                  strokeWidth="0.01"
                />
                <SvgText
                  x={textX}
                  y={textY}
                  fontSize="0.2"
                  textAnchor="middle"
                  fill="white"
                  fontWeight="bold">
                  {key}
                </SvgText>
              </G>
            );
          })}
          <Circle r="0.32" fill={isDarkMode ? '#1A2A3D' : 'white'} />
        </Svg>
      </View>
    )
  );
};

export default PieChart;
