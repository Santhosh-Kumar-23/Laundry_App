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

const MyOrder: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.black,
            fontFamily: fonts.OpenSansBold,
          }}>
          My Order
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={Images.notFound} />
        <Text style={{fontFamily: fonts.OpenSansBold, color: colors.black}}>
          You are not signed in!
        </Text>
        <Text style={{fontFamily: fonts.OpenSansBold, color: colors.black}}>
          Please sign in first.
        </Text>
        <Button
          title="Sign Up"
          containerStyle={{marginTop: 25}}
          textStyle={{fontSize: 13}}
        />
      </View>
    </>
  );
};

export default MyOrder;
