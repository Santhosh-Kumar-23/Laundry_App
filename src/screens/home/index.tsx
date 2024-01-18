import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';

const Home: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.1,
            flexDirection: 'row',
            elevation: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.hand}
              resizeMode="contain"
              style={{height: 50, width: 50}}
            />
          </View>
          <View style={{backgroundColor: 'white', flex: 0.8}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 18,
                marginVertical: 20,
              }}>
              <View>
                <Text
                  style={{
                    color: colors.black,
                    fontFamily: fonts.OpenSansRegular,
                    fontSize: 11,
                  }}>
                  Hello
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.black,
                    fontFamily: fonts.OpenSansBold,
                  }}>
                  Please Login
                </Text>
              </View>
              <View>
                <Images.HomeLogin />
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 0.9}}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
