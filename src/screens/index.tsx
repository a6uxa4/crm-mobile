import {View} from 'react-native';
import {Navbar} from './Navbar';
import {Revenues} from './Revenues';
import {Expenses} from './Expenses';

export const Content = () => {
  return (
    <View
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Navbar />
      <Revenues />
      <Expenses />
    </View>
  );
};
