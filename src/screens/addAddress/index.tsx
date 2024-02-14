import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import HelperStyles from '../../utils/helperstyles';
import Icon from '../../components/Icon';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../components/Button';

const data = [
  {label: 'Madurai', value: '1'},
  {label: 'Trichy', value: '2'},
  {label: 'Chennai', value: '3'},
];

const address = [{Name: 'Home'}, {Name: 'Office'}, {Name: 'Others'}];

const AddAddress: React.FC<ScreenProps> = ({}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);

  const [selectAddress, setSelectAddress] = useState(1);

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          HelperStyles.Row,
          {
            backgroundColor: colors.white,
            paddingHorizontal: 20,
            paddingVertical: 15,
          },
        ]}>
        <Icon
          onPress={() => navigation.goBack()}
          type="fa"
          size={35}
          color={colors.black}
          name="angle-left"
        />
        <Text
          style={{
            textAlign: 'center',
            color: colors.black,
            fontFamily: fonts.OpenSansBold,
            fontSize: 15,
            alignSelf: 'center',
            alignContent: 'center',
            textAlignVertical: 'center',
            justifyContent: 'center',
            marginHorizontal: 120,
          }}>
          AddAddress
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 20,
          paddingVertical: 20,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            //   padding: 10,
            flexDirection: 'row',
            // marginHorizontal: 20,
            justifyContent: 'center',
          }}>
          {address.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectAddress(index);
                }}
                style={{
                  borderWidth: selectAddress == index ? 2 : 1,
                  borderColor:
                    selectAddress == index ? colors.grey : colors.primarycolor,
                  backgroundColor:
                    selectAddress == index ? colors.primarycolor : 'white',
                  flex: 0.3,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.OpenSansBold,
                    color:
                      selectAddress !== index ? colors.primarycolor : 'white',
                    padding: 8,
                  }}>
                  {item.Name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{marginHorizontal: 20}}>
          {selectAddress == 2 ? (
            <TextInput
              placeholder="Others"
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 5,
                marginTop: 20,
                paddingLeft: 12,
              }}
            />
          ) : (
            <></>
          )}
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Area'}
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderRightIcon={() => (
              <Icon
                type="ant"
                style={styles.icon}
                color={'black'}
                name="caretdown"
                size={10}
              />
            )}
          />

          <View
            style={{
              flexDirection: 'row',
              //   marginHorizontal: 10,
              marginTop: 20,
            }}>
            <View style={{flex: 0.3}}>
              <TextInput
                placeholder="Flat"
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
            </View>
            <View style={{flex: 0.3, marginLeft: 10}}>
              <TextInput
                placeholder="House"
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
            </View>
            <View style={{flex: 0.3, marginHorizontal: 10}}>
              <TextInput
                placeholder="Block"
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
            </View>
            <View style={{flex: 0.3}}>
              <TextInput
                placeholder="Road"
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              backgroundColor: colors.primarycolor,
              padding: 10,
              justifyContent: 'center',
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: 'white', fontFamily: fonts.OpenSansBold}}>
              Add Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    // marginHorizontal: 20,
    paddingHorizontal: 8,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    // position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 3,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: fonts.OpenSansMedium,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: fonts.OpenSansMedium,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    backgroundColor: 'pink',
  },
});
export default AddAddress;
