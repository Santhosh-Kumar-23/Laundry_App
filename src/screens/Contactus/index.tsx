import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
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

const Contact: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8ff'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.primarycolor}
      />
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
            Contact us
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <Image style={[marginHV(0, 4)]} source={Images.contact_us} />
        <Icon
          name="location-on"
          type="material"
          size={25}
          color={colors.primarycolor}
          style={{marginVertical: 10}}
        />
        <Text
          style={{
            textAlign: 'center',
            color: colors.textColor,
            fontFamily: fonts.OpenSansMedium,
            fontSize: 16,
            marginHorizontal: 25,
            marginVertical: 20,
          }}>
          7th
          Floor,House#19,Road#08,Shekhertek-08,MohammedpurDhaka-1207,Bangladesh
        </Text>
        <Icon
          name="email"
          type="materialCommunity"
          size={25}
          color={colors.primarycolor}
          style={{marginVertical: 4}}
        />
        <Text
          style={{
            textAlign: 'center',
            color: colors.textColor,
            fontFamily: fonts.OpenSansMedium,
            fontSize: 16,
            marginHorizontal: 18,
            marginVertical: 20,
            borderBottomWidth: 1,
          }}>
          Support@razinsoft.com
        </Text>
      </View>
      <View style={[HelperStyles.CenterAlign, {marginBottom: 20}]}>
        <Button onPress={() => navigation.goBack()} title="Close" />
      </View>
    </SafeAreaView>
  );
};

export default Contact;
