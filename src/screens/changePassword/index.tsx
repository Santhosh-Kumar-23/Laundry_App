import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet, Alert} from 'react-native';
import {Images} from '../../assets/images/images';
import HelperStyles, {Width_Height} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ChangePassword: React.FC = () => {
  const navigation = useNavigation();
  //state variables
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //error state variables
  const [currentPasswordError, setCurrentPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleError = () => {
    setCurrentPasswordError(!Boolean(currentPassword));
    setConfirmPasswordError(!Boolean(confirmPassword));
    setNewPasswordError(!Boolean(newPassword));
  };

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Image
          source={Images.SplashImage}
          style={[Width_Height(60, 10)]}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          color: colors.black,
          fontFamily: fonts.OpenSansBold,
          marginTop: 20,
          fontSize: 15,
        }}>
        Reset Password
      </Text>
      <TextInput
        placeholder="Current Password"
        style={styles.inputStyle}
        onChangeText={item => {
          setCurrentPassword(item);
          setCurrentPasswordError(!Boolean(item));
        }}
      />
      {currentPasswordError == true ? (
        <Text style={styles.textError}>This field is required*</Text>
      ) : (
        <></>
      )}
      <TextInput
        placeholder="New Password"
        style={styles.inputStyle}
        onChangeText={item => {
          setNewPassword(item);
          setNewPasswordError(!Boolean(item));
        }}
      />
      {newPasswordError == true ? (
        <Text style={styles.textError}>This field is required*</Text>
      ) : (
        <></>
      )}
      <TextInput
        placeholder="Confirm Password"
        style={styles.inputStyle}
        onChangeText={item => {
          setConfirmPassword(item);
          setConfirmPasswordError(!Boolean(item));
        }}
      />
      {confirmPasswordError == true ? (
        <Text style={styles.textError}>This field is required*</Text>
      ) : (
        <></>
      )}
      <Button
        title="Update Password"
        containerStyle={styles.buttonStyle}
        onPress={() => {
          if (
            Boolean(currentPassword) &&
            Boolean(newPassword) &&
            Boolean(confirmPassword)
          ) {
            Alert.alert('Success');
          } else {
            handleError();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingLeft: 12,
    marginTop: 20,
    fontFamily: fonts.poppinsLight,
    // fontSize: 12,
  },
  textError: {
    color: colors.red,
    fontSize: 12,
    fontFamily: fonts.OpenSansBold,
    marginTop: 5,
  },
  buttonStyle: {
    marginTop: 30,
  },
});

export default ChangePassword;
