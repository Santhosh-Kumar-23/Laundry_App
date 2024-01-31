import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {ScreenProps} from '../../utils/types';

import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';

const Notification: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.black,
            fontFamily: fonts.OpenSansBold,
          }}>
          Notification
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={Images.notifiEmpty} />
        <Text
          style={{
            fontFamily: fonts.OpenSansBold,
            color: colors.black,
            marginVertical: 30,
          }}>
          Your notification is Empty.
        </Text>
      </View>
    </>
  );
};

export default Notification;
