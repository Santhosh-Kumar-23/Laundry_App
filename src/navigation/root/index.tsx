import * as React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../../screens/Splash';
import Onboarding from '../../screens/onboarding/intex';
import BottomTab from '../bottomTab';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPassword';
import Profileupload from '../../screens/Profileupload';
import Success from '../../screens/Signup/Success';
import OtpScreen from '../../screens/otp';

interface RootNavigatorProps {}

const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
  const Root = createNativeStackNavigator();

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
        <Root.Screen name={'Profileupload'} component={Profileupload} />
        <Root.Screen name={'Success'} component={Success} />
        <Root.Screen name={'OtpScreen'} component={OtpScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
