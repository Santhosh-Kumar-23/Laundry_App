import React, {FC, ReactElement} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ButtonInterface} from '../../utils/types';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import HelperStyles from '../../utils/helperstyles';

const AppButton: FC<ButtonInterface> = ({
  containerStyle = null,
  disabled = false,
  title = '',
  loading = false,
  mode = 'solid',
  onPress,
  bordered,
  size = '',
  textStyle = null,
  icon = false,
}) => {
  // Button Variables

  // Other Variables
  let customContainerStyle: StyleProp<ViewStyle>,
    customTextStyle: StyleProp<TextStyle>;
  const small: number = 88;
  const medium: number = 127;
  const large: number = 244;
  const extralarge: number = 312;

  const largeheight: number = 54;
  const smallheight: number = 28;
  const mediumheight: number = 50;

  //button width
  const btnwidth: number =
    size === 'large'
      ? large
      : size === 'medium'
      ? medium
      : size === 'small'
      ? small
      : extralarge;

  //button height
  const btnheight: number =
    size === 'large'
      ? large
      : size === 'medium'
      ? mediumheight
      : size === 'small'
      ? smallheight
      : largeheight;

  switch (mode) {
    case 'light':
      customContainerStyle = {
        backgroundColor: colors.white,
        borderColor: colors.primarycolor,
        borderRadius: bordered ? 27 : 5,
        borderWidth: 1,
        width: btnwidth,
        height: btnheight,
      };

      customTextStyle = {color: colors.primarycolor, bottom: 0};
      break;

    case 'solid':
    default:
      customContainerStyle = {
        backgroundColor: colors.primarycolor,
        borderColor: colors.primarycolor,
        borderRadius: bordered ? 27 : 5,
        borderWidth: 0.5,
        width: btnwidth,
        height: btnheight,
      };

      customTextStyle = {color: colors.white, bottom: 0};
      break;
  }

  function renderButton(): ReactElement {
    return (
      <View style={[HelperStyles.CenterAlign]}>
        <View style={HelperStyles.CenterAlign}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <View style={[HelperStyles.CenterAlign, HelperStyles.Row]}>
              {/* {icon ? <Images.Google /> : null} */}
              <Text style={[styles.textStyles, customTextStyle, textStyle]}>
                {title}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[styles.buttonContainer, customContainerStyle, containerStyle]}
      onPressIn={() => {
        Keyboard.dismiss();
      }}
      onPress={onPress}>
      {renderButton()}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: fonts.OpenSansitalic,
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
export default AppButton;
