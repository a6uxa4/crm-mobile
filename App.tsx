import {StyleSheet, useColorScheme, View} from 'react-native';
import Header from './src/screens/Header';
import {Content} from './src/screens';
import {BackdropProvider} from 'react-native-propel-kit';
import SelectProduct from './src/screens/SelectProduct';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <BackdropProvider>
      <View
        style={[
          styles.sectionContainer,
          {backgroundColor: isDarkMode ? '#4D5473' : '#EEEFF3'},
        ]}>
        <Header />
        <SelectProduct />
        <Content />
      </View>
    </BackdropProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
});

export default App;
