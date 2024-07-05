import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {HeadTitle} from './HeadTitle';
import {Chart} from './Chart';
import {Footer} from './Footer';

export const ChartOrder = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
      ]}>
      <HeadTitle />
      <Chart />
      <Footer />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 440,
    display: 'flex',
    alignItems: 'center',
  },
});
