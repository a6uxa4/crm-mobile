import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import Checkbox from '../../components/Checkbox';

interface IProps {
  lineVisible: {
    isRevenue: boolean;
    isProfit: boolean;
    isProfitability: boolean;
    isMargin: boolean;
  };
  setLineVisible: (e: {
    isRevenue: boolean;
    isProfit: boolean;
    isProfitability: boolean;
    isMargin: boolean;
  }) => void;
}

export const Footer = ({lineVisible, setLineVisible}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        style.containerChecked,
        {backgroundColor: isDarkMode ? '#414451' : '#F4F7F9'},
      ]}>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#569AE7"
          backgroundColor="#88C0FF"
          isBg={isDarkMode ? '#1A2A3D' : '#daeaff'}
          isChecked={lineVisible.isRevenue}
          onPress={() =>
            setLineVisible({...lineVisible, isRevenue: !lineVisible.isRevenue})
          }
        />
        <View style={{width: '80%', height: 3, backgroundColor: '#88C0FF'}} />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          план выручка
        </Text>
      </View>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#1AC23F"
          backgroundColor="#38EF60"
          isBg={isDarkMode ? '#1A2A3D' : '#d8ffe0'}
          isChecked={lineVisible.isProfit}
          onPress={() =>
            setLineVisible({...lineVisible, isProfit: !lineVisible.isProfit})
          }
        />
        <View style={{width: '80%', height: 3, backgroundColor: '#04D632'}} />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          план прибыль
        </Text>
      </View>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#B777CD"
          backgroundColor="#B777CD"
          isBg={isDarkMode ? '#1A2A3D' : '#ECE0F0'}
          isChecked={lineVisible.isMargin}
          onPress={() =>
            setLineVisible({...lineVisible, isMargin: !lineVisible.isMargin})
          }
        />
        <View style={{width: '80%', height: 3, backgroundColor: '#B777CD'}} />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          маржа
        </Text>
      </View>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#008EBA"
          backgroundColor="#06C0DA"
          isBg={isDarkMode ? '#1A2A3D' : '#cffbfe'}
          isChecked={lineVisible.isProfitability}
          onPress={() =>
            setLineVisible({
              ...lineVisible,
              isProfitability: !lineVisible.isProfitability,
            })
          }
        />
        <View
          style={{
            width: '80%',
            borderWidth: 2,
            borderStyle: 'dotted',
            borderColor: '#03ABC2',
          }}
        />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          рентабельность
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  containerChecked: {
    width: 345,
    height: 100,
    marginVertical: 20,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerInner: {
    width: 60,
    height: 65,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  innerText: {
    fontWeight: '300',
    fontSize: 12,
    textAlign: 'center',
  },
});
