import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

interface Styles {
  pinCodeText: any;
  activepoint: any;
  otpcontainner: ViewStyle;
  wrapper: ViewStyle;
  centerimage: ViewStyle;
  title: TextStyle;
  inputcontainer: ViewStyle;
  pointcontainer: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%', backgroundColor: colors.white},
  centerimage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    marginTop: 42,
  },
  otpcontainner: {
    marginHorizontal: 25,
    marginTop: 24,
  },
  pointcontainer: {
    paddingHorizontal: 29,
    paddingVertical: 16,
    marginHorizontal: 8,

    width: 71,
    height: 56,
  },
  activepoint: {
    backgroundColor: colors.black,
  },
  pinCodeText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
  inputcontainer: {
    // marginHorizontal: 8,
    //padding: 20,
  },
});

export default styles;
