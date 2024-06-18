import {StyleSheet, useColorScheme, View} from 'react-native';
import {Select} from 'react-native-propel-kit';

const SelectProduct = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Select
        confirmTitle="Подтвердить"
        cancelTitle="Отмена"
        style={[
          styles.select,
          {
            flex: 4,
            backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#3D3F44',
          },
        ]}
        placeholder="Все магазины">
        <Select.Item label="Все магазины" value="1" />
        <Select.Item label="ИП Константинов П.В." value="2" />
        <Select.Item label="ИП Степанова С.М." value="3" />
        <Select.Item label="ИП Рахимова Л.Н." value="4" />
        <Select.Item label="ИП Александров В.В." value="5" />
      </Select>
      <Select
        confirmTitle="Подтвердить"
        cancelTitle="Отмена"
        style={[
          styles.select,
          {
            flex: 6,
            backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#3D3F44',
          },
        ]}
        placeholder="Все товары">
        <Select.Item label="Все товары" value="1" />
        <Select.Item label="ИП Константинов П.В." value="2" />
        <Select.Item label="ИП Степанова С.М." value="3" />
        <Select.Item label="ИП Рахимова Л.Н." value="4" />
        <Select.Item label="ИП Александров В.В." value="5" />
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 10,
  },
  select: {
    width: '100%',
    height: 38,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: 13,
  },
});

export default SelectProduct;
