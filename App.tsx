import {BackdropProvider} from 'react-native-propel-kit';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Main} from './src/screens/Main';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <BackdropProvider>
        <Main />
      </BackdropProvider>
    </Provider>
  );
}

export default App;
