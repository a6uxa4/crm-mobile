import {Text, View, StyleSheet, useColorScheme} from 'react-native';

export const Togolok = ({color, text}: {color: string; text: string}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={style.textWrapper}>
      <View style={[style.togolok, {backgroundColor: color}]} />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 300,
          color: isDarkMode ? '#FFFFFF' : '#000000',
        }}>
        {text}
      </Text>
    </View>
  );
};

export const Publicity = () => {
  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <View>
          <View>
            <Togolok color="#22AFFF" text="Расходы на рекламу" />
            <Togolok color="#0060A6" text="Выручка" />
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
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  containerInner: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 7,
    flexDirection: 'row',
  },
  togolok: {
    borderRadius: 7,
    width: 14,
    height: 14,
  },
});
