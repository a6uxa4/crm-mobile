import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Progress} from '../../components/Progress';
import {Chip} from '../../components/Chip';
import {ISalesData} from '../../common';

interface IProps {
  data: ISalesData;
}

export const Revenues = ({data}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.revenuesContainer}>
      <View
        style={[
          styles.revenuesLeft,
          {backgroundColor: isDarkMode ? '#018FF5' : '#63BDFF'},
        ]}>
        <View style={styles.revenuesHeader}>
          <Text
            style={[
              styles.revenuesTitle,
              {
                color: isDarkMode ? 'white' : 'black',
                fontWeight: isDarkMode ? '500' : '400',
              },
            ]}>
            Выручка
          </Text>
          <Chip
            backgroundColor={isDarkMode ? '#0F72BA' : '#2F2F2F4D'}
            title="2,8%"
            isShort
          />
        </View>
        <Text style={styles.revenuesSum}>79 980 ₽</Text>
        <View style={styles.innerContainer}>
          <Text
            style={[
              styles.innerTitle,
              {textAlign: 'right', color: '#3D3F44B2'},
            ]}>
            +1980
          </Text>
          <Progress
            progress={30}
            backgroundColor={isDarkMode ? '#0F72BA' : '#608CAC'}
            borderColor={isDarkMode ? '#43B0FF' : '#C5E6FF'}
          />
          <Text
            style={[
              styles.innerTitle,
              {textAlign: 'center', color: '#3D3F44B2'},
            ]}>
            план 78000
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.revenuesRight,
          {backgroundColor: isDarkMode ? '#07CC1B' : '#6DFB7B'},
        ]}>
        <View style={styles.revenuesHeader}>
          <Text
            style={[
              styles.revenuesTitle,
              {color: isDarkMode ? 'white' : 'black'},
            ]}>
            Прибыль
          </Text>
          <Chip
            backgroundColor={isDarkMode ? '#119d21' : '#2F2F2F4D'}
            title="3,5%"
            isShort={false}
          />
        </View>
        <Text style={styles.revenuesSum}>12 800 ₽</Text>
        <View style={styles.innerContainer}>
          <Text
            style={[
              styles.innerTitle,
              {textAlign: 'right', color: '#3D3F44B2'},
            ]}>
            +1980
          </Text>
          <Progress
            progress={30}
            backgroundColor={isDarkMode ? '#119d21' : '#2F2F2F4D'}
            borderColor={isDarkMode ? '#2CEB3E' : '#B5FEBC'}
          />
          <Text
            style={[
              styles.innerTitle,
              {textAlign: 'center', color: '#3D3F44B2'},
            ]}>
            план 78000
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  revenuesContainer: {
    marginTop: 20,
    width: '100%',
    height: 150,
    paddingHorizontal: 17,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  revenuesLeft: {
    width: '48%',
    height: 150,
    borderRadius: 16,
    paddingTop: 14,
    paddingLeft: 17,
    paddingRight: 10,
  },
  revenuesHeader: {
    display: 'flex',
    flexDirection: 'row',
    height: 21,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  revenuesTitle: {
    fontSize: 16,
  },
  revenuesSum: {
    fontWeight: '600',
    color: '#1A2A3D',
    fontSize: 26,
  },
  innerContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 5,
  },
  innerTitle: {
    fontWeight: '500',
    fontSize: 14,
  },
  revenuesRight: {
    width: '48%',
    height: 150,
    borderRadius: 16,
    paddingTop: 14,
    paddingLeft: 17,
    paddingRight: 10,
  },
});
