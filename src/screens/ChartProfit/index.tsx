import {useState} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Badge} from '../../components/Badge';

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
});
