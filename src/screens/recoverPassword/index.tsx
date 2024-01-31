import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {Images} from '../../assets/images/images';
import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
  marginHV,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import styles from '../otp/styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const RecoverPassword: React.FC<ScreenProps> = ({navigation}) => {
  const [focusinput, setFocusinput] = useState();
  const [ischeck, setIscheck] = useState(false);
  const [items, setItems] = useState([
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
      navigation.navigate('Login');
    }

    setItems(newItems);
  };
  const onClickfun = (index: number) => {
    const newItems = [...items] ?? [];
    newItems[index].secureText = !newItems[index]?.secureText;
    setItems(newItems);
  };
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={[flex(1), {backgroundColor: 'white'}]}>
        <View style={[styles.centerimage]}>
          <Image
            source={Images.SplashImage}
            resizeMode="contain"
            style={{height: 130, width: '100%', marginBottom: 40}}
          />
        </View>
        <View style={[styles.centerimage, {marginBottom: 40}]}>
          <Image
            source={Images.reset}
            style={{height: 220, width: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View style={[HelperStyles.CenterAlign]}>
          <Input
            items={items}
            iconPress={onClickfun}
            itemOnchangeText={handleItemChange}
            focusindex={focusinput} // Set the initial focus index
          />
        </View>
        <View style={[HelperStyles.CenterAlign]}>
          <Button
            containerStyle={[marginHV(0, 4)]}
            title="Submit"
            onPress={() => {
              handleFocusClick();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoverPassword;
