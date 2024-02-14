import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {colors} from '../../utils/colors';
import Icon from '../../components/Icon';
import {fonts} from '../../utils/fonts';
import {Images} from '../../assets/images/images';
import HelperStyles from '../../utils/helperstyles';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-elements';

const MyorderView: React.FC = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          HelperStyles.Row,
          {
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: 'white',
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
          Order Details
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setSelected(!selected);
          // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        }}
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          marginTop: 20,
          padding: 10,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontFamily: fonts.OpenSansBold, color: colors.black}}>
          Items
        </Text>
        <Icon
          type="entypo"
          size={18}
          color={colors.black}
          name={selected == true ? 'chevron-up' : 'chevron-down'}
        />
      </Pressable>
      {selected == true ? (
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            borderTopWidth: 0,
            padding: 5,
          }}>
          <View style={{flexDirection: 'row', padding: 6}}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.dummy3}
                style={{height: 50, width: 50}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                flex: 0.8,
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 10,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text
                  style={{color: colors.black, fontFamily: fonts.OpenSansBold}}>
                  Cotton
                </Text>
                <Text>Quantity 2</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text
                  style={{color: colors.black, fontFamily: fonts.OpenSansBold}}>
                  Rs 10
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          marginTop: 20,
          padding: 5,
        }}>
        <Text
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            fontFamily: fonts.OpenSansBold,
            color: colors.black,
          }}>
          Shipping Address
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 0.2,
              backgroundColor: 'white',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.location}
              style={{height: 50, width: 50}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 0.8,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <View>
              <Text style={{marginVertical: 5}}>Name</Text>
              <Text>Phone Number</Text>
              <Text style={{marginVertical: 5}}>Address</Text>
            </View>
            <View>
              <Text style={{marginVertical: 5}}>Santhosh Kumar</Text>
              <Text>9597654585</Text>
              <Text style={{marginVertical: 5}}>Area: Daban Newsite</Text>
              <Text>Address Name: Office</Text>
              <Text style={{marginVertical: 5}}>House: 27</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          padding: 10,
          paddingHorizontal: 25,
          marginTop: 20,
        }}>
        <View>
          <Text
            style={{
              marginVertical: 5,
              color: 'black',
              fontFamily: fonts.OpenSansBold,
            }}>
            Order ID
          </Text>
          <Text>Order Date :</Text>
          <Text style={{marginVertical: 5}}>Pickup Date :</Text>
          <Text>Delivery Date :</Text>
          <Text style={{marginVertical: 5}}>Payment Status :</Text>
          <Text>Delivery Status :</Text>
          <Text style={{marginVertical: 5}}>Sub total :</Text>
          <Text>Delivery cost :</Text>
          <Text style={{marginVertical: 5}}>Discount</Text>
          <Text
            style={{
              marginVertical: 10,
              color: 'black',
              fontFamily: fonts.OpenSansBold,
            }}>
            Total
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginVertical: 5,
              color: 'black',
              fontFamily: fonts.OpenSansBold,
              alignSelf: 'flex-end',
            }}>
            #000633
          </Text>
          <Text style={{alignSelf: 'flex-end'}}>2024-01-07, 04.41pm</Text>
          <Text style={{marginVertical: 5, alignSelf: 'flex-end'}}>
            24-January-2023, 8-09.34
          </Text>
          <Text style={{alignSelf: 'flex-end'}}>26-January-2023, 5-09.34</Text>
          <Text
            style={{
              marginVertical: 5,
              alignSelf: 'flex-end',
              color: colors.primarycolor,
              fontFamily: fonts.OpenSansBold,
            }}>
            Paid
          </Text>
          <Text style={{alignSelf: 'flex-end'}}>Processing</Text>
          <Text style={{marginVertical: 5, alignSelf: 'flex-end'}}>Rs.101</Text>
          <Text style={{alignSelf: 'flex-end'}}>Rs.12</Text>
          <Text
            style={{marginVertical: 5, color: 'red', alignSelf: 'flex-end'}}>
            10%
          </Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginVertical: 10,
              color: 'black',
              fontFamily: fonts.OpenSansBold,
            }}>
            Rs.123
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyorderView;
