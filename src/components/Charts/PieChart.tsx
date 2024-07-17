import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, useColorScheme} from 'react-native';
import Svg, {Path, G, Text as SvgText} from 'react-native-svg';

interface IProps {
  data: Record<string, number>;
  width?: number;
  height?: number;
  colors: string[];
  innerRadiusRatio?: number;
}

export const PieChart: React.FC<IProps> = ({
  data = {},
  width = 150,
  height = 150,
  colors,
  innerRadiusRatio = 0.3,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const outerRadius = Math.min(width, height) / 2;
  const innerRadius = outerRadius * innerRadiusRatio;
  const center = {x: width / 2, y: height / 2};

  const total = Object.values(data).reduce((sum, value) => sum + value, 0);
  const animatedValues = useRef(
    Object.keys(data).reduce((acc, key) => {
      acc[key] = new Animated.Value(0);
      return acc;
    }, {}),
  ).current;

  useEffect(() => {
    Object.entries(data).forEach(([key, value]) => {
      Animated.timing(animatedValues[key], {
        toValue: value,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  }, [data]);

  const getPath = (startAngle, endAngle) => {
    const x1 = center.x + outerRadius * Math.cos(startAngle);
    const y1 = center.y + outerRadius * Math.sin(startAngle);
    const x2 = center.x + outerRadius * Math.cos(endAngle);
    const y2 = center.y + outerRadius * Math.sin(endAngle);

    const x3 = center.x + innerRadius * Math.cos(endAngle);
    const y3 = center.y + innerRadius * Math.sin(endAngle);
    const x4 = center.x + innerRadius * Math.cos(startAngle);
    const y4 = center.y + innerRadius * Math.sin(startAngle);

    const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  const getTextPosition = (startAngle, endAngle) => {
    const midAngle = (startAngle + endAngle) / 2;
    const textRadius = (outerRadius + innerRadius) / 2;
    return {
      x: center.x + textRadius * Math.cos(midAngle),
      y: center.y + textRadius * Math.sin(midAngle),
    };
  };

  return (
    <View style={[styles.container, {width, height}]}>
      <Svg width={width} height={height}>
        <G>
          {Object.entries(data).map(([key, value], index) => {
            const startAngle =
              index === 0
                ? 0
                : Object.entries(data)
                    .slice(0, index)
                    .reduce(
                      (sum, [, val]) => sum + (val / total) * 2 * Math.PI,
                      0,
                    );
            const endAngle = startAngle + (value / total) * 2 * Math.PI;
            const textPosition = getTextPosition(startAngle, endAngle);

            return (
              <React.Fragment key={key}>
                <AnimatedPath
                  d={animatedValues[key]?.interpolate({
                    inputRange: [0, value],
                    outputRange: [
                      getPath(startAngle, startAngle),
                      getPath(startAngle, endAngle),
                    ],
                  })}
                  fill={colors[index % colors.length]}
                />
                <SvgText
                  x={textPosition.x}
                  y={textPosition.y - 10}
                  fill={!isDarkMode ? '#FFFFFF' : '#3D3F44'}
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  alignmentBaseline="middle">
                  {key}
                </SvgText>
                <SvgText
                  x={textPosition.x}
                  y={textPosition.y + 5}
                  fill={!isDarkMode ? '#FFFFFF' : '#3D3F44'}
                  fontSize="16"
                  fontWeight="400"
                  textAnchor="middle"
                  alignmentBaseline="middle">
                  {value}
                </SvgText>
              </React.Fragment>
            );
          })}
        </G>
      </Svg>
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
});
