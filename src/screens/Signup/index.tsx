import React, {FC, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
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
const Signup: FC<ScreenProps> = ({navigation}) => {
  const [focusinput, setFocusinput] = useState();
  const [ischeck, setIscheck] = useState(false);
  const [items, setItems] = useState([
    {
      id: 'Fullname',
      placeholder: 'Full Name',
      value: '',
      error: 'Full Name field cannot be empty',
      iserror: false,
    },
    {
      id: 'Email',
      placeholder: 'Email',
      value: '',
      error: 'Email field cannot be empty',
      iserror: false,
      additionalError: 'Invalid email address',
    },
    {
      id: 'Phonenumber',
      placeholder: 'Phone Number',
      value: '',
      error: 'Mobile field cannot be empty',
      iserror: false,
      keybordType: 'numeric',
      additionalError: 'Invalid Phone Number',
    },
    {
      id: 'CreatePassword',
      placeholder: ' Create Password',
      value: '',
      secureText: true,
      isLeftIcon: true,
      error: 'Password field cannot be empty',
      iserror: false,
      additionalError:
        'Password must contain one digit from 1 to 9,one lowercase letter,one uppercase letter,one special character,and it must be minimum 8 characters',
    },
    {
      id: 'ConfirmPassword',
      placeholder: 'Confirm Password',
      value: '',
      secureText: true,
      isLeftIcon: true,
      error: 'Confirm Password field cannot be empty',
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
      item?.value === '' ||
      (item?.value != '' && item.additionalError != '' && item.iserror === true)
        ? (item.iserror = true)
        : (item.iserror = false),
    );
    var focusindex = newItems.findIndex(item => item.value === '');
    console.log('focusindex', focusindex);
    if (focusindex != -1) {
      setFocusinput(focusindex);
    } else {
      navigation.navigate('Profileupload');
    }
    //navigation.navigate('Profileupload');
    setItems(newItems);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar
        barStyle="dark-content"
        // translucent={true}
        backgroundColor={'white'}
      />
      <View style={[HelperStyles.CenterAlign, marginHV(0, 3)]}>
        <Image
          source={Images.SplashImage}
          style={[Width_Height(60, 10)]}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
          backgroundColor: colors.white,
        }}
        showsVerticalScrollIndicator={false}>
        <>
          <View style={[HelperStyles.CenterAlign]}>
            <Input
              items={items}
              itemOnchangeText={handleItemChange}
              iconPress={onClickfun}
              focusindex={focusinput} // Set the initial focus index
            />
          </View>
          <Pressable style={[marginHV(5, 1), HelperStyles.flexStart]}>
            <Pressable
              style={{marginTop: 6}}
              onPress={() => setIscheck(!ischeck)}>
              {ischeck ? <Images.check /> : <Images.uncheck />}
            </Pressable>

            <Text
              style={{
                fontSize: 12,
                color: colors.textColor,
                fontFamily: fonts.OpenSansRegular,
                marginHorizontal: 10,
              }}>
              I accept and agree to the
              <Text
                style={[
                  {
                    fontSize: 12,
                    color: colors.textbold,
                    fontFamily: fonts.OpenSansBold,
                  },
                ]}>
                {''} Terms & Conditions
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.textColor,
                  fontFamily: fonts.OpenSansRegular,
                }}>
                {' '}
                And
                <Text
                  style={[
                    {
                      fontSize: 12,
                      color: colors.textbold,
                      fontFamily: fonts.OpenSansBold,
                      lineHeight: 25,
                    },
                  ]}>
                  {''} Privacy Policy
                </Text>
              </Text>
            </Text>
          </Pressable>
          <View style={[HelperStyles.CenterAlign]}>
            <Button
              containerStyle={[marginHV(0, 4)]}
              title="Sign up"
              onPress={handleFocusClick}
            />
            <Pressable
              onPress={() => navigation.navigate('Login')}
              style={[marginHV(0, 4)]}>
              <Text
                style={{
                  fontSize: 13,
                  color: colors.textColor,
                  fontFamily: fonts.OpenSansRegular,
                }}>
                Already have an Account?
                <Text
                  style={[
                    {
                      fontSize: 13,
                      color: colors.textbold,
                      fontFamily: fonts.OpenSansBold,
                    },
                  ]}>
                  {''} Login
                </Text>
              </Text>
            </Pressable>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
