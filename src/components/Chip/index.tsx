import {StyleSheet, Text, View} from 'react-native';
import {TopDown} from '../../assets/icons/TopDown';
import {BottomDown} from '../../assets/icons/BottomDown';

interface IProps {
  backgroundColor: string;
  title: string;
  isShort: boolean;
}

export const Chip = ({backgroundColor, title, isShort}: IProps) => {
  return (
    <View style={[style.container, {backgroundColor}]}>
      {isShort ? <BottomDown /> : <TopDown />}
      <Text style={style.textChip}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 'auto',
    height: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 12,
    paddingVertical: 1,
    paddingHorizontal: 6,
  },
  textChip: {
    fontSize: 12,
    color: '#EAEAEA',
    fontWeight: '600',
  },
});
