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
