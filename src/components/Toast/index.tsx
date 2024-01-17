// import React, {FC, useEffect, useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
// import {ToastProps} from '../../utils/types';
// import Icon from '../Icon';
// import {colors} from '../../utils/colors';
// import HelperStyles, {
//   BorderRadius,
//   Width_Height,
//   bgcolor,
//   marginHV,
// } from '../../utils/helperstyles';
// import {fonts} from '../../utils/fonts';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const Toast: FC<ToastProps> = ({content, visiable, closebtnPress}) => {
//   const [time, setTime] = useState(false);
//   useEffect(() => {
//     var inter = setTimeout(function () {
//       setTime(true);
//       visiable = false;
//     }, 3000);
//     return clearInterval(inter);
//   }, [(visiable = true)]);
//   return (
//     <>
//       {visiable ? (
//         <View
//           style={[
//             {height: hp(11), width: 'auto'},
//             bgcolor(colors.black),
//             BorderRadius(5),
//             ,
//           ]}>
//           <Icon
//             name="close"
//             type="ionicon"
//             size={30}
//             color={colors.white}
//             onPress={closebtnPress}
//             style={{alignSelf: 'center', marginTop: 5}}
//           />
//           <Text
//             style={[
//               {
//                 fontSize: 13,
//                 fontFamily: fonts.poppinsRegular,
//                 color: colors.white,
//                 textAlign: 'center',
//               },
//               marginHV(4, 2),
//             ]}>
//             {content}
//           </Text>
//         </View>
//       ) : null}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     //flex: 1,

//     backgroundColor: 'black',
//   },
// });
// export default Toast;
import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Animated, StatusBar, StyleSheet, Text, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {ToastProps} from '../../utils/types';
import Icon from '../Icon';
import {colors} from '../../utils/colors';
import HelperStyles, {
  BorderRadius,
  Width_Height,
  bgcolor,
  marginHV,
} from '../../utils/helperstyles';
import {fonts} from '../../utils/fonts';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Toast = forwardRef((props, ref) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [modalShown, setModalShown] = useState(false);
  const [message, setMessage] = useState('');

  const closeToast = () => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: false,
      }).start(() => {
        setModalShown(false);
      });
    }, 500);
  };

  const callToast = (message: React.SetStateAction<string> | undefined) => {
    if (modalShown) return;
    setModalShown(true);
    setMessage(message);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: false,
    }).start(closeToast);
  };

  let animation = animatedValue.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [-100, -10, 0],
  });

  useImperativeHandle(ref, () => ({
    messages(message: string | undefined) {
      callToast(message);
    },
  }));

  return modalShown ? (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={[
          BorderRadius(5),
          bgcolor(colors.black),

          {height: hp(11), width: 'auto', opacity: 0.9},
        ]}>
        <Icon
          name="close"
          type="ionicon"
          size={30}
          color={colors.white}
          style={{alignSelf: 'center', marginTop: 5}}
        />
        <Text
          style={[
            {
              fontSize: 13,
              fontFamily: fonts.poppinsRegular,
              color: colors.white,
              textAlign: 'center',
            },
            marginHV(4, 2),
          ]}>
          {message}
        </Text>
      </Animated.View>
    </View>
  ) : null;
});

export default Toast;
