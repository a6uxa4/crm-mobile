import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLine,
} from 'victory-native';
import {G} from 'react-native-svg';
import {ScrollView, useColorScheme} from 'react-native';

export const Chart = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const hourlyData = Array.from({length: 24}, (_, i) =>
    (i + 1 + '').padStart(2, '0'),
  );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <VictoryChart
        theme={VictoryTheme.material}
        width={hourlyData.length * 50}
        padding={{top: 20, bottom: 50, left: 50, right: 50}}
        height={180}>
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#048FF3' : '#70C3FF', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '01', y: 4},
              {x: '02', y: 4},
              {x: '03', y: 4},
              {x: '04', y: 4},
              {x: '05', y: 4},
              {x: '06', y: 4},
              {x: '07', y: 4},
              {x: '08', y: 4},
              {x: '09', y: 4},
              {x: '10', y: 4},
            ]}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#AE014A' : '#FF9D9D', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '01', y: 3},
              {x: '02', y: 3},
              {x: '03', y: 3},
              {x: '04', y: 3},
              {x: '05', y: 3},
              {x: '06', y: 3},
              {x: '07', y: 3},
              {x: '08', y: 3},
              {x: '09', y: 3},
              {x: '10', y: 3},
            ]}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#0FC737' : '#01E533', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '01', y: 2},
              {x: '03', y: 2},
              {x: '04', y: 2},
              {x: '05', y: 2},
              {x: '06', y: 2},
              {x: '07', y: 2},
              {x: '08', y: 2},
              {x: '09', y: 2},
              {x: '10', y: 2},
            ]}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#D10404' : '#FB3D3D', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '02', y: -0.3},
              {x: '03', y: -0.4},
              {x: '07', y: -0.4},
              {x: '08', y: -0.2},
              {x: '09', y: 2},
              {x: '10', y: 2},
            ]}
          />
        </VictoryGroup>
        <VictoryLine
          interpolation="natural"
          style={{data: {stroke: '#88C0FF', strokeWidth: 1.5}}}
          data={[
            {x: '01', y: 1},
            {x: '02', y: 4},
            {x: '03', y: 3},
            {x: '04', y: 4},
            {x: '05', y: 2},
            {x: '06', y: 3},
            {x: '07', y: 4},
            {x: '08', y: 3},
            {x: '09', y: 2},
            {x: '10', y: 1},
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{data: {stroke: '#04D632', strokeWidth: 1.5}}}
          data={[
            {x: '01', y: 4},
            {x: '02', y: 2},
            {x: '03', y: 1},
            {x: '04', y: 2},
            {x: '05', y: 2},
            {x: '06', y: 1},
            {x: '07', y: 4},
            {x: '08', y: 3},
            {x: '09', y: 1},
            {x: '10', y: 2},
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{data: {stroke: '#B777CD', strokeWidth: 1.5}}}
          data={[
            {x: '01', y: 2},
            {x: '02', y: 3},
            {x: '03', y: 4},
            {x: '04', y: 1},
            {x: '05', y: 3},
            {x: '06', y: 2},
            {x: '07', y: 1},
            {x: '08', y: 3},
            {x: '09', y: 2},
            {x: '10', y: 4},
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: {
              stroke: '#03ABC2',
              strokeWidth: 1.5,
              strokeDasharray: '5,5',
              strokeDashoffset: 2,
            },
          }}
          data={[
            {x: '01', y: 3},
            {x: '02', y: 4},
            {x: '03', y: 3},
            {x: '04', y: 2},
            {x: '05', y: 1},
            {x: '06', y: 4},
            {x: '07', y: 1},
            {x: '08', y: 2},
            {x: '09', y: 4},
            {x: '10', y: 3},
          ]}
        />
        <VictoryAxis
          gridComponent={<G />}
          tickValues={hourlyData}
          style={{
            axis: {
              stroke: isDarkMode ? '#FFFFFF' : '#405385',
              strokeWidth: '0.75',
            },
            tickLabels: {
              fill: isDarkMode ? '#9EA1AB' : '#999A9D',
              fontSize: 12,
              fontWeight: '400',
            },
          }}
        />
        <VictoryAxis
          gridComponent={<G />}
          tickValues={[1, 2, 4, 5]}
          dependentAxis
          offsetX={45}
          offsetY={20}
          style={{
            axis: {
              stroke: isDarkMode ? '#FFFFFF' : '#405385',
              strokeWidth: '0.75',
            },
            tickLabels: {
              fill: isDarkMode ? '#9EA1AB' : '#999A9D',
              fontSize: 12,
              fontWeight: '400',
            },
          }}
        />
      </VictoryChart>
    </ScrollView>
  );
};
