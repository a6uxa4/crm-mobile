import {StyleSheet, View} from 'react-native';

export const TopDown = () => {
  return (
    <View style={styles.svgContainer}>
      <View style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    width: 8,
    height: 7,
    position: 'relative',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 7,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#EAEAEA',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
