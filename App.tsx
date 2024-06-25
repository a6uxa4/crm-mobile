import {StyleSheet, useColorScheme, View} from 'react-native';
import Header from './src/screens/Header';
import {Content} from './src/screens';
import {BackdropProvider} from 'react-native-propel-kit';
import SelectProduct from './src/screens/SelectProduct';
import {Revenues} from './src/screens/Revenues';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <BackdropProvider>
        <View
          style={[
            styles.sectionContainer,
            {backgroundColor: isDarkMode ? '#4D5473' : '#EEEFF3'},
          ]}>
          <Header />
          <SelectProduct />
          <Content />
          <Revenues />
        </View>
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
