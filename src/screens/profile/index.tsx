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
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Profile: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8ff'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.black,
            fontFamily: fonts.OpenSansBold,
          }}>
          Profile
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
          onPress={() => navigation.navigate('Signup')}
          containerStyle={{marginTop: 25}}
          textStyle={{fontSize: 13}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
