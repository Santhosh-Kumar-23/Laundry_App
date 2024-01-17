import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../../screens/Splash';
import OnboardingScreen from '../../screens/onboarding/intex';

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
        <Root.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
