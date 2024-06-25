import {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

interface IProps {
  progress: number;
  backgroundColor: string;
  borderColor: string;
}

export const Progress = ({progress, backgroundColor, borderColor}: IProps) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={[styles.containerBar, {backgroundColor}]}>
      <Animated.View
        style={[
          styles.bar,
          {
            backgroundColor: borderColor,
            borderColor: backgroundColor,
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerBar: {
    height: 15,
    width: '100%',
    borderRadius: 10,
  },
  bar: {
    height: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },
});
