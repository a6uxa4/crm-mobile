import {View} from 'react-native';
import { Navbar } from './navbar';
import {Revenues} from './Revenues';
import {Expenses} from './Expenses';
import {Analize} from './Analize';
import {ChartProfit} from './ChartProfit';
import {ChartOrder} from './ChartOrder';
import {ISalesData, IOrdersData} from '../common';

interface FilterType {
  productId: string;
  selectType: string;
  startPeriod: string;
  endPeriod: string;
}

interface IProps {
  setFilter: (filter: Partial<FilterType>) => void;
  filter: FilterType;
  data: ISalesData;
  params: any;
  ordersData: IOrdersData
}

export const Content = ({setFilter, filter, data, params, ordersData}: IProps) => {
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
      <Expenses data={data} ordersData={ordersData} />
      <Analize />
      <ChartProfit data={data} filter={filter} params={params} />
      <ChartOrder />
    </View>
  );
};
