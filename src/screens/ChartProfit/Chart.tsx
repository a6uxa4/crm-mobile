import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLine,
  VictoryPortal,
} from 'victory-native';
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

  const maxValue = Math.max(
    ...data.salesReportsDto.map(item =>
      Math.max(item.revenue, item.expenses, item.profit, item.loss),
    ),
  );

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
        height={160}
        domain={{y: [0, maxValue]}}>
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
          <VictoryPortal>
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
          </VictoryPortal>
        )}
        {lineVisible.isRevenue && (
          <VictoryPortal>
            <VictoryLine
              interpolation="natural"
              style={{data: {stroke: '#88C0FF', strokeWidth: 1.5}}}
              data={data?.salesReportsDto.map(item => ({
                x: item.hourOrDayOrWeek,
                y: item.revenue,
              }))}
            />
          </VictoryPortal>
        )}
        {lineVisible.isProfit && (
          <VictoryPortal>
            <VictoryLine
              interpolation="natural"
              style={{data: {stroke: '#04D632', strokeWidth: 1.5}}}
              data={data?.salesReportsDto.map(item => ({
                x: item.hourOrDayOrWeek,
                y: item.profit,
              }))}
            />
          </VictoryPortal>
        )}
        {lineVisible.isMargin && (
          <VictoryPortal>
            <VictoryLine
              interpolation="natural"
              style={{data: {stroke: '#B777CD', strokeWidth: 1.5}}}
              data={data?.salesReportsDto.map(item => ({
                x: item.hourOrDayOrWeek,
                y: item.loss,
              }))}
            />
          </VictoryPortal>
        )}
        <VictoryAxis
          gridComponent={<></>}
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
          gridComponent={<></>}
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
