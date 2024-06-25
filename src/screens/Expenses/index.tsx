import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Chip} from '../../components/Chip';

export const Expenses = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <View
          style={[
            styles.containerInner,
            {backgroundColor: isDarkMode ? '#E26060' : '#FFADAD', padding: 14},
          ]}>
          <View style={styles.expensesHeader}>
            <Text
              style={[
                styles.expensesTitle,
                {
                  color: isDarkMode ? 'white' : 'black',
                  fontWeight: isDarkMode ? '500' : '400',
                },
              ]}>
              Выручка
            </Text>
            <Chip backgroundColor="#2F2F2F4D" title="2,8%" isShort />
          </View>
          <Text style={styles.expensesSum}>79 980 ₽</Text>
        </View>
        <View
          style={[
            styles.containerInner,
            {
              backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF',
              padding: 10,
              paddingLeft: 15,
            },
          ]}>
          <View style={styles.containerInnerB}>
            <Text
              style={[
                styles.titleInnerB,
                {
                  color: isDarkMode ? '#848FA0' : '#2F2F2F80',
                },
              ]}>
              Рентабельность
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  color: isDarkMode ? '#FFFFFF' : '#3D3F44',
                }}>
                15%
              </Text>
              <Chip
                backgroundColor={isDarkMode ? '#FFFFFF26' : '#2F2F2F4D'}
                title="3,5%"
                isShort
              />
            </View>
          </View>
          <View style={styles.containerInnerB}>
            <Text
              style={[
                styles.titleInnerB,
                {
                  color: isDarkMode ? '#848FA0' : '#2F2F2F80',
                },
              ]}>
              Маржа
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  color: isDarkMode ? '#FFFFFF' : '#3D3F44',
                }}>
                28%
              </Text>
              <Chip
                backgroundColor={isDarkMode ? '#FFFFFF26' : '#2F2F2F4D'}
                title="3,5%"
                isShort
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.containerRight,
          {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
        ]}>
            
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    height: 150,
    paddingHorizontal: 17,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  containerLeft: {
    width: '48%',
    height: 235,
    display: 'flex',
    justifyContent: 'space-between',
  },
  containerInner: {
    width: '100%',
    height: 110,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  expensesHeader: {
    display: 'flex',
    flexDirection: 'row',
    height: 21,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expensesTitle: {
    fontSize: 16,
  },
  expensesSum: {
    fontWeight: '600',
    color: '#1A2A3D',
    fontSize: 26,
  },
  containerRight: {
    width: '48%',
    height: 235,
    borderRadius: 16,
  },
  containerInnerB: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  titleInnerB: {
    fontWeight: '400',
    fontSize: 15,
  },
});
