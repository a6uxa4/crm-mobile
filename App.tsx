import {ScrollView, StyleSheet, useColorScheme} from 'react-native';
import {Content} from './src/screens';
import {Header} from './src/screens/Header';
import {BackdropProvider} from 'react-native-propel-kit';
import SelectProduct from './src/screens/SelectProduct';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <BackdropProvider>
        <ScrollView
          style={[
            styles.sectionContainer,
            {backgroundColor: isDarkMode ? '#4D5473' : '#EEEFF3'},
          ]}>
          <Header />
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
