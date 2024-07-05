import {StyleSheet, useColorScheme, View} from 'react-native';

export const Footer = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        style.containerChecked,
        {backgroundColor: isDarkMode ? '#414451' : '#F4F7F9'},
      ]}></View>
  );
};

const style = StyleSheet.create({
  containerChecked: {
    width: 345,
    height: 100,
    marginVertical: 20,
    borderRadius: 8,
  },
});
