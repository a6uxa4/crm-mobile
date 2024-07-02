import {StyleSheet, View} from 'react-native';

interface IProps {
  backgroundColor: string;
  borderColor?: string;
  isShadow?: boolean;
}

export const Badge = ({backgroundColor, borderColor, isShadow}: IProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor: borderColor || backgroundColor,
          shadowColor: isShadow && backgroundColor,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 14,
    height: 14,
    borderRadius: 100,
    borderWidth: 2,
    shadowOpacity: 0.8,
    shadowOffset: {width: 0, height: 5},
    elevation: 5,
    shadowRadius: 10,
  },
});
