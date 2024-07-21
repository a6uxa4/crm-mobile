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
        height={245}>
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#2898E9' : '#ADD1EB', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '01', y: 100},
              {x: '02', y: 200},
              {x: '03', y: 170},
              {x: '04', y: 180},
              {x: '05', y: 220},
              {x: '06', y: 180},
              {x: '07', y: 150},
              {x: '08', y: 80},
              {x: '09', y: 40},
              {x: '10', y: 200},
            ]}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#415FFF' : '#717FC8', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '01', y: 80},
              {x: '02', y: 90},
              {x: '03', y: 100},
              {x: '04', y: 120},
              {x: '05', y: 80},
              {x: '06', y: 40},
              {x: '07', y: 200},
              {x: '08', y: 90},
              {x: '09', y: 50},
              {x: '10', y: 60},
            ]}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#FB3D3D' : '#FB3D3D', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={[
              {x: '01', y: -30},
              {x: '03', y: -20},
              {x: '04', y: -20},
              {x: '05', y: -20},
              {x: '06', y: -10},
              {x: '07', y: -20},
              {x: '08', y: -20},
              {x: '09', y: -10},
              {x: '10', y: -30},
            ]}
          />
        </VictoryGroup>
        <VictoryLine
          interpolation="natural"
          style={{data: {stroke: '#FF9C07', strokeWidth: 1.5}}}
          data={[
            {x: '01', y: 200},
            {x: '02', y: 190},
            {x: '03', y: 120},
            {x: '04', y: 150},
            {x: '05', y: 170},
            {x: '06', y: 140},
            {x: '07', y: 160},
            {x: '08', y: 200},
            {x: '09', y: 130},
            {x: '10', y: 160},
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{data: {stroke: '#0181F8', strokeWidth: 1.5}}}
          data={[
            {x: '01', y: 160},
            {x: '02', y: 130},
            {x: '03', y: 200},
            {x: '04', y: 160},
            {x: '05', y: 140},
            {x: '06', y: 130},
            {x: '07', y: 120},
            {x: '08', y: 160},
            {x: '09', y: 170},
            {x: '10', y: 130},
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: {
              stroke: '#3BDF02',
              strokeWidth: 1.5,
              strokeDasharray: '5,5',
              strokeDashoffset: 2,
            },
          }}
          data={[
            {x: '01', y: 140},
            {x: '02', y: 170},
            {x: '03', y: 200},
            {x: '04', y: 140},
            {x: '05', y: 180},
            {x: '06', y: 150},
            {x: '07', y: 180},
            {x: '08', y: 200},
            {x: '09', y: 140},
            {x: '10', y: 120},
          ]}
        />
        <VictoryLine
          interpolation="natural"
          style={{
            data: {
              stroke: '#B777CD',
              strokeWidth: 1.5,
              strokeDasharray: '5,5',
              strokeDashoffset: 2,
            },
          }}
          data={[
            {x: '01', y: 90},
            {x: '02', y: 120},
            {x: '03', y: 30},
            {x: '04', y: 50},
            {x: '05', y: 200},
            {x: '06', y: 150},
            {x: '07', y: 120},
            {x: '08', y: 160},
            {x: '09', y: 50},
            {x: '10', y: 70},
          ]}
        />
        <VictoryAxis
          gridComponent={<></>}
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
          gridComponent={<></>}
          tickValues={[0, 90, 170, 250]}
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
