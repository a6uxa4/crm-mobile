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
