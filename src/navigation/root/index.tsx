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
          options={{headerShown: false}}
        />
        <Root.Screen name={'Login'} component={Login} />
        <Root.Screen name={'Signup'} component={Signup} />
        <Root.Screen name={'ForgotPassword'} component={ForgotPassword} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

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
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
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
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  screen3: {
    flex: 1,
    backgroundColor: 'red',
  },
  screen4: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  screen5: {
    flex: 1,
    backgroundColor: 'green',
  },
});
