import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from '../../components/CardView/styles';
import {CardView} from '../../components/CardView/intex';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const MyCart: React.FC<ScreenProps> = () => {
  const [count, setCount] = useState(1);
  const navigation = useNavigation();
  return (
    <>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{backgroundColor: 'white', padding: 15}}>
            <Text
              style={{
                textAlign: 'center',
                color: colors.black,
                fontFamily: fonts.OpenSansBold,
              }}>
              My Cart
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 0.3,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.dummy3}
                  style={{height: 100, width: 100}}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: 'white',
                  marginHorizontal: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontFamily: fonts.OpenSansBold,
                    }}>
                    Frock
                  </Text>
                  <Text style={{color: 'red', fontWeight: '900'}}>-10%</Text>
                </View>
                <Text style={{fontSize: 12, marginTop: 5, color: colors.black}}>
                  DRY CLEANING
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={{flex: 0.5, backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: colors.primarycolor,
                        fontFamily: fonts.OpenSansBold,
                      }}>
                      Rs.10/item
                    </Text>
                  </View>
                  <View style={{flex: 0.5, backgroundColor: 'white'}}>
                    <View
                      style={{
                        height: 30,
                        width: 120,
                        backgroundColor: 'whitesmoke',
                        justifyContent: 'space-between',
                        paddingHorizontal: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 5,
                      }}>
                      {count == 1 ? (
                        <Icon
                          // onPress={() => navigation.goBack()}
                          type="entypo"
                          size={16}
                          color={colors.black}
                          name="trash"
                        />
                      ) : (
                        <Icon
                          onPress={() => {
                            setCount(count - 1);
                          }}
                          type="ant"
                          size={20}
                          color={colors.black}
                          name="minus"
                        />
                      )}
                      <Text style={{color: 'black', fontWeight: '800'}}>
                        {count}
                      </Text>
                      <Icon
                        onPress={() => {
                          setCount(count + 1);
                        }}
                        type="ant"
                        size={16}
                        color={colors.black}
                        name="plus"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginHorizontal: 15,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 0.3,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.dummy1}
                  style={{height: 100, width: 100}}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: 'white',
                  marginHorizontal: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontFamily: fonts.OpenSansBold,
                    }}>
                    Shirt
                  </Text>
                  <Text style={{color: 'red', fontWeight: '900'}}>-12%</Text>
                </View>
                <Text style={{fontSize: 12, marginTop: 5, color: colors.black}}>
                  DRY CLEANING
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={{flex: 0.5, backgroundColor: 'white'}}>
                    <Text
                      style={{
                        color: colors.primarycolor,
                        fontFamily: fonts.OpenSansBold,
                      }}>
                      Rs.10/item
                    </Text>
                  </View>
                  <View style={{flex: 0.5, backgroundColor: 'white'}}>
                    <View
                      style={{
                        height: 30,
                        width: 120,
                        backgroundColor: 'whitesmoke',
                        justifyContent: 'space-between',
                        paddingHorizontal: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 5,
                      }}>
                      {count == 1 ? (
                        <Icon
                          // onPress={() => navigation.goBack()}
                          type="entypo"
                          size={16}
                          color={colors.black}
                          name="trash"
                        />
                      ) : (
                        <Icon
                          onPress={() => {
                            setCount(count - 1);
                          }}
                          type="ant"
                          size={20}
                          color={colors.black}
                          name="minus"
                        />
                      )}
                      <Text style={{color: 'black', fontWeight: '800'}}>
                        {count}
                      </Text>
                      <Icon
                        onPress={() => {
                          setCount(count + 1);
                        }}
                        type="ant"
                        size={16}
                        color={colors.black}
                        name="plus"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Text
            style={{
              color: colors.black,
              fontFamily: fonts.OpenSansBold,
              fontSize: 16,
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            Coupen Code
          </Text>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            <View style={{backgroundColor: 'white', flex: 0.8}}>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  fontSize: 15,
                  borderRadius: 5,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primarycolor,
                flex: 0.25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: 'white', fontFamily: fonts.OpenSansBold}}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: colors.black,
              fontFamily: fonts.OpenSansBold,
              fontSize: 16,
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            Order Summary
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              flexDirection: 'row',
              padding: 10,
            }}>
            <View>
              <Text style={{marginVertical: 5}}>Sub total</Text>
              <Text>Delivery Charge</Text>
              <Text style={{marginVertical: 5}}>Discount</Text>
              <Text
                style={{color: colors.black, fontFamily: fonts.OpenSansBold}}>
                Total
              </Text>
            </View>
            <View>
              <Text style={{marginVertical: 5}}>Rs.100</Text>
              <Text>Rs.10</Text>
              <Text style={{marginVertical: 5}}>12%</Text>
              <Text
                style={{color: colors.black, fontFamily: fonts.OpenSansBold}}>
                Rs.40
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              marginHorizontal: 20,
              marginTop: 20,
              padding: 20,
              marginBottom: 110,
            }}>
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: fonts.OpenSansBold,
                  fontSize: 16,
                }}>
                Total
              </Text>
              <Text>Rs.400.00</Text>
            </View>
            <View
              style={{flex: 0.5, backgroundColor: 'white', borderRadius: 5}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CheckOut');
                }}
                style={{
                  backgroundColor: colors.primarycolor,
                  padding: 10,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontFamily: fonts.OpenSansBold}}>
                  Check Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default MyCart;
