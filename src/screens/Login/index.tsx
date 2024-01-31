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
const Login: FC<ScreenProps> = ({navigation}) => {
  const [focusinput, setFocusinput] = useState();
  const [email, setemail] = useState('');
  const [passwpord, setPassword] = useState('');

  const [items, setItems] = useState([
    {
      id: 'Email',
      placeholder: 'Email or Phone',
      value: '',
      error: 'Email field cannot be empty',
      iserror: false,
      additionalError: 'Invalid email address',
    },
    {
      id: 'Password',
      placeholder: 'Password',
      value: '',
      secureText: true,
      isLeftIcon: true,
      error: 'Password field cannot be empty',
      iserror: false,
      additionalError:
        'Password must contain one digit from 1 to 9,one lowercase letter,one uppercase letter,one special character,and it must be minimum 8 characters',
    },
  ]);
  const handleItemChange = (
    index: number,
    newText: string,
    isValidEmail: boolean,
  ) => {
    const newItems = [...items];
    newItems[index].value = newText;
    isValidEmail
      ? (newItems[index].iserror = false)
      : (newItems[index].iserror = true);
    newItems[index].id === 'Email'
      ? setemail(newItems[index].value)
      : setPassword(newItems[index].value);
    setItems(newItems);
  };
  const onClickfun = (index: number) => {
    const newItems = [...items] ?? [];
    newItems[index].secureText = !newItems[index]?.secureText;
    setItems(newItems);
  };
  const handleFocusClick = () => {
    const newItems = [...items] ?? [];

    newItems.map((item, i) =>
      item?.value === '' || (item?.value != '' && item.iserror === true)
        ? (item.iserror = true)
        : (item.iserror = false),
    );
    var focusindex = newItems.findIndex(item => item.iserror === true);

    setFocusinput(focusindex);

    setItems(newItems);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar
        barStyle="dark-content"
        // translucent={true}
        backgroundColor={'white'}
      />
      <View style={[HelperStyles.CenterAlign]}>
        <View style={[HelperStyles.CenterAlign, marginHV(0, 10)]}>
          <Image
            source={Images.SplashImage}
            style={[Width_Height(60, 10)]}
            resizeMode="contain"
          />
        </View>
        <Input
          items={items}
          itemOnchangeText={handleItemChange}
          iconPress={onClickfun}
          focusindex={focusinput} // Set the initial focus index
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('ForgotPassword')}
        style={[HelperStyles.flexend, marginHV(5, 1)]}>
        <Text
          style={{
            fontSize: 12,
            color: colors.textColor,
            fontFamily: fonts.OpenSansMedium,
          }}>
          Forgot Password?
        </Text>
      </Pressable>
      <View style={[HelperStyles.CenterAlign]}>
        <Button
          containerStyle={[marginHV(0, 5)]}
          title="Login"
          onPress={handleFocusClick}
        />
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={[marginHV(0, 15)]}>
          <Text
            style={{
              fontSize: 13,
              color: colors.textColor,
              fontFamily: fonts.OpenSansRegular,
            }}>
            Don't have an Account?
            <Text
              style={[
                {
                  fontSize: 13,
                  color: colors.textbold,
                  fontFamily: fonts.OpenSansBold,
                },
              ]}>
              {''} Sign up
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Login;
