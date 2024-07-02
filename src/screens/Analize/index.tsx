import {useState} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Residuals} from './Residuals';
import {ABCAnalize} from './ABCAnalize';
import {Expenses} from './Expenses';
import {Publicity} from './Publicity';

const RemainsTab = () => (
  <View style={styles.containerInner}>
    <Residuals />
  </View>
);

const ABCAnalysisTab = () => (
  <View style={styles.containerInner}>
    <ABCAnalize />
  </View>
);

const ExpensesTab = () => (
  <View style={styles.containerInner}>
    <Expenses />
  </View>
);

const AdvertisingTab = () => (
  <View style={styles.containerInner}>
    <Publicity />
  </View>
);

const renderScene = SceneMap({
  remains: RemainsTab,
  abcAnalysis: ABCAnalysisTab,
  expenses: ExpensesTab,
  advertising: AdvertisingTab,
});

export function Analize() {
  const isDarkMode = useColorScheme() === 'dark';

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'remains', title: 'Остатки'},
    {key: 'abcAnalysis', title: 'ABC-анализ'},
    {key: 'expenses', title: 'Расходы'},
    {key: 'advertising', title: 'Реклама'},
  ]);

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
                    backgroundColor: !focused
                      ? 'transparent'
                      : isDarkMode
                      ? '#6B7188'
                      : '#FFFFFF',
                    borderRadius: 100,
                    paddingHorizontal: 8,
                    height: 35,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 400,
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
    paddingBottom: 55,
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
