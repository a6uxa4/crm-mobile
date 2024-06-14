import {StyleSheet, useColorScheme, View} from 'react-native';
import Header from './src/screens/header';
import {Content} from './src/screens';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.sectionContainer,
        {backgroundColor: isDarkMode ? '#4D5473' : '#EEEFF3'},
      ]}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
});

export default App;
