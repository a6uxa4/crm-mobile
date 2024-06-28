import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {useGetRemainQuantityQuery} from '../../services/base.service';
import ResidualsIcon from '../../assets/icons/Residuals';

export const Residuals = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {data} = useGetRemainQuantityQuery(1);

  const giveTypeIcon = (value: number) => {
    const type = value < 10 ? '#FB3D3D' : value < 20 ? '#FFCC18' : 'null';
    return type !== 'null' ? (
      <View
        style={{
          position: 'absolute',
          left: -30,
          top: 0,
          bottom: 0,
          width: 50,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ResidualsIcon color={type} signColor={!isDarkMode && type === '#FB3D3D' ? 'gainsboro': '#1A2A3D'} />
      </View>
    ) : null;
  };

  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 400,
            color: isDarkMode ? '#FFFFFF' : '#161616',
            paddingLeft: 25,
          }}>
          «1292054001 джемпер поло»
        </Text>
        <View style={style.wrapperInside}>
          <View style={style.textWrapper}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: isDarkMode ? '#FFFFFF' : '#161616',
              }}>
              <Text style={{fontSize: 13, fontWeight: 400}}>Всего: </Text>
              {data?.allQuantity} шт
            </Text>
            <Text
              style={{
                marginLeft: 30,
                fontSize: 15,
                marginRight: '3%',
                color: isDarkMode ? '#B4B4B4' : '#161616',
              }}>
              шт
            </Text>
          </View>
          <View style={style.wrapperMapping}>
            {data &&
              Object.entries(data?.sizeRemain).map(
                ([key, value]: any, index: number) => (
                  <View
                    style={[
                      style.wrapperMain,
                      {backgroundColor: isDarkMode ? '#2F3F51' : '#F4F7F9'},
                    ]}
                    key={index}>
                    {giveTypeIcon(value)}
                    <View
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: `${value > 100 ? 100: value}%`,
                        backgroundColor: isDarkMode ? '#4F718D' : '#DBE8ED',
                        borderRadius: 4,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        lineHeight: 18,
                        paddingLeft: 15,
                        color: isDarkMode ? '#FFFFFF' : '#000000',
                      }}>
                      {key}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        lineHeight: 18,
                        paddingHorizontal: '3%',
                        color:
                          value < 10
                            ? isDarkMode
                              ? '#FB3D3D'
                              : 'red'
                            : value < 20
                            ? isDarkMode
                              ? '#FFCC18'
                              : '#BE8B07'
                            : isDarkMode
                            ? '#FFFFFF'
                            : '#000000',
                        backgroundColor:
                          value < 10 && !isDarkMode
                            ? '#FFE7E7'
                            : value < 20 && !isDarkMode
                            ? '#F9EDC2'
                            : isDarkMode
                            ? '#2F3F51'
                            : '#F4F7F9',
                        borderRadius: 4,
                        height: '100%',
                        textAlignVertical: 'center',
                      }}>
                      {value}
                    </Text>
                  </View>
                ),
              )}
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  wrapperInside: {
    width: '100%',
    height: '90%',
    marginTop: 5,
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 25,
  },
  wrapperMapping: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'stretch',
    paddingLeft: 25,
    paddingTop: 5
  },
  wrapperMain: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    maxHeight: 40,
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 2,
  },
});
