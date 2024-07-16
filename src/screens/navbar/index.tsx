import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  LayoutChangeEvent,
  useColorScheme,
} from 'react-native';
import {ModalDialog, ModalDialogHandle} from 'react-native-propel-kit';
import {MiniCalendar} from '../../components/MiniCalendar';

interface FilterType {
  productId: string;
  selectType: string;
}

interface IProps {
  setFilter: (filter: Partial<FilterType>) => void;
  filter: FilterType;
}

export const Navbar = ({setFilter, filter}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [activeTab, setActiveTab] = useState(0);
  const [translateX] = useState(new Animated.Value(0));
  const [containerWidth, setContainerWidth] = useState(0);
  const [period, setPeriod] = useState({startPeriod: null, endPeriod: null});

  const modalDialogRef = useRef<ModalDialogHandle>(null);

  const tabs = ['сегодня', 'неделя', 'месяц', 'год', 'период'];

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const handleTabPress = (index: number) => {
    if (index === 4) {
      modalDialogRef.current.show();
    }
    setActiveTab(index);
    setFilter({selectType: String(index)});
    const tabWidth = containerWidth / tabs.length;
    Animated.spring(translateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  const handlePeriodChange = newPeriod => {
    setPeriod(newPeriod);
  };

  return (
    <>
      <ModalDialog
        title="Выберите период"
        confirmTitle="Применить период"
        cancelTitle="Отмена"
        ref={modalDialogRef}
        onCancel={() => {
          modalDialogRef.current.hide();
          handleTabPress(0);
        }}
        onConfirm={() => {}}>
        <MiniCalendar value={period} onChange={handlePeriodChange} />
      </ModalDialog>
      <View
        onLayout={handleLayout}
        style={{
          width: '90%',
          height: 40,
          backgroundColor: isDarkMode ? '#1A2A3D' : '#DBDDE6',
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
              height: '100%',
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
    </>
  );
};
