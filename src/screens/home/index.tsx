import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/images/images';
import {fonts} from '../../utils/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import {CardView} from '../../components/CardView/intex';
import {flex} from '../../utils/helperstyles';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();
  const bannerImage = [
    {image: Images.bannerImage1},
    {image: Images.bannerImage2},
    {image: Images.bannerImage3},
  ];

  const serviceCategories = [
    {image: Images.dummy1, title: 'Dry cleaning'},
    {image: Images.dummy2, title: 'House Hold items'},
    {image: Images.dummy3, title: 'New Shirt'},
    {image: Images.dummy3, title: 'Dry cleaning'},
    {image: Images.dummy1, title: 'House Hold items'},
    {image: Images.dummy2, title: 'New Shirt'},
    {image: Images.dummy1, title: 'Dry cleaning'},
    {image: Images.dummy2, title: 'House Hold items'},
    {image: Images.dummy3, title: 'New Shirt'},
    {image: Images.dummy3, title: 'Dry cleaning'},
    {image: Images.dummy1, title: 'House Hold items'},
    {image: Images.dummy2, title: 'New Shirt'},
    {image: Images.dummy1, title: 'Dry cleaning'},
    {image: Images.dummy2, title: 'House Hold items'},
    {image: Images.dummy3, title: 'New Shirt'},
    {image: Images.dummy3, title: 'Dry cleaning'},
    {image: Images.dummy1, title: 'House Hold items'},
    {image: Images.dummy2, title: 'New Shirt'},
    {image: Images.dummy1, title: 'Dry cleaning'},
    {image: Images.dummy2, title: 'House Hold items'},
    {image: Images.dummy3, title: 'New Shirt'},
    {image: Images.dummy3, title: 'New Shirt'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          height: 120,
          width: 100,
          // marginHorizontal: 20,
          backgroundColor: 'white',
          marginTop: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={item.image} resizeMode="contain" style={{width: 60}} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 10,
            fontFamily: fonts.OpenSansBold,
            marginHorizontal: 10,
            color: colors.black,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f8f8ff'}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 0.1,
          flexDirection: 'row',
          elevation: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.hand}
            resizeMode="contain"
            style={{height: 45, width: 45}}
          />
        </View>
        <View style={{flex: 0.8}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 18,
              marginVertical: 20,
            }}>
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: fonts.OpenSansRegular,
                  fontSize: 10,
                }}>
                Hello
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.black,
                  fontFamily: fonts.OpenSansBold,
                }}>
                Please Login
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Images.HomeLogin />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Swiper
            showsPagination={false}
            showsButtons={!true}
            loop={true}
            style={{height: heightPercentageToDP(23), marginBottom: 10}}
            autoplay={true}
            autoplayTimeout={2.5}>
            {bannerImage.map((item, index) => {
              return (
                <View
                  style={{height: '100%', width: '100%', marginTop: 15}}
                  key={index}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{width: '100%', height: 190}}
                  />
                </View>
              );
            })}
          </Swiper>
          <Text
            style={{
              fontSize: 18,
              color: colors.black,
              fontFamily: fonts.OpenSansBold,
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            Service Categories
          </Text>
          <FlatList
            scrollEnabled={false}
            data={serviceCategories}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{marginBottom: 110, marginHorizontal: 20}}
            renderItem={renderItem}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-between',
              marginHorizontal: 5,
            }}
            numColumns={3}></FlatList>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
