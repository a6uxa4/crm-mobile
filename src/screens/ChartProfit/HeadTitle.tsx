import {StyleSheet, useColorScheme, View, Text} from 'react-native';
import {Badge} from '../../components/Badge';

export const HeadTitle = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={style.header}>
      <Text
        style={[style.headerText, {color: isDarkMode ? '#FFFFFF' : '#3D3F44'}]}>
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
  );
};

const style = StyleSheet.create({
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
