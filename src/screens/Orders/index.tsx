import {View, StyleSheet, Text, useColorScheme, Dimensions} from 'react-native';
import {useGetReportsQuery} from '../../services/base.service';
// import {
//   VictoryChart,
//   VictoryBar,
//   VictoryLine,
//   VictoryAxis,
//   VictoryTheme,
// } from 'victory-native';

export const Orders = () => {
  const {width} = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  const {data} = useGetReportsQuery();

  const chartData = data?.orderReportsDto?.map((item: any, index: number) => ({
    x: index + 1,
    orders: item.ordersCount,
    ransoms: item.ransoms,
    rejects: item.rejects,
    returns: item.returns,
  }));

  const Header = [
    {color: '#2898E9', text: 'заказы', fieldName: 'allOrdersCount'},
    {color: '#415FFF', text: 'выкупы', fieldName: 'allRansoms'},
    {color: '#FF6580', text: 'возвраты', fieldName: 'allReturns'},
    {color: '#909194', text: 'отказы', fieldName: 'allRejects'},
  ];

  const dataFrom = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  return (
    <View style={style.wrapper}>
      <Text
        style={{
          textAlign: 'center',
          color: isDarkMode ? '' : '#3D3F44',
          fontSize: 20,
          fontWeight: 600,
        }}>
        Заказы
      </Text>
      <View style={style.main}>
        <View style={style.header}>
          {Header.map((item: any, index: number) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 3,
                  alignItems: 'center',
                }}
                key={index}>
                {index !== 3 && (
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 7,
                      backgroundColor: item.color,
                    }}
                  />
                )}
                <Text
                  style={{fontSize: 15, fontWeight: 600, color: item.color}}>
                  {data && data[item.fieldName]}
                </Text>
                <Text style={{fontSize: 13, fontWeight: 300}}>{item.text}</Text>
              </View>
            );
          })}
        </View>
        <View style={style.container}>
          {/* {chartData && (
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={{x: 20}}
              width={width - 40}
              height={300}>
              <VictoryAxis
                tickValues={chartData.map((d: any) => d.x)}
                style={{
                  axis: {stroke: 'transparent'},
                  ticks: {stroke: 'transparent'},
                  tickLabels: {fill: '#909194', fontSize: 10},
                }}
              />
              <VictoryBar
                data={chartData}
                x="x"
                y="orders"
                style={{data: {fill: '#2898E9'}}}
              />
              <VictoryBar
                data={chartData}
                x="x"
                y="ransoms"
                style={{data: {fill: '#415FFF'}}}
              />
              <VictoryLine
                data={chartData}
                x="x"
                y="rejects"
                style={{data: {stroke: '#909194', strokeWidth: 2}}}
              />
              <VictoryLine
                data={chartData}
                x="x"
                y="returns"
                style={{data: {stroke: '#FF6580', strokeWidth: 2}}}
              />
            </VictoryChart>
          )} */}
          {/* <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryBar data={dataFrom} x="quarter" y="earnings" />
          </VictoryChart> */}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 17,
    height: 440,
  },
  main: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
