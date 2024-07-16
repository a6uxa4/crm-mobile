import React, {useCallback, useEffect, useState} from 'react';
import {Header} from './Header';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import SelectProduct from './SelectProduct';
import {Content} from '.';
import useFilter from '../hooks/useFilter';
import {useGetSalesQuery} from '../services/base.service';
import {useAuth} from '../hooks/useAuth';
import {useActions} from '../hooks/useActions';
import {useDispatch} from 'react-redux';
import {getUserFromStorage} from '../utils/helpers';
import {AuthPage} from './auth';

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

  const {data, refetch} = useGetSalesQuery(params);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    });
  }, [refetch]);

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
            params={params}
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
