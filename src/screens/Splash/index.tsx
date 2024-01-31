import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {Images} from '../../assets/images/images';
import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';

const Splash: React.FC<ScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingScreen');
      // navigation.navigate('Bottomtab', {screen: 'More'});
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
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
