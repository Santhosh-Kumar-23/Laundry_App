import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {CardView} from '../../components/CardView/intex';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';
import {TouchableOpacity} from 'react-native';
import HelperStyles from '../../utils/helperstyles';
import Icon from '../../components/Icon';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {StyleSheet} from 'react-native';
import Button from '../../components/Button';

const ServiceList: React.FC = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(Number);
  // Needed in order to use .show()
  const bottomSheet = useRef();

  const serviceList = [
    {
      serviceName: 'Woman',
    },
    {
      serviceName: 'Socks',
    },
    {
      serviceName: 'Test1',
    },
    {
      serviceName: 'Test2',
    },
    {
      serviceName: 'Test3',
    },
    {
      serviceName: 'Test4',
    },
    {
      serviceName: 'Test5',
    },
    {
      serviceName: 'Test6',
    },
    {
      serviceName: 'Test7',
    },
    {
      serviceName: 'Test8',
    },
    {
      serviceName: 'Test9',
    },
    {
      serviceName: 'Test10',
    },
  ];

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <BottomSheet hasDraggableIcon ref={bottomSheet} height={500}>
          <View style={{flex: 0.85, backgroundColor: 'white'}}>
            <View style={{marginHorizontal: 20}}>
              <Text style={{fontFamily: fonts.OpenSansRegular}}>
                Select Variant
              </Text>
              <Text
                style={{
                  color: colors.black,
                  fontSize: 22,
                  fontFamily: fonts.OpenSansBold,
                  marginVertical: 10,
                }}>
                Frock
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  padding: 15,
                  borderColor: 'gray',
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <View style={{flex: 0.3}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontFamily: fonts.OpenSansBold,
                    }}>
                    Cotton
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#7b39fd',
                      fontFamily: fonts.OpenSansBold,
                    }}>
                    Rs. 10
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.7,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primarycolor,
                      padding: 10,
                      paddingHorizontal: 30,
                      alignSelf: 'flex-end',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: colors.white,
                        fontFamily: fonts.OpenSansBold,
                      }}>
                      Add Item
                    </Text>
                  </TouchableOpacity>
                  {/* <View
                    style={{
                      height: 30,
                      width: 100,
                      backgroundColor: 'gray',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Icon
                      onPress={() => navigation.goBack()}
                      type="ant"
                      size={20}
                      color={colors.black}
                      name="minus"
                    />
                    <Text>2</Text>
                    <Icon
                      onPress={() => navigation.goBack()}
                      type="ant"
                      size={15}
                      color={colors.black}
                      name="plus"
                    />
                  </View> */}
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.25,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 22,
                color: '#7b39fd',
                fontFamily: fonts.OpenSansBold,
              }}>
              Rs. 0.0
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Button
                title="Confirm"
                textStyle={{fontFamily: fonts.OpenSansBold, fontSize: 13}}
                containerStyle={{backgroundColor: '#7b39fd'}}
              />
            </View>
          </View>
        </BottomSheet>
        <View
          style={[
            HelperStyles.Row,
            {
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 20,
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
            DRY CLEANING
          </Text>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {serviceList.map((item, index: number) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log('INDEX:::::', index);
                    setSelectedIndex(index);
                  }}
                  key={index}
                  style={{
                    backgroundColor:
                      selectedIndex == index ? colors.primarycolor : 'white',
                    height: 45,
                    width: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily:
                        selectedIndex == index
                          ? fonts.OpenSansBold
                          : fonts.OpenSansMedium,
                      color: selectedIndex == index ? 'white' : 'black',
                    }}>
                    {item.serviceName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View>
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
                  spot clean and hand washing is suitable or use a hentle cycle
                  with cold water and a mild detergent.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View style={{flex: 0.5, backgroundColor: 'white'}}>
                    <Text
                      style={{
                        fontSize: 11,
                        color: 'red',
                        textDecorationLine: 'line-through',
                      }}>
                      Rs.20/item
                    </Text>
                    <Text style={{color: colors.black}}>Rs.10/item</Text>
                  </View>
                  <View style={{flex: 0.5, backgroundColor: 'white'}}>
                    <TouchableOpacity
                      onPress={() => {
                        bottomSheet.current.show();
                      }}
                      style={{
                        backgroundColor: colors.primarycolor,
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 6,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: fonts.OpenSansBold,
                        }}>
                        Show More
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ServiceList;
