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

export const Analize = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [activeTab, setActiveTab] = useState(0);
  const [translateX] = useState(new Animated.Value(0));
  const [containerWidth, setContainerWidth] = useState(0);

  const tabs = ['Остатки', 'АВС-анализ', 'Расходы', 'Реклама'];

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
    <View style={style.wrapper}>
      <View
        style={[
          style.container,
          {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
        ]}>
        <View
          onLayout={handleLayout}
          style={{
            width: '90%',
            height: 35,
            backgroundColor: isDarkMode ? '#3F4353' : '#E8EAF2',
            borderRadius: 50,
            marginTop: 20,
            padding: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              width: `${100 / tabs.length}%`,
              height: '100%',
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
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 17,
  },
  container: {
    width: '100%',
    height: 340,
    marginTop: 105,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
  },
});
