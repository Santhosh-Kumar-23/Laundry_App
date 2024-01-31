import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {ScreenProps} from '../../utils/types';

import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
  marginHV,
  marginTBRL,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-elements';
import Icon from '../../components/Icon';

const Privacy: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{backgroundColor: colors.primarycolor, padding: 15}}>
        <View style={[HelperStyles.Row]}>
          <Icon
            onPress={() => navigation.goBack()}
            type="fa"
            size={35}
            color={colors.white}
            name="angle-left"
          />
          <Text
            style={{
              textAlign: 'center',
              color: colors.white,
              fontFamily: fonts.OpenSansBold,
              fontSize: 18,
              alignSelf: 'center',
              alignContent: 'center',
              textAlignVertical: 'center',
              justifyContent: 'center',
              marginHorizontal: 120,
            }}>
            Privacy Policy
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text
          style={{
            color: colors.textColor,
            fontFamily: fonts.OpenSansMedium,
            fontSize: 14,
            marginHorizontal: 18,
            marginVertical: 15,
          }}>
          Nice , this is so cool you can edit this at any time Nice , this is so
          cool you can edit this at any time Nice , this is so cool you can edit
          this at any time Nice , this is so cool you can edit this at any times
        </Text>
      </View>
      <View style={[HelperStyles.CenterAlign, {marginBottom: 20}]}>
        <Button onPress={() => navigation.goBack()} title="Close" />
      </View>
    </>
  );
};

export default Privacy;
