import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {useGetAllExpenseQuery} from '../../services/base.service';

export const Expenses = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {data} = useGetAllExpenseQuery();

  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginLeft: 35,
              fontSize: 15,
              color: isDarkMode ? '#FFFFFF' : '#161616',
            }}>
            <Text style={{fontSize: 13}}>Всего: </Text>
            {data?.allExpenditure} ₽
          </Text>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 15,
              marginRight: 8,
              color: isDarkMode ? '#B4B4B4' : '#161616',
            }}>
            ₽
          </Text>
        </View>
        <View style={style.wrapperMain}>
          {data?.expenditureItems.map((item: any, index: number) => (
            <View
              style={[
                style.wrapperInside,
                {backgroundColor: isDarkMode ? '#2F3F51' : '#F4F7F9'},
              ]}
              key={index}>
              <Text
                style={{
                  position: 'absolute',
                  left: -55,
                  top: 8,
                  width: 50,
                  textAlign: 'right',
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                }}>
                {item.percentage}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: item.percentage,
                  backgroundColor: isDarkMode
                    ? '#4F718D'
                    : '#DBE8ED',
                  borderRadius: 4,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  left: 15,
                  top: 8,
                  fontSize: 15,
                  lineHeight: 18,
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                }}>
                {item.expenditureName}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 8,
                  fontSize: 15,
                  lineHeight: 18,
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                }}>
                {item.expenditurePrice}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  wrapperInside: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: 33,
    marginBottom: 4,
    borderRadius: 4,
  },
  wrapperMain: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 35,
    marginTop: 8,
  },
});
