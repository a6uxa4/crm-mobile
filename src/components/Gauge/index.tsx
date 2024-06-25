import {View, StyleSheet} from 'react-native';

const Gauge = ({value, min, max}: any) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e3553',
    padding: 20,
  },
});

export default Gauge;
