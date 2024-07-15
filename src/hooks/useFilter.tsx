import {useState, useCallback} from 'react';

const useFilter = (initialFilter?: any) => {
  const PERIODS_ENG = ['day', 'week', 'month', 'year', 'period'];

  const [filter, setFilterState] = useState<any>(initialFilter || {});
  const [params, setParams] = useState<any>();

  const setFilter = useCallback((newFilter: any) => {
    setFilterState((prevFilter: any) => {
      const updatedFilter = {...prevFilter, ...newFilter};

      if (updatedFilter.visibleCalendar) {
        delete updatedFilter.visibleCalendar;
      }
      if (
        updatedFilter.productId === '' ||
        updatedFilter.productId === '0' ||
        updatedFilter.productId === 'all'
      ) {
        delete updatedFilter.productId;
      }

      const subFilterValues =
        updatedFilter.selectType < '2'
          ? ['byDays', 'byHours']
          : ['byDays', 'byWeeks'];

      if (updatedFilter.endPeriod !== '') {
        const {startPeriod, endPeriod, productId} = updatedFilter;
        let updatedParams: {
          startPeriod: string;
          endPeriod: string;
          productId?: any;
        } = {
          startPeriod,
          endPeriod,
        };
        if (
          productId !== undefined &&
          productId !== 'all' &&
          productId !== '0' &&
          productId !== ''
        ) {
          updatedParams.productId = productId;
        }
        setParams(updatedParams);
      } else if (Number(updatedFilter.selectType) !== 4) {
        const periodSelect = PERIODS_ENG[Number(updatedFilter.selectType)];
        const periodSmSelect =
          subFilterValues[Number(updatedFilter.smSelectType)];
        const {productId} = updatedFilter;
        let updatedParams: any = {
          [periodSelect]: true,
        };

        if (updatedFilter.selectType !== '0') {
          updatedParams[periodSmSelect] = true;
        }

        if (
          productId !== undefined &&
          productId !== 'all' &&
          productId !== '0' &&
          productId !== ''
        ) {
          updatedParams.productId = productId;
        }

        setParams(updatedParams);
      }

      return updatedFilter;
    });
  }, []);

  return {
    filter,
    params,
    setFilter,
  };
};

export default useFilter;
