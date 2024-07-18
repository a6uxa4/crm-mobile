import {StyleSheet, useColorScheme, View, Platform, Text} from 'react-native';
import {Select} from 'react-native-propel-kit';
import {useGetProductsQuery} from '../../services/base.service';
import {transformToOptions} from '../../utils/helpers';
import {useSelector, useDispatch} from 'react-redux';
import {setProduct} from '../../store/slices/helper.slice';

interface FilterType {
  productId?: string;
}

interface IProps {
  setFilter: (filter: Partial<FilterType>) => void;
  filter: FilterType;
}

const SelectProduct = ({setFilter, filter}: IProps) => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const {data = []} = useGetProductsQuery();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.select,
          {
            flex: 4,
            backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF',
          },
        ]}>
        <Text style={{color: isDarkMode ? '#FFFFFF' : '#3D3F44'}}>
          Магазины иванов
        </Text>
      </View>
      <Select
        initialValue="1"
        confirmTitle="Подтвердить"
        cancelTitle="Отмена"
        onChange={e => {
          if (e !== 'all') {
            setFilter({productId: e});
            const filtered = data.filter(item => Number(item.id) === Number(e));
            dispatch(setProduct(filtered[0].vendorCode));
          } else {
            setProduct({productId: 'all'});
          }
        }}
        value={filter.productId}
        style={[
          styles.select,
          {
            flex: 6,
            backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF',
            color: isDarkMode ? '#FFFFFF' : '#3D3F44',
            ...Platform.select({
              android: {
                paddingTop: 8,
              },
            }),
          },
        ]}
        placeholder="Все товары">
        {transformToOptions(data).map((option, index) => (
          <Select.Item key={index} label={option.label} value={option.value} />
        ))}
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
    fontWeight: '500',
    fontSize: 13,
  },
});

export default SelectProduct;
