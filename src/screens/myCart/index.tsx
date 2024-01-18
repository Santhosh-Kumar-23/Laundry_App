import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import {ScreenProps} from '../../utils/types';

import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';

const MyCart: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'white'}
      />
    </SafeAreaView>
  );
};

export default MyCart;
