import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {useGetAbcAnalyzeQuery} from '../../services/base.service';
import PieChart from '../../components/Charts/PieChart';

export const ABCAnalize = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {data} = useGetAbcAnalyzeQuery();

  // const data = {
  //   "a": 10,
  //   "b": 5,
  //   "c": 10,
  // };

  const COLORS = [
    '#6DE435',
    '#70C3FF',
    '#FB3D3D',
    '#FFCC18',
    '#FB3D3D',
    '#B777CD',
  ];

  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <Text
          style={{
            color: isDarkMode ? '#848FA0' : '#3D3F44',
            fontSize: 15,
            fontWeight: 400,
            textAlign: 'center',
          }}>
          Прибыльность по артикулам (АВС)
        </Text>
        <View style={style.wrapperInside}>
          <View style={style.leftInner}>
            <PieChart colors={COLORS} data={data} />
          </View>
          <View style={style.rightInner}>
            {data &&
              Object.entries(data).map(([key, value]: any, index) => (
                <View
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      backgroundColor: COLORS[index],
                      borderRadius: 7,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: isDarkMode ? '#FFFFFF' : '#3D3F44',
                    }}>
                    Группа {key}
                  </Text>
                  <Text
                    style={{
                      color: isDarkMode ? '#FFFFFF' : '#3D3F44',
                      fontSize: 20,
                      fontWeight: 600,
                    }}>
                    {value}
                  </Text>
                </View>
              ))}
          </View>
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
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightInner: {
    width: '40%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
  },
  leftInner: {
    width: '60%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
