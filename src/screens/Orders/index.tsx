import {View, StyleSheet, Text, useColorScheme, Dimensions} from 'react-native';
import {useGetReportsQuery} from '../../services/base.service';

export const Orders = () => {
  const {width} = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  const {data} = useGetReportsQuery();

  const Header = [
    {color: '#2898E9', text: 'заказы', fieldName: 'allOrdersCount'},
    {color: '#415FFF', text: 'выкупы', fieldName: 'allRansoms'},
    {color: '#FF6580', text: 'возвраты', fieldName: 'allReturns'},
    {color: '#909194', text: 'отказы', fieldName: 'allRejects'},
  ];

  const charts = [
    {x: 1, y: 2},
    {x: 2, y: 3},
    {x: 3, y: 5},
    {x: 4, y: 4},
  ];

  return (
    <View style={style.wrapper}>
      <Text
        style={{
          textAlign: 'center',
          color: isDarkMode ? '' : '#3D3F44',
          fontSize: 20,
          fontWeight: 600,
        }}>
        Заказы
      </Text>
      <View style={style.main}>
        <View style={style.header}>
          {Header.map((item: any, index: number) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 3,
                  alignItems: 'center',
                }}
                key={index}>
                {index !== 3 && (
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 7,
                      backgroundColor: item.color,
                    }}
                  />
                )}
                <Text
                  style={{fontSize: 15, fontWeight: 600, color: item.color}}>
                  {data && data[item.fieldName]}
                </Text>
                <Text style={{fontSize: 13, fontWeight: 300}}>{item.text}</Text>
              </View>
            );
          })}
        </View>
        <View style={style.container}>
          
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 17,
    height: 440,
  },
  main: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
