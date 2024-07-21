import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Path, Svg, Circle} from 'react-native-svg';
import {useLoginMutation} from '../../services/auth.service';
import {useActions} from '../../hooks/useActions';
import Toast from 'react-native-toast-message';

export const AuthPage = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
  });
  const [Login, {isLoading}] = useLoginMutation();
  const {saveUser} = useActions();

  const handleEmailChange = (val: string) => {
    setData({
      ...data,
      email: val,
    });
  };

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signIn = async () => {
    try {
      const DATA_FOR_UPDATE = {email: data.email, password: data.password};
      const checkServer = async () => {
        try {
          const response = await fetch('http://84.201.167.201:8089/identity/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(DATA_FOR_UPDATE), 
          });

          if (response.ok) {
            const responseData = await response.json(); 
            saveUser(responseData);
          } else {
          }
        } catch (error) {
          console.error('Error connecting to the server:', error);
        }
      };

      await checkServer();

      setData({
        email: '',
        password: '',
        secureTextEntry: true,
      });
      Toast.show({
        type: 'success',
        text1: 'Успешный вход',
        text2: 'Добро пожаловать',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ошибка входа',
        text2: 'Пожалуйста, проверьте ваш email и пароль',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Добро пожаловать &nbsp;{' '}
          <Text style={{color: '#018FF5'}}>IMPulse</Text>
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleEmailChange(val)}
              value={data.email}
            />
          </View>
          <Text style={styles.text_footer}>Пароль</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
              value={data.password}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
              style={{marginRight: 15}}>
              {data.secureTextEntry ? (
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A2A3D"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <Path d="M9.88 9.88a3 3 0 104.24 4.24M10.73 5.08A10.43 10.43 0 0112 5c7 0 10 7 10 7a13.16 13.16 0 01-1.67 2.68" />
                  <Path d="M6.61 6.61A13.526 13.526 0 002 12s3 7 10 7a9.74 9.74 0 005.39-1.61" />
                  <Path d="M2 2L22 22" />
                </Svg>
              ) : (
                <Svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A2A3D"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <Path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <Circle cx={12} cy={12} r={3} />
                </Svg>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signIn}
            disabled={isLoading}
            onPress={signIn}>
            <Text style={styles.textSign}>Войти</Text>
            {isLoading && <ActivityIndicator color="white" />}
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2A3D',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    gap: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#f0f2f7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: 'black',
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
  },
  signIn: {
    width: '90%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 35,
    backgroundColor: '#1A2A3D',
    margin: 'auto',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
