import {StyleSheet, Text, useColorScheme, View} from 'react-native';

export const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.header,
        {backgroundColor: isDarkMode ? '#1A2A3D' : '#FFFFFF'},
      ]}>
      <View style={styles.headerInside}>
        <View
          style={{
            width: 60,
            height: 34,
            backgroundColor: '#018FF5',
            borderRadius: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, color: '#1A2A3D'}}>LOGO</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    zIndex: 1000,
    paddingTop: 50,
  },
  headerInside: {
    height: 50,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
