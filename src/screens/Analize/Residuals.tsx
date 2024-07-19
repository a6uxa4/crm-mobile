import {View, StyleSheet, useColorScheme, Text, Animated} from 'react-native';
import ResidualsIcon from '../../assets/icons/Residuals';
import {useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Residuals = ({datas, filter}) => {
  const [data, setData] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  const animatedWidths = useRef([]);

  const {product} = useSelector((state: RootState) => state.helpers)

  useEffect(() => {
    if (datas) {
      const res = Object.entries(datas.sizeRemain).map(([key, value]) => {
        return {size: key, sum: value};
      });
      setData(res);
    }
  }, [datas]);

  useEffect(() => {
    if (data.length > 0) {
      const maxSum = Math.max(...data.map(item => item.sum));
      animatedWidths.current = data.map(() => new Animated.Value(0));
      
      animatedWidths.current.forEach((anim, index) => {
        Animated.timing(anim, {
          toValue: (data[index].sum / maxSum) * 100,
          duration: 2000,
          useNativeDriver: false,
        }).start();
      });
    }
  }, [data]);

  const getIconColor = (sum) => {
    const minSum = Math.min(...data.map(item => item.sum));
    const maxSum = Math.max(...data.map(item => item.sum));

    if (sum === minSum)
      return {
        color: '#fa3c3d',
        inside: isDarkMode ? 'black' : '#FFFFFF',
        container: isDarkMode ? 'transparent' : '#FFE7E7',
        sumColor: '#FB3D3D',
      };
    if (sum === maxSum)
      return {
        color: '#ffcc1a',
        inside: 'black',
        container: isDarkMode ? 'transparent' : '#F9EDC2',
        sumColor: isDarkMode ? '#FFCC18' : '#BE8B07',
      };
    return {
      color: 'transparent',
      inside: 'transparent',
      container: 'transparent',
      sumColor: isDarkMode ? '#FFFFFF' : '#3D3F44',
    };
  };

  return data.length ? (
    <View style={style.wrapper}>
      <View style={style.textWrapper}>
        <Text
          style={[
            style.ResidTitle,
            {color: isDarkMode ? '#FFFFFF' : '#161616'},
          ]}>
          {product}
        </Text>
        <View style={style.textInnerWrapper}>
          <Text
            style={[
              style.innerText,
              {color: isDarkMode ? '#FFFFFF' : '#161616', paddingLeft: 30},
            ]}>
            Всего:{' '}
            <Text
              style={[
                style.barText,
                {
                  color: isDarkMode ? '#FFFFFF' : '#3D3F44',
                },
              ]}>
              {datas.allQuantity} шт
            </Text>
          </Text>
          <Text
            style={[
              style.innerText,
              {color: isDarkMode ? '#FFFFFF' : '#161616', paddingRight: 10},
            ]}>
            шт
          </Text>
        </View>
      </View>
      <View style={style.container}>
        {data.map((item, index) => (
          <View key={index} style={style.containerProgress}>
            <ResidualsIcon
              color={getIconColor(item.sum).color}
              signColor={getIconColor(item.sum).inside}
            />
            <View
              style={[
                style.containerBar,
                {backgroundColor: isDarkMode ? '#2F3F51' : '#F4F7F9'},
              ]}>
              <Animated.View
                style={[
                  style.bar,
                  {
                    backgroundColor: isDarkMode ? '#4F718D' : '#DBE8ED',
                    width: animatedWidths.current[index]?.interpolate({
                      inputRange: [0, 100],
                      outputRange: ['0%', '90%'],
                    }) || '0%',
                  },
                ]}>
                <Text
                  style={[
                    style.barText,
                    {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
                  ]}>
                  {item.size}
                </Text>
              </Animated.View>
              <View
                style={{
                  width: 27,
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: getIconColor(item.sum).container,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    style.barTextRight,
                    {color: getIconColor(item.sum).sumColor},
                  ]}>
                  {item.sum}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  ) : (
    <View></View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    marginTop: 15,
  },
  ResidTitle: {
    fontWeight: '400',
    fontSize: 15,
    marginLeft: 30,
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
  },
  textInnerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerText: {
    fontWeight: '400',
    fontSize: 12,
  },
  container: {
    width: '100%',
    height: '75%',
    marginTop: 5,
    display: 'flex',
    gap: 4,
  },
  containerProgress: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  containerBar: {
    minHeight: 30,
    maxHeight: 30,
    height: 30,
    width: '90%',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 6,
    overflow: 'hidden',
  },
  barText: {
    fontWeight: '500',
    fontSize: 14,
  },
  barTextRight: {
    fontSize: 14,
    fontWeight: '700',
  },
});
