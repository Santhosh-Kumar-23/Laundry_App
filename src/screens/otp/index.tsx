import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {Images} from '../../assets/images/images';
import HelperStyles, {
  Width_Height,
  bgcolor,
  flex,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import styles from './styles';
import OTPTextInput from 'react-native-otp-textinput';
import {OtpInput} from 'react-native-otp-entry';
import Button from '../../components/Button';

interface otpView {
  navigation?: any;
}

const OtpScreen: React.FC<otpView> = ({navigation}) => {
  const [counter, setCounter] = useState(50);
  let otpInput = useRef(null);
  const timer = () => {
    setCounter(20);
  };
  useEffect(() => {
    var interval: string | number | NodeJS.Timeout | undefined;
    if (counter > 0) {
      interval = setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={[styles.wrapper]}
        behavior="position"
        keyboardVerticalOffset={0}>
        <View style={[styles.centerimage, {marginTop: 0}]}>
          <Image
            source={Images.SplashImage}
            resizeMode="contain"
            style={{height: 120, width: '100%'}}
          />
        </View>
        <View style={styles.centerimage}>
          <Image
            source={Images.otpImage}
            style={{height: 300, width: '100%'}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Code has been send to 9597****85.</Text>
        <View>
          <OtpInput
            numberOfDigits={4}
            focusColor={colors.primarycolor}
            //focusStickBlinkingDuration={500}
            onTextChange={(text: any) => console.log(text)}
            onFilled={(text: any) =>
              text.length === 4 && navigation.navigate('RecoverPassword')
            }
            theme={{
              containerStyle: styles.otpcontainner,
              inputsContainerStyle: styles.inputcontainer,
              pinCodeContainerStyle: styles.pointcontainer,
              pinCodeTextStyle: styles.pinCodeText,
            }}
          />

          <Text style={styles.title}>
            Resend code in{' '}
            <Text style={[styles.title, {color: colors.primarycolor}]}>
              {counter}{' '}
            </Text>{' '}
            <Text style={styles.title}>s</Text>
          </Text>
        </View>
        {/* <View style={[styles.centerimage]}>
          <Button title="Submit" />
        </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;
