import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from '../../components/CardView/styles';
import {CardView} from '../../components/CardView/intex';
import {Divider} from '@rneui/themed';

const MyCart: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f8f8ff'}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
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
      <ScrollView>
        <CardView maxheight={250}>
          <View style={[styles.textContainer, {marginTop: 20}]}>
            <Text style={styles.textStyle}>Order ID</Text>
            <Text style={styles.textStyle}>#000632</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              09 jan, 2024
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Delivery Option
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Online Payment
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payable Amount
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Rs.100.00
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{backgroundColor: 'white', flex: 0.5}}>
              <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
                Status
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#3ad1fc',
                flex: 0.5,
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: 'bold', color: colors.white},
                ]}>
                Processing
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payment Status
            </Text>
            <Text style={[styles.textStyle]}>Paid</Text>
          </View>
          <Divider
            width={3}
            style={{marginHorizontal: 20, marginVertical: 6}}
          />
          <View style={styles.textContainer}>
            <View></View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Icon
                type="material"
                name="location-pin"
                size={20}
                color={colors.black}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 12, color: colors.black}}
                  numberOfLines={1}>
                  2, Anna nagar Madurai
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View>
                <Icon type="ant" name="right" size={12} color={colors.black} />
              </View>
            </View>
          </View>
        </CardView>
        <CardView maxheight={250}>
          <View style={[styles.textContainer, {marginTop: 20}]}>
            <Text style={styles.textStyle}>Order ID</Text>
            <Text style={styles.textStyle}>#000632</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              09 jan, 2024
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Delivery Option
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Online Payment
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payable Amount
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Rs.100.00
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{backgroundColor: 'white', flex: 0.5}}>
              <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
                Status
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#3ad1fc',
                flex: 0.5,
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: 'bold', color: colors.white},
                ]}>
                Processing
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payment Status
            </Text>
            <Text style={[styles.textStyle]}>Paid</Text>
          </View>
          <Divider
            width={3}
            style={{marginHorizontal: 20, marginVertical: 6}}
          />
          <View style={styles.textContainer}>
            <View></View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Icon
                type="material"
                name="location-pin"
                size={20}
                color={colors.black}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 12, color: colors.black}}
                  numberOfLines={1}>
                  2, Anna nagar Madurai
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View>
                <Icon type="ant" name="right" size={12} color={colors.black} />
              </View>
            </View>
          </View>
        </CardView>
        <CardView maxheight={250}>
          <View style={[styles.textContainer, {marginTop: 20}]}>
            <Text style={styles.textStyle}>Order ID</Text>
            <Text style={styles.textStyle}>#000632</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              09 jan, 2024
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Delivery Option
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Online Payment
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payable Amount
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Rs.100.00
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{backgroundColor: 'white', flex: 0.5}}>
              <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
                Status
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#3ad1fc',
                flex: 0.5,
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: 'bold', color: colors.white},
                ]}>
                Processing
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payment Status
            </Text>
            <Text style={[styles.textStyle]}>Paid</Text>
          </View>
          <Divider
            width={3}
            style={{marginHorizontal: 20, marginVertical: 6}}
          />
          <View style={styles.textContainer}>
            <View></View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Icon
                type="material"
                name="location-pin"
                size={20}
                color={colors.black}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 12, color: colors.black}}
                  numberOfLines={1}>
                  2, Anna nagar Madurai
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View>
                <Icon type="ant" name="right" size={12} color={colors.black} />
              </View>
            </View>
          </View>
        </CardView>
        <CardView maxheight={250}>
          <View style={[styles.textContainer, {marginTop: 20}]}>
            <Text style={styles.textStyle}>Order ID</Text>
            <Text style={styles.textStyle}>#000632</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              09 jan, 2024
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Delivery Option
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Online Payment
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payable Amount
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Rs.100.00
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{backgroundColor: 'white', flex: 0.5}}>
              <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
                Status
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#3ad1fc',
                flex: 0.5,
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: 'bold', color: colors.white},
                ]}>
                Processing
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payment Status
            </Text>
            <Text style={[styles.textStyle]}>Paid</Text>
          </View>
          <Divider
            width={3}
            style={{marginHorizontal: 20, marginVertical: 6}}
          />
          <View style={styles.textContainer}>
            <View></View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Icon
                type="material"
                name="location-pin"
                size={20}
                color={colors.black}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 12, color: colors.black}}
                  numberOfLines={1}>
                  2, Anna nagar Madurai
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View>
                <Icon type="ant" name="right" size={12} color={colors.black} />
              </View>
            </View>
          </View>
        </CardView>
        <CardView maxheight={250}>
          <View style={[styles.textContainer, {marginTop: 20}]}>
            <Text style={styles.textStyle}>Order ID</Text>
            <Text style={styles.textStyle}>#000632</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              09 jan, 2024
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Delivery Option
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Online Payment
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payable Amount
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Rs.100.00
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{backgroundColor: 'white', flex: 0.5}}>
              <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
                Status
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#3ad1fc',
                flex: 0.5,
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: 'bold', color: colors.white},
                ]}>
                Processing
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payment Status
            </Text>
            <Text style={[styles.textStyle]}>Paid</Text>
          </View>
          <Divider
            width={3}
            style={{marginHorizontal: 20, marginVertical: 6}}
          />
          <View style={styles.textContainer}>
            <View></View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Icon
                type="material"
                name="location-pin"
                size={20}
                color={colors.black}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 12, color: colors.black}}
                  numberOfLines={1}>
                  2, Anna nagar Madurai
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View>
                <Icon type="ant" name="right" size={12} color={colors.black} />
              </View>
            </View>
          </View>
        </CardView>
        <CardView maxheight={250}>
          <View style={[styles.textContainer, {marginTop: 20}]}>
            <Text style={styles.textStyle}>Order ID</Text>
            <Text style={styles.textStyle}>#000632</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              09 jan, 2024
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Delivery Option
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Online Payment
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payable Amount
            </Text>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Rs.100.00
            </Text>
          </View>
          <View style={styles.textContainer}>
            <View style={{backgroundColor: 'white', flex: 0.5}}>
              <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
                Status
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#3ad1fc',
                flex: 0.5,
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  {fontWeight: 'bold', color: colors.white},
                ]}>
                Processing
              </Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
              Payment Status
            </Text>
            <Text style={[styles.textStyle]}>Paid</Text>
          </View>
          <Divider
            width={3}
            style={{marginHorizontal: 20, marginVertical: 6}}
          />
          <View style={styles.textContainer}>
            <View></View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <Icon
                type="material"
                name="location-pin"
                size={20}
                color={colors.black}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 12, color: colors.black}}
                  numberOfLines={1}>
                  2, Anna nagar Madurai
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View>
                <Icon type="ant" name="right" size={12} color={colors.black} />
              </View>
            </View>
          </View>
        </CardView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCart;
