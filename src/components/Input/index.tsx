import React, {useState, ChangeEvent} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

import {InputProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import HelperStyles, {
  Width_Height,
  marginHV,
  marginTBRL,
} from '../../utils/helperstyles';
import {fonts} from '../../utils/fonts';
import Icon from '../Icon';

const Input: React.FC<InputProps> = ({items, itemOnchangeText, iconPress}) => {
  return (
    <View>
      {items.map((item, index) => (
        <>
          <View
            key={index}
            style={[
              styles.inputContainer,
              Width_Height(90, 6.5),
              marginHV(0, 1.5),
              HelperStyles.CenterAlign,

              {
                justifyContent: item.isrightIcon
                  ? 'flex-start'
                  : 'space-between',
                alignItems: 'center',
                alignSelf: 'center',
                alignContent: 'center',
                borderWidth: item.iserror && item.value == '' ? 2 : 1,
                borderColor:
                  item.iserror && item.value == '' ? colors.red : colors.grey,
              },
            ]}>
            {item.isrightIcon ? (
              <Icon
                type={item.icontype}
                name={item.iconName ?? ''}
                size={20}
                style={marginTBRL(0, 0.5, 3, 0)}
              />
            ) : null}
            <TextInput
              style={[styles.input, Width_Height(75, 6.5), marginHV(2, 0)]}
              key={item.id}
              value={item.value}
              autoFocus={item.value == '' && item.iserror ? true : false}
              onChangeText={newText => itemOnchangeText(index, newText)}
              placeholder={item.placeholder}
              placeholderTextColor={colors.placeholderclr}
              secureTextEntry={item.secureText ?? false}
              underlineColorAndroid={'transparent'}
            />
            {item.isLeftIcon ? (
              <>
                <Icon
                  type="materialCommunity"
                  name={item.secureText ? 'eye-off' : 'eye'}
                  size={20}
                  onPress={() => iconPress(index)}
                  style={marginTBRL(0, 0, 0, 3)}
                />
              </>
            ) : null}
          </View>
          {item.iserror && item.value === '' ? (
            <Text style={styles.errorText}>{item.error}</Text>
          ) : null}
        </>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
  },
  input: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
    fontSize: 16,
    flexDirection: 'row',
  },
  errorText: {
    fontSize: 12,
    fontFamily: fonts.poppinsRegular,
    color: colors.red,
  },
});
export default Input;
