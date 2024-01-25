import React, {FC, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {Images} from '../../assets/images/images';
import HelperStyles, {
  flex,
  bgcolor,
  Width_Height,
  marginHV,
  marginTBRL,
} from '../../utils/helperstyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
const ForgotPassword: FC<ScreenProps> = ({navigation}) => {
  const [focusinput, setFocusinput] = useState();
  const [items, setItems] = useState([
    {
      id: 'Email',
      placeholder: 'Email or Phone',
      value: '',
      error: 'Email field cannot be empty',
      iserror: false,
    },
  ]);
  const handleItemChange = (index: number, newText: string) => {
    const newItems = [...items];
    newItems[index].value = newText;
    setItems(newItems);
  };

  const handleFocusClick = () => {
    const newItems = [...items] ?? [];

    newItems.map((item, i) =>
      item?.value === '' ? (item.iserror = true) : (item.iserror = false),
    );
    var focusindex = newItems.findIndex(item => item.value === '');

    setFocusinput(focusindex);

    setItems(newItems);
    navigation.navigate('OtpScreen');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        // translucent={true}
        backgroundColor={'white'}
      />
      <View style={[marginHV(5, 8)]}>
        <Text
          style={{
            fontSize: 26,
            color: colors.primarycolor,
            fontFamily: fonts.OpenSansBold,
          }}>
          Recover Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: colors.primarycolor,
            fontFamily: fonts.OpenSansMedium,
            marginTop: 10,
          }}>
          Enter your email or phone number to recover Password
        </Text>
      </View>
      <View style={[HelperStyles.CenterAlign]}>
        {/* <View style={[HelperStyles.CenterAlign, marginHV(0, 10)]}>
          <Image
            source={Images.SplashImage}
            style={[Width_Height(60, 10)]}
            resizeMode="contain"
          />
        </View> */}
        <Input
          items={items}
          itemOnchangeText={handleItemChange}
          focusindex={focusinput} // Set the initial focus index
        />
      </View>

      <View style={[HelperStyles.CenterAlign]}>
        <Button
          containerStyle={[marginHV(0, 15)]}
          title="Send OTP"
          onPress={handleFocusClick}
        />
      </View>
    </SafeAreaView>
  );
};
export default ForgotPassword;
