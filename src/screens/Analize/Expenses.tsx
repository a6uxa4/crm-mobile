import {Text, View, StyleSheet, useColorScheme} from 'react-native';
// import {useGetAllExpenseQuery} from '../../services/base.service';

export const Expenses = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const data = null;

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
              fontWeight: '500',
              fontSize: 15,
              color: isDarkMode ? '#FFFFFF' : '#161616',
            }}>
            <Text style={{fontSize: 13, fontWeight: 400}}>Всего: </Text>
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
        <View style={style.wrapperMapping}>
          {data &&
            data?.expenditureItems.map((item: any, index: number) => (
              <View
                style={[
                  style.wrapperMain,
                  {backgroundColor: isDarkMode ? '#2F3F51' : '#F4F7F9'},
                ]}
                key={index}>
                <View
                  style={{
                    position: 'absolute',
                    left: -55,
                    top: 0,
                    bottom: 0,
                    width: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'right',
                      width: 50,
                      fontSize: 14,
                      fontWeight: '400',
                    }}>
                    {item.percentage}
                  </Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: item.percentage,
                    backgroundColor: isDarkMode ? '#4F718D' : '#DBE8ED',
                    borderRadius: 4,
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 18,
                    paddingLeft: 15,
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                  }}>
                  {item.expenditureName}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 18,
                    marginRight: '3%',
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
    width: '100%',
    height: '85%',
    marginTop: 5,
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 25,
  },
  wrapperMapping: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'stretch',
    paddingLeft: 35,
    paddingTop: 5,
  },
  wrapperMain: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    maxHeight: 40,
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 2,
  },
});
