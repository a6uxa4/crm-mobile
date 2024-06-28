import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';

interface IProps {
  percentage?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  text?: string;
}

export const CircleChart: React.FC<IProps> = ({
  percentage = 18,
  width = 150,
  height = 150,
  strokeWidth = 10,
  text = 'ДРР',
}) => {
  const radius = Math.min(width, height) / 2 - strokeWidth / 2;

  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;

  const animatedPercentage = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedPercentage, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const strokeDashoffset = animatedPercentage.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.container, {width, height}]}>
      <View style={styles.textContainer}>
        {text && <Text style={styles.text}>{text}</Text>}
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="GradientColor" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor="#22AFFF" />
            <Stop offset="100%" stopColor="#22AFFF" />
          </LinearGradient>
        </Defs>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke="#0060A6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke="url(#GradientColor)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${width / 2} ${height / 2})`}
        />
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});
