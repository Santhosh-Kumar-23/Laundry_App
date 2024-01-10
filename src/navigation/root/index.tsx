import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../../screens/Splash/splashScreen';

interface RootNavigatorProps {}

const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
  const Root = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          
        }}>
        <Root.Screen name={'SplashScreen'} component={SplashScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
