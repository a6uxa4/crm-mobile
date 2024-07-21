import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import Checkbox from '../../components/Checkbox';
import {FilterType} from '../../common';

interface IProps {
  setLineVisible: (e: {
    isAdvertExpenses: boolean;
    isCtr: boolean;
    isCpc: boolean;
  }) => void;
  lineVisible: {isAdvertExpenses: boolean; isCtr: boolean; isCpc: boolean};
  filter: FilterType;
}

export const Footer = ({setLineVisible, lineVisible, filter}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        style.containerChecked,
        {backgroundColor: isDarkMode ? '#414451' : '#F4F7F9'},
      ]}>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#9959AF"
          backgroundColor="#B777CD"
          isBg={isDarkMode ? '#1A2A3D' : '#f6eef9'}
          isChecked={lineVisible.isCtr}
          onPress={() => {
            +filter?.selectType === 0
              ? null
              : setLineVisible({
                  ...lineVisible,
                  isCtr: !lineVisible.isCtr,
                });
          }}
        />
        <View
          style={{
            width: '80%',
            borderWidth: 2,
            borderStyle: 'dotted',
            borderColor: '#B777CD',
          }}
        />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          CTR
        </Text>
      </View>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#32C000"
          backgroundColor="#3BDF02"
          isBg={isDarkMode ? '#1A2A3D' : '#d8ffe0'}
          isChecked={lineVisible.isCpc}
          onPress={() => {
            +filter?.selectType === 0
              ? null
              : setLineVisible({
                  ...lineVisible,
                  isCpc: !lineVisible.isCpc,
                });
          }}
        />
        <View
          style={{
            width: '80%',
            borderWidth: 2,
            borderStyle: 'dotted',
            borderColor: '#3BDF02',
          }}
        />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          CPC
        </Text>
      </View>
      <View style={style.containerInner}>
        <Checkbox
          borderColor="#0469C7"
          backgroundColor="#2093FD"
          isBg={isDarkMode ? '#1A2A3D' : '#d8f2ff'}
          isChecked={lineVisible.isAdvertExpenses}
          onPress={() => {
            +filter?.selectType === 0
              ? null
              : setLineVisible({
                  ...lineVisible,
                  isAdvertExpenses: !lineVisible.isAdvertExpenses,
                });
          }}
        />
        <View style={{width: '80%', height: 3, backgroundColor: '#0181F8'}} />
        <Text
          style={[
            style.innerText,
            {color: isDarkMode ? '#FFFFFF' : '#3D3F44'},
          ]}>
          расходы на рекламу
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
    lineHeight: 12,
  },
});
