import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {LiquidLike, ExpandingDot} from 'react-native-animated-pagination-dots';
import {colors} from '../../utils/colors';
import Styles from './styles';
// import {Images} from '../../assets/images/png';
import AppButton from '../../components/Button/index';
import {ScreenProps} from '../../utils/types';
import {Images} from '../../assets/images/images';
import HelperStyles, {Width_Height} from '../../utils/helperstyles';
import {fonts} from '../../utils/fonts';
import Icon from '../../components/Icon';
import {color} from 'react-native-elements/dist/helpers';

const {width} = Dimensions.get('screen');

const data = [
  {
    image: require('../../assets/images/png/screen1.png'),
    des: ' Order online or via our app',
  },
  {
    image: require('../../assets/images/png/screen2.png'),
    des: 'We Collect at a time that suits you and work our magic',
  },
  {
    image: require('../../assets/images/png/screen3.png'),
    des: 'We return your clean clothes back to you',
  },
];

const imageW = width * 0.7;
const imageH = imageW * 1.4;

const Onboarding: React.FC<ScreenProps> = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  let scrollOffset = React.useRef(new Animated.Value(0)).current;
  const keyExtractor = React.useCallback(
    (_: any, index: any) => index.toString(),
    [],
  );
  //Current item index of flatlist
  const [activeIndex, setActiveIndex] = React.useState(0);
  let flatListRef = React.useRef(null);
  const gotoNextPage = () => {
    console.log('activeIndex:::: ', activeIndex);

    if (activeIndex + 1 < data.length) {
      // @ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    } else {
    }
  };

  //Flatlist props that calculates current item index
  const onViewRef = React.useRef(({viewableItems}: any) => {
    // console.log('viewableItems::: ', JSON.stringify(viewableItems));
    setActiveIndex(viewableItems[0]?.index);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const renderItem = React.useCallback(({item, index}) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.itemContainer, {backgroundColor: 'white'}]}>
          <Animated.Image
            style={{
              width: 300,
              height: 170,
              borderRadius: 20,
              resizeMode: 'contain',
              marginTop: 100,
              backgroundColor: 'white',
            }}
            source={item.image}
          />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
              fontFamily: fonts.OpenSansMedium,
              marginHorizontal: 20,
              marginTop: 100,
            }}>
            {item.des}
          </Text>
        </View>
      </ScrollView>
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Image
          source={Images.SplashImage}
          style={[Width_Height(75, 30)]}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container, {flex: 0.6, backgroundColor: 'white'}]}>
        {activeIndex !== 2 ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.primarycolor,
              padding: 5,
              width: 70,
              position: 'relative',
              borderRadius: 5,
              top: -110,
              right: -140,
            }}>
            <View>
              <Text
                style={{color: colors.white, fontWeight: '700', fontSize: 12}}>
                Skip
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Icon type="ant" name="caretright" color={'black'} size={10} />
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <Animated.FlatList
          ref={flatListRef}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          decelerationRate={'normal'}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
        />
        {activeIndex !== 3 ? (
          <LiquidLike
            data={data}
            scrollX={scrollX}
            scrollOffset={scrollX}
            dotSize={8}
            inActiveDotOpacity={0.2}
            activeDotColor={colors.primarycolor}
            inActiveDotColor={colors.primarycolor}
            containerStyle={{marginBottom: 10}}
          />
        ) : null}
        {/* {console.log('scrollX::: ', scrollX, activeIndex)} */}
      </View>
      <View style={[styles.container, {backgroundColor: 'white', flex: 0.2}]}>
        <AppButton
          onPress={() => {
            activeIndex == 2
              ? navigation.navigate('BottomTab')
              : gotoNextPage();
          }}
          // bordered={true}
          size="mediumheight"
          title={"Let's Gets Started"}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemContainer: {
    width,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginVertical: 20,
    fontWeight: '700',
    fontSize: 11,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Onboarding;
