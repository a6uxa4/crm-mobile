import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green', marginTop: 30}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 13,
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red', marginTop: 30}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 13,
      }}
    />
  ),
};

export const initStateVoronkaData = {
  views: {
    quantity: 0,
    percentage: '0%'
  },
  clicks: {
    quantity: 0,
    percentage: '0%'
  },
  basket: {
    quantity: 0,
    percentage: '0%'
  },
  ordersCount: {
    quantity: 0,
    percentage: '0%'
  },
  buyoutsCount: {
    quantity: 0,
    percentage: '0%'
  }
}