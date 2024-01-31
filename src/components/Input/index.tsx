import React, {forwardRef, useEffect, useRef} from 'react';
import {TextInput, View, Text, StyleSheet, ScrollView} from 'react-native';

import {InputProps, InputRef} from '../../utils/types';
import {colors} from '../../utils/colors';
import HelperStyles, {
  Width_Height,
  marginHV,
  marginTBRL,
} from '../../utils/helperstyles';
import {fonts} from '../../utils/fonts';
import Icon from '../Icon';

const Input = forwardRef<InputRef, InputProps>(
  ({items, itemOnchangeText, iconPress, focusindex}, ref) => {
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
      if (focusindex !== null && focusindex >= 0 && focusindex < items.length) {
        inputRefs.current[focusindex]?.focus();
      }
    }, [focusindex]);

    const isValid = (item: any): boolean => {
      // Your input validation logic here
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const password =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
      const phone = /[2-9]{2}\d{8}/;

      switch (item.id) {
        case 'Email':
          return emailRegex.test(item.value);
          break;
        case 'Password':
          return password.test(item.value);
          break;
        case 'CreatePassword':
          return password.test(item.value);
          break;
        case 'ConfirmPassword':
          console.log(item.value);

          return password.test(item.value);
          break;
        case 'Phonenumber':
          return phone.test(item.value);
          break;

        default:
          break;
      }
    };

    return (
      <ScrollView>
        {items.map((item, index) => (
          <View key={index}>
            <View
              style={[
                styles.inputContainer,
                Width_Height(90, 6),
                marginHV(0, 1.5),
                HelperStyles.CenterAlign,
                {
                  justifyContent: item.isrightIcon
                    ? 'flex-start'
                    : 'space-between',
                  alignItems: 'center',
                  alignSelf: 'center',
                  alignContent: 'center',
                  borderWidth:
                    focusindex === index ? (item.iserror === true ? 2 : 1) : 1,
                  borderColor: item.iserror === true ? colors.red : colors.grey,
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
                ref={input => (inputRefs.current[index] = input)}
                style={[styles.input, Width_Height(75, 6.5), marginHV(2, 0)]}
                key={item.id}
                value={item.value}
                selectionColor={item.iserror ? 'red' : 'green'}
                onChangeText={newText => {
                  // Check for email validation
                  const isValidEmail = isValid(item);

                  itemOnchangeText(index, newText, isValidEmail);
                }}
                placeholder={item.placeholder}
                placeholderTextColor={colors.placeholderclr}
                secureTextEntry={item.secureText ?? false}
                underlineColorAndroid={'transparent'}
                keyboardType={item.keybordType ?? 'default'}
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
            {item.iserror === true &&
            item.value != '' &&
            item.additionalError ? (
              <Text numberOfLines={3} style={styles.errorText}>
                {item.additionalError}
              </Text>
            ) : null}
          </View>
        ))}
      </ScrollView>
    );
  },
);

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
    fontSize: 14,
    flexDirection: 'row',
  },
  errorText: {
    fontSize: 11,
    fontFamily: fonts.poppinsRegular,
    color: colors.red,
  },
});

export default Input;
