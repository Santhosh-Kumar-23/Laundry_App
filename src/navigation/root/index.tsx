import * as React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Splash from '../../screens/Splash';
import Onboarding from '../../screens/onboarding/intex';
import BottomTab from '../bottomTab';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPassword';
import Profileupload from '../../screens/Profileupload';
import Success from '../../screens/Signup/Success';
import OtpScreen from '../../screens/otp';
import Privacy from '../../screens/Privacy';
import Terms from '../../screens/Terms';
import About from '../../screens/Aboutus';
import Contact from '../../screens/Contactus';
import RecoverPassword from '../../screens/recoverPassword';
import ServiceList from '../../screens/serviceList';
import Icon from '../../components/Icon';
import {colors} from '../../utils/colors';
import MyorderView from '../../screens/myOrderView';
import ManageAddress from '../../screens/manageAdress';
import AddAddress from '../../screens/addAddress';
import EditProfile from '../../screens/EditProfile';
import ChangePassword from '../../screens/changePassword';
import CheckOut from '../../screens/checkout';
import PickupSchedule from '../../screens/pickup';
import CheckoutScreen from '../../payments';

interface RootNavigatorProps {}

const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
  const Root = createNativeStackNavigator();
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}>
        <Root.Screen name={'Splash'} component={Splash} />
        <Root.Screen name={'OnboardingScreen'} component={Onboarding} />
        <Root.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen name={'Login'} component={Login} />
        <Root.Screen name={'Signup'} component={Signup} />
        <Root.Screen name={'ForgotPassword'} component={ForgotPassword} />
        <Root.Screen name={'RecoverPassword'} component={RecoverPassword} />
        <Root.Screen name={'Profileupload'} component={Profileupload} />
        <Root.Screen name={'Success'} component={Success} />
        <Root.Screen name={'OtpScreen'} component={OtpScreen} />
        <Root.Screen name={'Privacy'} component={Privacy} />
        <Root.Screen name={'Terms'} component={Terms} />
        <Root.Screen name={'About'} component={About} />
        <Root.Screen name={'Contact'} component={Contact} />
        <Root.Screen name={'MyorderView'} component={MyorderView} />
        <Root.Screen name={'ManageAddress'} component={ManageAddress} />
        <Root.Screen name={'AddAddress'} component={AddAddress} />
        <Root.Screen name={'EditProfile'} component={EditProfile} />
        <Root.Screen name="ChangePassword" component={ChangePassword} />
        <Root.Screen name="CheckOut" component={CheckOut} />
        <Root.Screen name="PickupSchedule" component={PickupSchedule} />
        <Root.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Root.Screen
          name="ServiceList"
          component={ServiceList}
          options={{
            headerShown: !true,
            headerTitleAlign: 'center',
            headerLeft: () => {
              return (
                <Icon
                  // onPress={() => navigation.goBack()}
                  type="fa"
                  size={35}
                  color={colors.black}
                  name="angle-left"
                />
              );
            },
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
