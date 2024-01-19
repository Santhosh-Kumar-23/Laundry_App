import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Styleprops {
  CenterAlign: ViewStyle;
  Spacebetween: ViewStyle;
  Spacearound: ViewStyle;
  SpaceEvenly: ViewStyle;
  flexStart: ViewStyle;
  flexend: ViewStyle;
  SelfCenter: ViewStyle;
  Row: ViewStyle;
  Column: ViewStyle;
  BottomView: ViewStyle;
  CenterView: ViewStyle;
  TextRegular: TextStyle;
  TextMedium: TextStyle;
  TextBold: TextStyle;
  ShadowEffet: ViewStyle;
}

const HelperStyles: Styleprops = StyleSheet.create({
  CenterAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Spacebetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Spacearound: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  SpaceEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //alignItems: 'center',
  },
  flexend: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  SelfCenter: {
    alignSelf: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Column: {
    flexDirection: 'column',
  },
  BottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  CenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextRegular: {
    fontSize: 12,
  },
  TextMedium: {
    fontSize: 14,
  },
  TextBold: {
    fontSize: 16,
  },
  ShadowEffet: {
    elevation: 1.2,
    backgroundColor: 'white',
    shadowOffset: {width: 2, height: 6},
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
});

export default HelperStyles;

export const flex = (value: number): ViewStyle => {
  return {
    flex: value,
  };
};

export const flexGrow = (flexValue: number): ViewStyle => {
  return {
    flexGrow: flexValue,
  };
};

export const Width_Height = (widthValue: number, heightValue: number) => {
  return {
    width: wp(widthValue) ?? 0,
    height: hp(heightValue) ?? 0,
  };
};

export const marginTBRL = (
  topvalue: number,
  bottomvalue: number,
  Leftvalue: number,
  rightvalue: number,
): ViewStyle => {
  return {
    marginTop: hp(topvalue) ?? 0,
    marginBottom: hp(bottomvalue) ?? 0,
    marginLeft: wp(Leftvalue) ?? 0,
    marginRight: wp(rightvalue) ?? 0,
  };
};

export const marginHV = (
  marginHorizontalValue: number,
  marginVerticalValue: number,
): ViewStyle => {
  return {
    marginHorizontal: wp(marginHorizontalValue) ?? 0,
    marginVertical: hp(marginVerticalValue) ?? 0,
  };
};

export const paddingHV = (
  paddingHorizontalValue: number,
  paddingVerticalValue: number,
): ViewStyle => {
  return {
    paddingHorizontal: wp(paddingHorizontalValue) ?? 0,
    paddingVertical: hp(paddingVerticalValue) ?? 0,
  };
};

export const bgcolor = (Colorcode: string): ViewStyle => {
  return {
    backgroundColor: Colorcode,
  };
};

export const BorderRadius = (value: number): ViewStyle => {
  return {
    borderRadius: value,
  };
};
