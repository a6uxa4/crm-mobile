import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Residuals} from './Residuals';
import {ABCAnalize} from './ABCAnalize';
import {Expenses} from './Expenses';
import {Publicity} from './Publicity';

const RemainsTab = ({data, filter}) => (
  <View style={styles.containerInner}>
    <Residuals datas={data} filter={filter} />
  </View>
);

const ABCAnalysisTab = ({data}) => (
  <View style={styles.containerInner}>
    <ABCAnalize data={data} />
  </View>
);

const ExpensesTab = ({data}) => (
  <View style={styles.containerInner}>
    <Expenses data={data} />
  </View>
);

const AdvertisingTab = ({expenditureData, voronkaData, ordersData, data}) => (
  <View style={styles.containerInner}>
    <Publicity
      expenditureData={expenditureData}
      voronkaData={voronkaData}
      ordersData={ordersData}
      data={data}
    />
  </View>
);

export function Analize({
  expenditureData,
  abcData,
  remainData,
  filter,
  voronkaData,
  ordersData,
  data,
  ExpensesData
}) {
  const isDarkMode = useColorScheme() === 'dark';

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'remains', title: 'Остатки'},
    {key: 'abcAnalysis', title: 'ABC-анализ'},
    {key: 'expenses', title: 'Расходы'},
    {key: 'advertising', title: 'Реклама'},
  ]);

  useEffect(() => {
    if (filter) {
      if (filter.productId === 'all' || !filter.productId || !filter['productId'] === undefined) {
        if (routes.length > 3) {
          const res = [...routes];
          if(index === 3){
            setIndex(2)
          }
          res.shift()
          setRoutes(res);
        }
      } else {
        if (routes.length < 4) {
          const res = [...routes];
          res.unshift({key: 'remains', title: 'Остатки'});
          setRoutes(res);
        }
      }
    }
  }, [filter.productId]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'remains':
        return <RemainsTab data={remainData} filter={filter} />;
      case 'abcAnalysis':
        return <ABCAnalysisTab data={abcData} />;
      case 'expenses':
        return <ExpensesTab data={ExpensesData} />;
      case 'advertising':
        return (
          <AdvertisingTab
            expenditureData={expenditureData}
            voronkaData={voronkaData}
            ordersData={ordersData}
            data={data}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
        ]}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          style={{
            width: 'auto',
            maxWidth: 350,
          }}
          renderTabBar={props => (
            <TabBar
              {...props}
              scrollEnabled
              style={[
                styles.tabBar,
                {backgroundColor: isDarkMode ? '#3F4353' : '#E8EAF2'},
              ]}
              tabStyle={styles.tab}
              indicatorStyle={styles.indicator}
              renderLabel={({route, focused}) => (
                <View
                  style={{
                    width: 'auto',
                    backgroundColor: !focused
                      ? 'transparent'
                      : isDarkMode
                      ? '#6B7188'
                      : '#FFFFFF',
                    borderRadius: 100,
                    paddingHorizontal: filter.productId === 'all' || !filter.productId ? 18 : 8,
                    height: 35,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 15,
                      color: isDarkMode
                        ? focused
                          ? '#FFFFFF'
                          : '#8899AA'
                        : '#3D3F44',
                    }}>
                    {route.title}
                  </Text>
                </View>
              )}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 17,
  },
  container: {
    width: '100%',
    height: 340,
    marginTop: 105,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  tabBar: {
    width: '100%',
    height: 40,
    marginTop: 18,
    borderRadius: 100,
  },
  tab: {
    width: 'auto',
    height: 40,
    paddingBottom: 18,
    paddingHorizontal: 2,
  },
  indicator: {
    height: 35,
    backgroundColor: 'transparent',
  },
  containerInner: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
});
