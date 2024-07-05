import {View} from 'react-native';
import {Navbar} from './Navbar';
import {Revenues} from './Revenues';
import {Expenses} from './Expenses';
import {Analize} from './Analize';
import {ChartProfit} from './ChartProfit';
import {ChartOrder} from './ChartOrder';

export const Content = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 50,
      }}>
      <Navbar />
      <Revenues />
      <Expenses />
      <Analize />
      <ChartProfit />
      {/* <ChartOrder /> */}
    </View>
  );
};
