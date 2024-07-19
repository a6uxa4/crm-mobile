import React, {useCallback, useEffect, useState} from 'react';
import {Header} from './header';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import SelectProduct from './SelectProduct';
import {Content} from '.';
import useFilter from '../hooks/useFilter';
import {
  useGetSalesQuery,
  useGetOrdersDataQuery,
  useGetExpenditureGetQuery,
  useGetWarehouseProductAbcQuery,
  useGetRemainQuantityQuery,
  useGetFullStatsStatisticQuery,
  useGetExpensesQuery,
} from '../services/base.service';
import {useAuth} from '../hooks/useAuth';
import {useActions} from '../hooks/useActions';
import {useDispatch} from 'react-redux';
import {getUserFromStorage} from '../utils/helpers';
import {AuthPage} from './auth';
import {initStateVoronkaData} from '../utils/constants';

export const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const IsAuthentication = useAuth();
  const {saveUser} = useActions();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromStorage();
      if (user) {
        dispatch(saveUser(user));
      }
    };

    fetchUser();
  }, [dispatch]);

  const [refreshing, setRefreshing] = useState(false);

  const {filter, setFilter, params} = useFilter({
    selectType: 0,
    smSelectType: 0,
    productId: 'all',
    visibleCalendar: false,
    startPeriod: '',
    endPeriod: '',
  });

  console.log(params, 'this is params');

  const {data, refetch} = useGetSalesQuery(params);

  const {data: ordersData, refetch: ordersRefetch} =
    useGetOrdersDataQuery(params);

  const {data: expenditureData, refetch: expenditureRefetch} =
    useGetExpenditureGetQuery(params);

  const {data: abcData, refetch: abcRefetch} =
    useGetWarehouseProductAbcQuery(params);

  // const {data: ExpensesData = []} = useGetExpensesQuery(params)

  const ExpensesData = {
    allExpenditure: 620649.8,
    expenditureItems: [
      {
        expenditureId: 0,
        expenditureName: 'Себестоимость товаров',
        expenditurePrice: 254725,
        percentage: '41.0%',
      },
      {
        expenditureId: 0,
        expenditureName: 'Реклама WB',
        expenditurePrice: 306947,
        percentage: '49.5%',
      },
      {
        expenditureId: 0,
        expenditureName: 'Логистика WB',
        expenditurePrice: 58967.8,
        percentage: '9.5%',
      },
      {
        expenditureId: 0,
        expenditureName: 'Штрафы WB',
        expenditurePrice: 10,
        percentage: '0.0%',
      },
      {
        expenditureId: 0,
        expenditureName: 'Удержания ВБ',
        expenditurePrice: 0,
        percentage: '0.0%',
      },
    ],
  };

  const {data: remainData, refetch: remainRefetch} = useGetRemainQuantityQuery(
    {productId: filter.productId},
    {skip: !filter.productId},
  );

  const {data: voronkaData = initStateVoronkaData, refetch: voronkaRefetch} =
    useGetFullStatsStatisticQuery(params);

  const globalRefetch = useCallback(() => {
    return Promise.all([
      refetch(),
      ordersRefetch(),
      expenditureRefetch(),
      remainRefetch(),
      voronkaRefetch(),
    ]);
  }, [
    refetch,
    ordersRefetch,
    expenditureRefetch,
    remainRefetch,
    voronkaRefetch,
  ]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    globalRefetch().then(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    });
  }, [globalRefetch]);

  if (!IsAuthentication) {
    return <AuthPage />;
  } else {
    return (
      <>
        <Header />
        <ScrollView
          style={[
            styles.sectionContainer,
            {backgroundColor: isDarkMode ? '#4D5473' : '#EEEFF3'},
          ]}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <SelectProduct setFilter={setFilter} filter={filter} />
          <Content
            setFilter={setFilter}
            filter={filter}
            data={data}
            ordersData={ordersData}
            expenditureData={expenditureData}
            abcData={abcData}
            params={params}
            remainData={remainData}
            voronkaData={voronkaData}
            ExpensesData={ExpensesData}
          />
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
});
