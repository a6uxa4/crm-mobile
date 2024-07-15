import {BackdropProvider} from 'react-native-propel-kit';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Main} from './src/screens/Main';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/constants';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <BackdropProvider>
        <Main />
        <Toast config={toastConfig} />
      </BackdropProvider>
    </Provider>
  );
}

export default App;
