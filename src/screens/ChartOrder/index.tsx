import React, {useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {HeadTitle} from './HeadTitle';
import {Chart} from './Chart';
import {Footer} from './Footer';
import {FilterType, IOrdersData} from '../../common';

interface IProps {
  data: IOrdersData;
  filter: FilterType;
  setFilter: (filter: Partial<FilterType>) => void;
}

export const ChartOrder = ({data, filter}: IProps) => {
  if (!data) return null;

  const isDarkMode = useColorScheme() === 'dark';

  const [lineVisible, setLineVisible] = useState({
    isAdvertExpenses: false,
    isCtr: false,
    isCpc: false,
  });

  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
      ]}>
      <HeadTitle data={data} />
      <Chart lineVisible={lineVisible} filter={filter} data={data} />
      <Footer
        lineVisible={lineVisible}
        setLineVisible={setLineVisible}
        filter={filter}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
});
