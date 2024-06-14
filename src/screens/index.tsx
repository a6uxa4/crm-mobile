import {View} from 'react-native';
import {Navbar} from './navbar';

export const Content = () => {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Navbar />
    </View>
  );
};
