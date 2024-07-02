import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

export const ChartOrder = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        style.container,
        {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
      ]}></View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 426,
  },
});
