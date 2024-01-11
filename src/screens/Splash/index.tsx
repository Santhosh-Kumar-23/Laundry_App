import React from 'react';
import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {Images} from '../../assets/images/images';
import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';

const Splash: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'white'}
      />
      <View style={[flex(1), HelperStyles.CenterAlign, bgcolor(colors.white)]}>
        <Image
          source={Images.SplashImage}
          style={[Width_Height(60, 10)]}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
