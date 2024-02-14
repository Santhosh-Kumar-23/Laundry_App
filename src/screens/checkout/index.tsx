import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import HelperStyles, {flex} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import Icon from '../../components/Icon';
import {fonts} from '../../utils/fonts';
import {Images} from '../../assets/images/images';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../components/Button';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Calendar from '../../components/Calendar';
import RazorpayCheckout from 'react-native-razorpay';

const CheckOut: React.FC<ScreenProps> = ({route}) => {
  const [selectPayment, setSelectPayment] = useState(1);
  const navigation = useNavigation();

  console.log('PICKUP', route?.params?.pickup ?? null);
  console.log('DELIVERY', route?.params?.delivery ?? null);

  const data = [
    {label: 'Madurai', value: '1'},
    {label: 'Trichy', value: '2'},
    {label: 'Chennai', value: '3'},
  ];

  const payment = [
    {
      name: 'Cash On Delivery',
      image: Images.cashOn,
    },
    {
      name: 'Online Payment',
      image: Images.visa,
    },
  ];

  const amount = 100;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      config: {
        display: {
          show: [{method: 'paylater'}],
          preferences: {show_default_blocks: true},
        },
      },
      description: 'Im buying a Innova car',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: currency,
      key: 'rzp_test_XH7TB10urk1Tlg',
      amount: amount * 100,
      name: 'My app',
      order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: '99msanthosh@gmail.com',
        contact: '9597654585',
        name: 'Santhosh Kumar',
      },

      theme: {color: 'blue'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('RESPONSE:', data);
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        console.log(`Payment Id::${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const [value, setValue] = useState(null);
  return (
    <SafeAreaView style={{flex: 1}}>
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
          Checkout
        </Text>
      </View>

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontFamily: fonts.OpenSansBold,
              color: 'black',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            Personal Info
          </Text>
          <TextInput
            placeholder="Full Name"
            style={{
              borderWidth: 1,
              fontFamily: fonts.poppinsRegular,
              borderColor: 'gray',
              backgroundColor: 'white',
              borderRadius: 5,
              marginHorizontal: 20,
              paddingLeft: 12,
              marginTop: 10,
            }}
          />
          <TextInput
            placeholder="Email Address"
            style={{
              borderWidth: 1,
              fontFamily: fonts.poppinsRegular,
              borderColor: 'gray',
              backgroundColor: 'white',
              borderRadius: 5,
              marginHorizontal: 20,
              paddingLeft: 12,
              marginTop: 10,
            }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{
              borderWidth: 1,
              fontFamily: fonts.poppinsRegular,
              borderColor: 'gray',
              backgroundColor: 'white',
              borderRadius: 5,
              marginHorizontal: 20,
              paddingLeft: 12,
              marginTop: 10,
            }}
          />
          <TextInput
            placeholder="Alternate Phone Number"
            style={{
              borderWidth: 1,
              fontFamily: fonts.poppinsRegular,
              borderColor: 'gray',
              backgroundColor: 'white',
              borderRadius: 5,
              marginHorizontal: 20,
              paddingLeft: 12,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              fontFamily: fonts.OpenSansBold,
              color: 'black',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            Shipping Schedule
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PickupSchedule', {
                  title: 'Pick Up Schedule',
                });
              }}
              style={{
                flex: 0.4875,
                backgroundColor: 'white',
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: 1,
                // height: 100,
                padding: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Images.pickup} resizeMode="contain" />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.OpenSansBold,
                    marginHorizontal: 5,
                    fontSize: 12,
                  }}>
                  Pick Up
                </Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  // onPress={() => navigation.goBack()}
                  type="feather"
                  size={20}
                  color={colors.black}
                  name="calendar"
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.OpenSansBold,
                    marginHorizontal: 5,
                  }}>
                  May 30, 2023
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  // onPress={() => navigation.goBack()}
                  type="feather"
                  size={18}
                  color={colors.black}
                  name="clock"
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.OpenSansBold,
                    marginHorizontal: 5,
                  }}>
                  {route?.params?.delivery ?? null}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PickupSchedule', {
                  title: 'Delivery Schedule',
                });
              }}
              style={{
                flex: 0.4875,
                backgroundColor: 'white',
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Images.drop} resizeMode="contain" />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.OpenSansBold,
                    marginHorizontal: 5,
                    fontSize: 12,
                  }}>
                  Delivery
                </Text>
                <Text style={{color: 'red'}}>*</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  // onPress={() => navigation.goBack()}
                  type="feather"
                  size={20}
                  color={colors.black}
                  name="calendar"
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.OpenSansBold,
                    marginHorizontal: 5,
                  }}>
                  May 30, 2023
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  // onPress={() => navigation.goBack()}
                  type="feather"
                  size={18}
                  color={colors.black}
                  name="clock"
                />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: fonts.OpenSansBold,
                    marginHorizontal: 5,
                  }}>
                  12:00 - 16:42
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: fonts.OpenSansBold,
              color: 'black',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            Address
          </Text>
          <View style={{marginHorizontal: 20}}>
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
              placeholder={'Select Area'}
              value={value}
              onChange={item => {
                setValue(item.value);
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
          <Text
            style={{
              fontFamily: fonts.OpenSansBold,
              color: 'black',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            Additional Instructions
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="For e.g. call before delivery"
            style={{
              borderWidth: 1,
              fontFamily: fonts.poppinsRegular,
              borderColor: 'gray',
              backgroundColor: 'white',
              borderRadius: 5,
              paddingLeft: 12,
              marginHorizontal: 20,
              textAlignVertical: 'top',

              marginTop: 10,
            }}
          />
          <Text
            style={{
              fontFamily: fonts.OpenSansBold,
              color: 'black',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            Payment Method
          </Text>
          {payment.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectPayment(index);
                }}
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  marginTop: 10,
                  padding: 8,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  borderWidth: selectPayment == index ? 2 : 1,
                  borderColor:
                    selectPayment == index ? colors.primarycolor : 'gray',
                }}>
                <View
                  style={{
                    flex: 0.2,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{height: 30, width: 30}}
                  />
                </View>
                <View
                  style={{
                    flex: 0.8,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.OpenSansBold,
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontFamily: fonts.OpenSansBold,
                color: 'black',
                // marginHorizontal: 20,
              }}>
              Total Payable
            </Text>
            <Text style={{fontFamily: fonts.OpenSansBold, color: colors.black}}>
              Rs. 6000
            </Text>
          </View>
          <View
            style={{
              marginBottom: 100,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="Pay Now"
              onPress={() => {
                handlePayment();
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    // marginHorizontal: 20,
    paddingHorizontal: 8,
    marginTop: 10,
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
  inputSearchStyle: {
    backgroundColor: 'pink',
  },
});
export default CheckOut;
