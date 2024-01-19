import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import {CurvedBottomBarExpo} from 'react-native-curved-bottom-bar';
import Icon from '../../components/Icon';
import {NavigationContainer} from '@react-navigation/native';
import {Images} from '../../assets/images/images';
import {colors} from '../../utils/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyCart from '../../screens/myCart';
import Home from '../../screens/home';
import MyOrder from '../../screens/myOrder';
import Notification from '../../screens/notification';
import {fonts} from '../../utils/fonts';
import Profile from '../../screens/profile';

const Screen3 = () => {
  return <View style={styles.screen1}></View>;
};
const Screen4 = () => {
  return <View style={styles.screen1}></View>;
};

export default function BottomTab() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let icontype = '';
    let title = '';

    switch (routeName) {
      case 'My Cart':
        icon = 'shoppingcart';
        icontype = 'ant';
        title = 'My Cart';
        break;
      case 'My Order':
        icontype = 'materialCommunity';
        icon = 'shopping-outline';
        title = 'My Order';
        break;
      case 'Notification':
        icon = 'notifications-on';
        icontype = 'material';
        title = 'Notification';
        break;
      case 'Profile':
        icon = 'user-circle';
        icontype = 'fa5';
        title = 'Profile';
        break;
      case 'Home':
        icon = 'dining';
        break;
    }

    return (
      <>
        <Icon
          name={icon}
          type={icontype}
          size={25}
          color={routeName === selectedTab ? colors.primarycolor : '#2d4357'}
        />
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: routeName === selectedTab ? colors.primarycolor : '#2d4357',
          }}>
          {title}
        </Text>
      </>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 15, fontFamily: fonts.OpenSansBold},
      }}
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={hp(7.5)}
      circleWidth={50}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigate('Home')}>
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.appIcon}
                resizeMode="contain"
                style={{width: 50, height: 50, marginTop: 10}}
              />
            </View>
            {/* <Icon type="material" name={'dining'} color="red" size={25} /> */}
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBarExpo.Screen
        name="My Cart"
        position="LEFT"
        component={() => <MyCart />}
      />
      <CurvedBottomBarExpo.Screen
        name="My Order"
        position="LEFT"
        component={() => <MyOrder />}
      />
      <CurvedBottomBarExpo.Screen
        name="Notification"
        component={() => <Notification />}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="Profile"
        component={() => <Profile />}
        position="RIGHT"
      />
      <CurvedBottomBarExpo.Screen
        name="Home"
        component={() => <Home />}
        position="CENTER"
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    bottom: hp(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    // backgroundColor: 'gray',
  },
});
