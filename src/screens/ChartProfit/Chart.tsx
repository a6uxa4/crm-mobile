import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLine,
  VictoryArea,
} from 'victory-native';
import {G} from 'react-native-svg';
import {ScrollView, useColorScheme} from 'react-native';
import {ISalesData} from '../../common';

interface FilterType {
  productId: string;
  selectType: string;
  startPeriod: string;
  endPeriod: string;
}

interface IProps {
  data: ISalesData;
  filter: FilterType;
  lineVisible: {
    isRevenue: boolean;
    isProfit: boolean;
    isProfitability: boolean;
    isMargin: boolean;
  };
}

export const Chart = ({data, lineVisible, filter}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  if (!data || !data.salesReportsDto || data.salesReportsDto.length === 0) {
    return null;
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <VictoryChart
        theme={VictoryTheme.material}
        width={
          +filter.selectType === 3
            ? data?.salesReportsDto.length * 15
            : data?.salesReportsDto.length * 60
        }
        padding={{top: 20, bottom: 50, left: 50, right: 50}}
        height={160}>
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#048FF3' : '#70C3FF', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.salesReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.revenue,
            }))}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#AE014A' : '#FF9D9D', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.salesReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.expenses,
            }))}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#0FC737' : '#01E533', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.salesReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.profit,
            }))}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#D10404' : '#FB3D3D', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.salesReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.loss,
            }))}
          />
        </VictoryGroup>
        {lineVisible.isProfitability && (
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
            data={data?.salesReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.profitability,
            }))}
          />
        )}
        {lineVisible.isRevenue && (
          <VictoryLine
            interpolation="natural"
            style={{data: {stroke: '#88C0FF', strokeWidth: 1.5}}}
          />
        )}
        {lineVisible.isProfit && (
          <VictoryLine
            interpolation="natural"
            style={{data: {stroke: '#04D632', strokeWidth: 1.5}}}
          />
        )}
        {lineVisible.isMargin && (
          <VictoryLine
            interpolation="natural"
            style={{data: {stroke: '#B777CD', strokeWidth: 1.5}}}
          />
        )}
        <VictoryAxis
          gridComponent={<G />}
          tickValues={data?.salesReportsDto.map(item => item.hourOrDayOrWeek)}
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
          dependentAxis
          offsetX={45}
          offsetY={20}
          tickFormat={t => `${Math.round(t)}`}
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
