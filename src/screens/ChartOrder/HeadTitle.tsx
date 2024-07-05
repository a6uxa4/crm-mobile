import {StyleSheet, useColorScheme, View, Text} from 'react-native';
import {Badge} from '../../components/Badge';

export const HeadTitle = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={style.header}>
      <Text
        style={[style.headerText, {color: isDarkMode ? '#FFFFFF' : '#3D3F44'}]}>
        Заказы
      </Text>
      <View style={style.containerInfo}>
        <View style={style.infoInner}>
          <Badge backgroundColor={isDarkMode ? '#2898E9' : '#ADD0EB'} />
          <Text
            style={[
              style.infoSum,
              {color: isDarkMode ? '#2898E9' : '#85B2D6'},
            ]}>
            95
          </Text>
          <Text
            style={[
              style.infoText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            заказы
          </Text>
        </View>
        <View style={style.infoInner}>
          <Badge backgroundColor={isDarkMode ? '#415FFF' : '#717FC8'} />
          <Text
            style={[
              style.infoSum,
              {color: isDarkMode ? '#415FFF' : '#85B2D6'},
            ]}>
            42
          </Text>
          <Text
            style={[
              style.infoText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            выкупы
          </Text>
        </View>
        <View style={style.infoInner}>
          <Badge backgroundColor="#FF6580" />
          <Text style={[style.infoSum, {color: '#FB3D3D'}]}>24</Text>
          <Text
            style={[
              style.infoText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            возвраты
          </Text>
        </View>
        <View style={style.infoInner}>
          <Text style={[style.infoSum, {color: '#909194'}]}>53</Text>
          <Text
            style={[
              style.infoText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            отказы
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 25,
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
    fontWeight: 300,
    fontSize: 12,
  },
  infoSum: {
    fontWeight: 600,
    fontSize: 15,
  },
});
