import {View} from 'react-native';
import {CircleChart} from '../../components/Circle';

export const Publicity = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CircleChart
        percentage={50}
        width={90}
        height={90}
        strokeWidth={8}
        text="ДРР"
      />
    </View>
  );
};
