import {View} from 'react-native';
import { Navbar } from './navbar';
import {Revenues} from './Revenues';
import {Expenses} from './Expenses';
import {Analize} from './Analize';
import { Orders } from './Orders';

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
      {/* <Orders /> */}
    </View>
  );
};
