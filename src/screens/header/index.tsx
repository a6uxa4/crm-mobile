import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import UserIcon from '../../assets/icons/UserIcon';
import MenuIcon from '../../assets/icons/MenuIcon';

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
            width: 'auto',
            height: 34,
            paddingHorizontal: 8,
            backgroundColor: isDarkMode ? '#018FF5' : '#55B8FF',
            borderRadius: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: isDarkMode ? '#1A2A3D' : '#FFFFFF',
              fontWeight: 600,
            }}>
            IMPulse
          </Text>
        </View>
        <View style={styles.headerRight}>
          <MenuIcon />
          <UserIcon />
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
    justifyContent: 'space-between',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
});
