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
import {FilterType, IOrdersData} from '../../common';

interface IProps {
  lineVisible: {isAdvertExpenses: boolean; isCtr: boolean; isCpc: boolean};
  filter: FilterType;
  data: IOrdersData;
}

export const Chart = ({lineVisible, filter, data}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const calcLengthGap = (selectType, smSelectType) => {
    const lengths = {
      0: 30,
      1: smSelectType === 0 ? 60 : 5,
      2: smSelectType === 0 ? 60 : 110,
      3: smSelectType === 0 ? 5 : 30,
    };

    return data?.orderReportsDto?.length * (lengths[selectType] || 0);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <VictoryChart
        theme={VictoryTheme.material}
        width={calcLengthGap(+filter.selectType, +filter.smSelectType)}
        padding={{top: 20, bottom: 50, left: 50, right: 50}}
        height={245}>
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#2898E9' : '#ADD1EB', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.orderReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.ordersCount,
            }))}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#415FFF' : '#717FC8', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.orderReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.ransoms,
            }))}
          />
          <VictoryBar
            style={{data: {fill: isDarkMode ? '#FB3D3D' : '#FB3D3D', width: 8}}}
            cornerRadius={{top: 2, bottom: 2}}
            data={data?.orderReportsDto.map(item => ({
              x: item.hourOrDayOrWeek,
              y: item.returns,
            }))}
          />
        </VictoryGroup>
        {lineVisible.isAdvertExpenses && (
          <VictoryPortal>
            <VictoryLine
              animate={{
                duration: 1000,
                onLoad: {duration: 500},
              }}
              interpolation="natural"
              style={{data: {stroke: '#0181F8', strokeWidth: 1.5}}}
              data={data?.orderReportsDto.map(item => ({
                x: item.hourOrDayOrWeek,
                y: item.advertExpenses,
              }))}
            />
          </VictoryPortal>
        )}
        {lineVisible.isCpc && (
          <VictoryPortal>
            <VictoryLine
              animate={{
                duration: 1000,
                onLoad: {duration: 500},
              }}
              interpolation="natural"
              style={{
                data: {
                  stroke: '#3BDF02',
                  strokeWidth: 1.5,
                  strokeDasharray: '5,5',
                  strokeDashoffset: 2,
                },
              }}
              data={data?.orderReportsDto.map(item => ({
                x: item.hourOrDayOrWeek,
                y: item.cpc,
              }))}
            />
          </VictoryPortal>
        )}
        {lineVisible.isCtr && (
          <VictoryPortal>
            <VictoryLine
              animate={{
                duration: 1000,
                onLoad: {duration: 500},
              }}
              interpolation="natural"
              style={{
                data: {
                  stroke: '#B777CD',
                  strokeWidth: 1.5,
                  strokeDasharray: '5,5',
                  strokeDashoffset: 2,
                },
              }}
              data={data?.orderReportsDto.map(item => ({
                x: item.hourOrDayOrWeek,
                y: item.ctr,
              }))}
            />
          </VictoryPortal>
        )}
        <VictoryAxis
          gridComponent={<></>}
          tickValues={data?.orderReportsDto.map(item => item.hourOrDayOrWeek)}
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
          tickFormat={t => `${Math.round(t)}`}
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
