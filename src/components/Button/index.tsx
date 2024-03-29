import React, {FC, ReactElement} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ButtonInterface} from '../../utils/types';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import HelperStyles, {Width_Height} from '../../utils/helperstyles';
import Icon from '../Icon';

const Button: FC<ButtonInterface> = ({
  containerStyle = null,
  disabled = false,
  title = '',
  onPress,
  size = '',
  textStyle = null,
  icon = false,
  icontype,
  iconName,
}) => {
  function renderButton(): ReactElement {
    return (
      <View style={[HelperStyles.CenterAlign]}>
        <View style={HelperStyles.CenterAlign}>
          <View style={[HelperStyles.CenterAlign, HelperStyles.Row]}>
            <Text style={[styles.textStyles, textStyle]}>{title}</Text>
            {icon ? (
              <Icon
                type={icontype}
                name={iconName}
                size={20}
                style={{marginHorizontal: 10}}></Icon>
            ) : null}
          </View>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.buttonContainer,
        Width_Height(size === 'small' ? 20 : size === 'medium' ? 30 : 90, 5.5),
        HelperStyles.CenterAlign,
        containerStyle,
      ]}
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
    backgroundColor: colors.primarycolor,
    borderColor: colors.primarycolor,
    borderRadius: 5,
  },
  textStyles: {
    fontSize: 16,
    fontFamily: fonts.OpenSansBold,
    color: colors.white,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
export default Button;
