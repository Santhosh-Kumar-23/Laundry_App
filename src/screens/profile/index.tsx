import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
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
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-elements';
import Icon from '../../components/Icon';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Dropdown} from 'react-native-element-dropdown';
import Modal from 'react-native-modal';
const data = [
  {label: 'ENG', value: '1'},
  {label: 'Tamil', value: '2'},
  {label: 'Hindi', value: '3'},
  {label: 'Kannada', value: '4'},
];

const Profile: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(colors.primarycolor);

      return () => StatusBar.setBackgroundColor(colors.white);
    }, []),
  );

  return (
    <>
      <View style={{backgroundColor: colors.primarycolor, padding: 15}}>
        <Modal isVisible={isModalVisible} statusBarTranslucent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                paddingVertical: 50,
                borderRadius: 30,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: fonts.OpenSansBold,
                  fontSize: 17,
                  color: colors.black,
                }}>
                You Are About to Logout
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: colors.black,
                  fontFamily: fonts.OpenSansBold,
                  marginTop: 15,
                }}>
                Are you Sure?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                  }}
                  style={{
                    flex: 0.4875,
                    backgroundColor: colors.grey,
                    padding: 15,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.OpenSansBold,
                      color: colors.black,
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  style={{
                    flex: 0.4875,
                    // marginHorizontal: 10,
                    backgroundColor: colors.primarycolor,
                    padding: 15,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.OpenSansBold,
                      color: colors.white,
                    }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
          </View>
        </Modal>
        <View
          style={[
            {
              backgroundColor: colors.primarycolor,
              justifyContent: 'space-between',
              flexDirection: 'row',
            },
          ]}>
          <View>
            <Text style={{color: colors.primarycolor}}>Edit</Text>
          </View>
          <View>
            <Images.UserProfile fill={colors.white} />
          </View>
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            {/* <Icon
              onPress={() => navigation.goBack()}
              type="entypo"
              size={15}
              color={colors.white}
              style={{marginTop: 3}}
              name="edit"
            /> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Text
                style={{color: colors.white, fontFamily: fonts.OpenSansBold}}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: colors.white,
            fontFamily: fonts.OpenSansBold,
            marginTop: 10,
          }}>
          Profile
        </Text>
        <View style={[HelperStyles.Spacebetween]}>
          <Icon type="fa6" size={35} color={colors.white} name="user-large" />
          <Button
            title="Login"
            size={'medium'}
            onPress={() => navigation.navigate('Login')}
            textStyle={{color: colors.primarycolor}}
            containerStyle={{backgroundColor: colors.white, borderRadius: 15}}
          />
        </View>
      </View>
      <View style={[HelperStyles.flexend, marginHV(5, 4)]}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'ENG'}
          value={value}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <Icon
              type="ant"
              style={styles.icon}
              color={'black'}
              name="caretdown"
              size={10}
            />
          )}
        />
      </View>
      <View style={[marginHV(5, 0), {marginTop: hp(1)}]}>
        <Pressable
          onPress={() => navigation.navigate('ManageAddress')}
          style={[HelperStyles.Row]}>
          <Icon
            size={25}
            type="material"
            color={colors.black}
            name="edit-location"
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.OpenSansRegular,
              color: colors.textbold,
              marginHorizontal: 15,
            }}>
            Manage Address
          </Text>
        </Pressable>

        <Divider style={{marginVertical: 20}} />
      </View>
      <View style={[marginHV(5, 0), {marginTop: hp(1)}]}>
        <Pressable
          onPress={() => navigation.navigate('Privacy')}
          style={[HelperStyles.Row]}>
          <Icon
            size={20}
            type="materialCommunity"
            color={colors.black}
            name="lock-outline"
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.OpenSansRegular,
              color: colors.textbold,
              marginHorizontal: 15,
            }}>
            Privacy Policy
          </Text>
        </Pressable>

        <Divider style={{marginVertical: 20}} />
      </View>
      <View style={[marginHV(5, 0)]}>
        <Pressable
          onPress={() => navigation.navigate('Terms')}
          style={[HelperStyles.Row]}>
          <Icon size={20} type="fa" name="legal" color={colors.black} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.OpenSansRegular,
              color: colors.textbold,
              marginHorizontal: 15,
            }}>
            Terms of Service
          </Text>
        </Pressable>

        <Divider style={{marginVertical: 20}} />
      </View>

      <View style={[marginHV(5, 0)]}>
        <Pressable
          onPress={() => navigation.navigate('Contact')}
          style={[HelperStyles.Row]}>
          <Icon size={20} type="simpleLine" name="user" color={colors.black} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.OpenSansRegular,
              color: colors.textbold,
              marginHorizontal: 15,
            }}>
            Contact us
          </Text>
        </Pressable>

        <Divider style={{marginVertical: 20}} />
      </View>
      <View style={[marginHV(5, 0)]}>
        <Pressable
          onPress={() => navigation.navigate('About')}
          style={[HelperStyles.Row]}>
          <Icon size={25} type="material" color={colors.black} name="info" />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.OpenSansRegular,
              color: colors.textbold,
              marginHorizontal: 15,
            }}>
            About Us
          </Text>
        </Pressable>
        <Divider style={{marginVertical: 20}} />
      </View>
      <View style={[marginHV(5, 0), {marginTop: hp(1)}]}>
        <Pressable onPress={() => toggleModal()} style={[HelperStyles.Row]}>
          <Icon size={25} type="material" color={colors.black} name="logout" />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.OpenSansRegular,
              color: colors.textbold,
              marginHorizontal: 15,
            }}>
            Log Out
          </Text>
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: wp(40),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    // position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 3,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: fonts.OpenSansMedium,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: fonts.OpenSansMedium,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
export default Profile;
