import {TouchableOpacity, StyleSheet} from 'react-native';
import CheckIcon from '../../assets/icons/CheckIcon';

const Checkbox = ({onPress, isChecked, borderColor, backgroundColor, isBg}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.checkbox,
        {
          backgroundColor: isChecked ? backgroundColor : isBg,
          borderColor,
        },
      ]}>
      {isChecked && <CheckIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 1,
    borderRadius: 3,
    height: 20,
    width: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Checkbox;
