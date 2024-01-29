import React, {FC} from 'react';
import {ScreenProps} from '../../utils/types';
import {Image, SafeAreaView, StatusBar, View, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import HelperStyles, {marginHV} from '../../utils/helperstyles';
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';
const Success: FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar
        barStyle="dark-content"
        // translucent={true}
        backgroundColor={'white'}
      />
      <View style={[HelperStyles.CenterAlign, [marginHV(0, 28)]]}>
        <Image source={Images.Success_signup}></Image>
        <View style={[marginHV(0, 5)]}>
          <Text
            style={{
              fontSize: 26,
              fontFamily: fonts.OpenSansBold,
              color: colors.textbold,
              alignSelf: 'center',
            }}>
            Congratulations
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: colors.textColor,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              textAlignVertical: 'center',
              alignContent: 'center',
              fontSize: 16,
              fontFamily: fonts.OpenSansMedium,
              marginVertical: 10,
            }}>
            You have successfull signed up on Laundry
          </Text>
        </View>
        <View style={[HelperStyles.CenterAlign, marginHV(0, 5)]}>
          <Button onPress={() => navigation.navigate('Login')} title="Great" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Success;
