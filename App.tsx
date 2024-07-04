import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Content} from './src/screens';
import {Header} from './src/screens/Header';
import {BackdropProvider} from 'react-native-propel-kit';
import SelectProduct from './src/screens/SelectProduct';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {useCallback, useState} from 'react';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [refreshing, setRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Здесь выполните ваш код для обновления данных
    // Например, обновление состояния Redux или запрос к API
    setTimeout(() => {
      setRefreshing(false);
      // Увеличиваем refreshKey, что вызовет перерендеринг
      setRefreshKey(prevKey => prevKey + 1);
    }, 2000);
  }, []);

  return (
    <Provider store={store} key={refreshKey}>
      <BackdropProvider>
        <Header />
        <ScrollView
          style={[
            styles.sectionContainer,
            {backgroundColor: isDarkMode ? '#4D5473' : '#EEEFF3'},
          ]}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <SelectProduct />
          <Content />
        </ScrollView>
      </BackdropProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
});

export default App;
