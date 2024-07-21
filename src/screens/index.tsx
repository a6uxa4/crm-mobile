import {View} from 'react-native';
import {Navbar} from './Navbar';
import {Revenues} from './Revenues';
import {Expenses} from './Expenses';
import {Analize} from './Analize';
import {ChartProfit} from './ChartProfit';
import {ChartOrder} from './ChartOrder';
import {ISalesData, IOrdersData, FilterType} from '../common';

interface IProps {
  setFilter: (filter: Partial<FilterType>) => void;
  filter: FilterType;
  data: ISalesData;
  ordersData: IOrdersData;
  expenditureData: any;
  abcData: any;
  remainData: any;
  voronkaData: any;
  ExpensesData: any;
}

export const Content = ({
  setFilter,
  filter,
  data,
  ordersData,
  expenditureData,
  abcData,
  remainData,
  voronkaData,
  ExpensesData,
}: IProps) => {
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
      <Analize
        voronkaData={voronkaData}
        expenditureData={expenditureData}
        abcData={abcData}
        remainData={remainData}
        filter={filter}
        ordersData={ordersData}
        data={data}
        ExpensesData={ExpensesData}
      />
      <ChartProfit data={data} filter={filter} setFilter={setFilter} />
      <ChartOrder />
    </View>
  );
};
