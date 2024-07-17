import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from '../../common';

export const transformToOptions = (
  products: IProduct[],
): {value: string; label: string}[] => {
  const transformedData = products?.map(el => ({
    label: `${el.nmId} ${el.vendorCode}`,
    value: el.id + '',
  }));
  transformedData.unshift({label: 'Все товары', value: 'all'});
  return transformedData;
};

const USER_KEY = '@user';

export const getUserFromStorage = async () => {
  try {
    const user = await AsyncStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

export const removeUserFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};

export const saveUserToStorage = async data => {
  try {
    if (data !== null) {
      const jsonUser = JSON.stringify(data);
      await AsyncStorage.setItem(USER_KEY, jsonUser);
    } else {
      await AsyncStorage.removeItem(USER_KEY);
    }
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const addPlusMinus = (value: number): string => {
  if(value){
    if (value > 0) {
      return `+${value}`;
    } else if (value < 0) {
      return `${value}`;
    } else {
      return `${value}`;
    }
  }else{
    return '0'
  }
};

export const calculatePercentage = ({planSum, allSum, percentage}: {planSum?: number, allSum?: number, percentage: number}) => {
  const general = {isChip: false, value: ''}
  if(planSum && allSum){
    const res = allSum - planSum
    general['value'] = `${((res / planSum) * 100).toFixed(1).replace('-', '')}%`;
  }
  general['isChip'] = percentage < 0 ? true: false 
  return general
};

export const calculateProgress = (planSum: number, allSum: number) => {
  if (planSum <= 0 || allSum <= 0) {
    return 0;
  } else {
    const progress = (allSum / planSum) * 100;
    return Math.min(progress, 100);
  }
}

export const expensesCalc = (allExpenses: number, percentage: number) => {
  const percent = (allExpenses / percentage) * 100;
}

export const formattedNumber = (number: number) => {
  const formattedOutput = String(number).replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1 '
  )
  return formattedOutput
}


