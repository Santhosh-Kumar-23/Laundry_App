import React from 'react';
import RootNavigator from './src/navigation/root';
import {SafeAreaView, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
