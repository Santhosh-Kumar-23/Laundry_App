import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/root';
import {SafeAreaView, StatusBar} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {colors} from './src/utils/colors';

const App: React.FC = () => {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS); //added for initial allow pop up message push notification
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    //get fcm token
    const token = await messaging().getToken();
    console.log('FCM TOKEN:', token);
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  //forground notification
  PushNotification.createChannel({
    channelId: 'fcm_default_channel',
    channelName: 'push_notification',
  });

  useEffect(() => {
    //background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    //forgorund
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      PushNotification.configure({
        onNotification: function (notification) {
          if (notification.foreground) {
            console.log(notification.foreground, 'nottt', remoteMessage);
            PushNotification.localNotification({
              message: remoteMessage?.notification?.title,

              channelId: 'fcm_default_channel',
              vibrate: true,
            });
          }
        },
      });
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <RootNavigator />
      </SafeAreaView>
    </>
  );
};

export default App;
