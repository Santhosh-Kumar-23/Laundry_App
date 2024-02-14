import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import HelperStyles from '../../utils/helperstyles';
import Icon from '../../components/Icon';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Images} from '../../assets/images/images';
import Button from '../../components/Button';

const ManageAddress: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <View
          style={[
            HelperStyles.Row,
            {
              backgroundColor: colors.white,
              paddingHorizontal: 20,
              paddingVertical: 15,
            },
          ]}>
          <Icon
            onPress={() => navigation.goBack()}
            type="fa"
            size={35}
            color={colors.black}
            name="angle-left"
          />
          <Text
            style={{
              textAlign: 'center',
              color: colors.black,
              fontFamily: fonts.OpenSansBold,
              fontSize: 15,
              alignSelf: 'center',
              alignContent: 'center',
              textAlignVertical: 'center',
              justifyContent: 'center',
              marginHorizontal: 120,
            }}>
            Manage Address
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            backgroundColor: 'white',
            padding: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              source={Images.locat}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </View>
          <View
            style={{
              flex: 0.8,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Area: Daban Newsite
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Address Name: Office
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Flat: House, Block, Road
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon
                onPress={() => navigation.goBack()}
                type="entypo"
                size={25}
                color={colors.primarycolor}
                name="edit"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            backgroundColor: 'white',
            padding: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              source={Images.locat}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </View>
          <View
            style={{
              flex: 0.8,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Area: Daban Newsite
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Address Name: Office
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Flat: House, Block, Road
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon
                onPress={() => navigation.goBack()}
                type="entypo"
                size={25}
                color={colors.primarycolor}
                name="edit"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            backgroundColor: 'white',
            padding: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Image
              source={Images.locat}
              resizeMode="contain"
              style={{height: 30, width: 30}}
            />
          </View>
          <View
            style={{
              flex: 0.8,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Area: Daban Newsite
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Address Name: Office
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fonts.OpenSansBold,
                  color: colors.black,
                }}>
                Flat: House, Block, Road
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon
                onPress={() => navigation.goBack()}
                type="entypo"
                size={25}
                color={colors.primarycolor}
                name="edit"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Add New Address"
          textStyle={{fontSize: 14}}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}
        />
      </View>
    </View>
  );
};

export default ManageAddress;
