import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

interface Styles {
  wrapper: ViewStyle;
  slider1: ViewStyle;
  text: TextStyle;
  subtext: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  dotstyle: ViewStyle;
  activedot: ViewStyle;
  inputview: ViewStyle;
  input: TextStyle;
  slider4: ViewStyle;
  row: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%', backgroundColor: colors.white},
  slider1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 24,
    marginTop: 45,
    fontWeight: 'bold',
    //marginHorizontal: 35,
    // fontFamily: fonts.interBold,
  },
  subtext: {
    color: colors.grey,
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'normal',
    lineHeight: 27,
    textAlign: 'center',
    marginHorizontal: 35,
    // fontFamily: fonts.robotoitalic,
  },
  button: {
    //marginTop: 159,
    marginBottom: 20,
    // backgroundColor: colors.radioOncolor,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 27,
  },
  dotstyle: {
    // backgroundColor: colors.secondarycolor2,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 50,
  },
  activedot: {
    backgroundColor: colors.primarycolor,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 50,
  },
  inputview: {
    width: 342,
    height: 50,
    borderRadius: 10,
    // backgroundColor: colors.lightgrey,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    // color: colors.placeholdetext,
    // fontFamily: fonts.robotoRegular,
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginHorizontal: 20,
  },
  slider4: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
