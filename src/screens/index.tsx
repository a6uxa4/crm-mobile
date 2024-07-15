import {View} from 'react-native';
import {Navbar} from './Navbar';
import {Revenues} from './Revenues';
import {Expenses} from './Expenses';
import {Analize} from './Analize';
import {ChartProfit} from './ChartProfit';
import {ChartOrder} from './ChartOrder';
import {ISalesData} from '../common';

interface FilterType {
  productId: string;
  selectType: string;
}

interface IProps {
  setFilter: (filter: Partial<FilterType>) => void;
  filter: FilterType;
  data: ISalesData;
}

export const Content = ({setFilter, filter, data}: IProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 50,
      }}>
      <Navbar setFilter={setFilter} filter={filter} />
      <Revenues data={data} />
      <Expenses />
      <Analize />
      <ChartProfit data={data} />
      <ChartOrder />
    </View>
  );
};
