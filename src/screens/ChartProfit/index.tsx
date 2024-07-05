import {useState} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Badge} from '../../components/Badge';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLine,
} from 'victory-native';
import {G} from 'react-native-svg';

export const ChartProfit = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [activeTab, setActiveTab] = useState(0);
  const [translateX] = useState(new Animated.Value(0));
  const [containerWidth, setContainerWidth] = useState(0);

  const tabs = ['по часам', 'по дням'];

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    const tabWidth = containerWidth / tabs.length;
    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  const hourlyData = Array.from({length: 24}, (_, i) =>
    (i + 1 + '').padStart(2, '0'),
  );

  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
      ]}>
      <View
        onLayout={handleLayout}
        style={{
          width: 160,
          height: 40,
          backgroundColor: isDarkMode ? '#3F4353' : '#E8EAF2',
          borderRadius: 50,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'relative',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            left: activeTab === 0 ? 3 : -3,
            width: `${100 / tabs.length}%`,
            height: '85%',
            backgroundColor: isDarkMode ? '#6B7188' : '#FFFFFF',
            borderRadius: 50,
            transform: [{translateX}],
          }}
        />
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(index)}
            style={{
              height: '100%',
              borderRadius: 50,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: isDarkMode
                  ? activeTab === index
                    ? '#FFFFFF'
                    : '#8899AA'
                  : '#3D3F44',
              }}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={style.header}>
        <Text
          style={[
            style.headerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          Прибыль / Выручка
        </Text>
        <View style={style.containerInfo}>
          <View style={style.infoInner}>
            <Badge backgroundColor={isDarkMode ? '#048FF3' : '#70C3FF'} />
            <Text
              style={[
                style.infoText,
                {color: isDarkMode ? '#848FA0' : '#3D3F44'},
              ]}>
              выручка
            </Text>
          </View>
          <View style={style.infoInner}>
            <Badge backgroundColor={isDarkMode ? '#AE014A' : '#FF9D9D'} />
            <Text
              style={[
                style.infoText,
                {color: isDarkMode ? '#848FA0' : '#3D3F44'},
              ]}>
              расходы
            </Text>
          </View>
          <View style={style.infoInner}>
            <Badge backgroundColor={isDarkMode ? '#0FC737' : '#01E533'} />
            <Text
              style={[
                style.infoText,
                {color: isDarkMode ? '#848FA0' : '#3D3F44'},
              ]}>
              прибыль
            </Text>
          </View>
          <View style={style.infoInner}>
            <Badge backgroundColor={isDarkMode ? '#D10404' : '#FB3D3D'} />
            <Text
              style={[
                style.infoText,
                {color: isDarkMode ? '#848FA0' : '#3D3F44'},
              ]}>
              убыток
            </Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={hourlyData.length * 50}
          padding={{top: 20, bottom: 50, left: 50, right: 50}}
          height={180}>
          <VictoryGroup offset={10}>
            <VictoryBar
              style={{data: {fill: '#048FF3', width: 8}}}
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
              style={{data: {fill: '#AE014A', width: 8}}}
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
              style={{data: {fill: '#0FC737', width: 8}}}
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
              style={{data: {fill: '#D10404', width: 8}}}
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
                fontWeight: 400,
              },
            }}
          />
          <VictoryAxis
            gridComponent={<G />}
            tickValues={[1, 2, 4, 5]}
            dependentAxis
            offsetY={20}
            style={{
              axis: {
                stroke: isDarkMode ? '#FFFFFF' : '#405385',
                strokeWidth: '0.75',
              },
              tickLabels: {
                fill: isDarkMode ? '#9EA1AB' : '#999A9D',
                fontSize: 12,
                fontWeight: 400,
              },
            }}
          />
        </VictoryChart>
      </ScrollView>
      <View
        style={[
          style.containerChecked,
          {backgroundColor: isDarkMode ? '#414451' : '#F4F7F9'},
        ]}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 426,
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    marginTop: 26,
  },
  headerText: {
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
  },
  containerInfo: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  infoInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  infoText: {
    fontWeight: 400,
    fontSize: 12,
  },
  containerChecked: {
    width: 345,
    height: 100,
    marginVertical: 20,
    borderRadius: 8,
  },
});
