import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {CircleChart} from '../../components/Circle';
import {Badge} from '../../components/Badge';
import SalesFunnel from '../../components/SalesFunnel';

export const Publicity = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={style.container}>
      <View style={style.containerTop}>
        <CircleChart
          percentage={18}
          width={90}
          height={90}
          strokeWidth={8}
          text="ДРР"
        />
        <View style={style.wrapper}>
          <View style={style.containerWrapper}>
            <View style={style.containerInner}>
              <Badge backgroundColor={isDarkMode ? '#22AFFF' : '#039BF1'} />
              <Text
                style={[
                  style.containerText,
                  {color: isDarkMode ? '#848FA0' : '#3D3F44'},
                ]}>
                Расходы на рекламу
              </Text>
            </View>
            <Text
              style={[
                style.containerSum,
                {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
              ]}>
              763 000 ₽
            </Text>
          </View>
          <View style={style.containerWrapper}>
            <View style={style.containerInner}>
              <Badge backgroundColor={isDarkMode ? '#0060A6' : '#9DD6FF'} />
              <Text
                style={[
                  style.containerText,
                  {color: isDarkMode ? '#848FA0' : '#3D3F44'},
                ]}>
                Выручка
              </Text>
            </View>
            <Text
              style={[
                style.containerSum,
                {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
              ]}>
              4 240 000 ₽
            </Text>
          </View>
        </View>
      </View>
      <View style={style.funnelContainer}>
        <View style={style.funnelInner}>
          <Text
            style={[
              style.funnelInnerText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            просмотров
          </Text>
          <Text
            style={[
              style.funnelInnerText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            клики (CTR)
          </Text>
          <Text
            style={[
              style.funnelInnerText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            корзина
          </Text>
          <Text
            style={[
              style.funnelInnerText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            заказ
          </Text>
          <Text
            style={[
              style.funnelInnerText,
              {color: isDarkMode ? '#848FA0' : '#3D3F44'},
            ]}>
            выкуп
          </Text>
        </View>
        <SalesFunnel />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
  },
  containerTop: {
    width: '80%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  funnelContainer: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
    position: 'relative',
  },
  funnelInner: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 5,
    position: 'absolute',
    left: 30,
    top: 27,
  },
  funnelInnerText: {
    fontWeight: 400,
    fontSize: 14,
  },
  containerWrapper: {
    display: 'flex',
  },
  wrapper: {
    display: 'flex',
    gap: 10,
  },
  containerInner: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
  containerText: {
    fontWeight: 300,
    fontSize: 14,
  },
  containerSum: {
    fontWeight: 500,
    fontSize: 14,
    marginLeft: 20,
    marginTop: 2,
  },
});
