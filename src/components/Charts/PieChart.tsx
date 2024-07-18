import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';

interface IProps {
  data: Record<string, number>;
  width?: number;
  height?: number;
  colors: string[];
}

export const PieChart: React.FC<IProps> = ({
  data = {},
  width = 250,
  height = 250,
  colors,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const chartData = Object.entries(data).map(([key, value]) => ({
    x: value ? key: null,
    y: value,
    label: value ? `${key}\n${value}`: ''
  }));

  return (
    <View style={[styles.container, { width, height }]}>
      <VictoryPie
        data={chartData}
        width={width}
        height={height}
        colorScale={colors}
        innerRadius={25}
        padAngle={1}
        labelRadius={({ innerRadius }) => {
          const radius = typeof innerRadius === 'number' ? innerRadius : 0;
          return radius + 20;
        }}
        style={{
          labels: {
            fill: isDarkMode ? 'white': 'black',
            fontSize: 16,
            fontWeight: 'bold'
          }
        }}
        labelComponent={
          <VictoryLabel
            textAnchor="middle"
            verticalAnchor="middle"
            lineHeight={1.2}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});