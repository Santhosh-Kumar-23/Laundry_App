import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Calendar from '../../components/Calendar';
import HelperStyles from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import Icon from '../../components/Icon';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fonts} from '../../utils/fonts';
import {FlatList} from 'react-native';
import {ScreenProps} from '../../utils/types';

const PickupSchedule: React.FC = ({route}) => {
  console.log(route?.params?.title);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectTime, setSelectTime] = useState(null);

  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(colors.primarycolor);
      return () => StatusBar.setBackgroundColor(colors.white);
    }, []),
  );
  const dates = [
    {
      date: '07:00 - 8:00',
    },
    {
      date: '8:00 - 9:00',
    },
    {
      date: '9:00 - 10:00',
    },
    {
      date: '11:00 - 12:00',
    },
    {
      date: '12:00 - 13:00',
    },
    {
      date: '13:00 - 14:00',
    },
    {
      date: '14:00 - 15:00',
    },
    {
      date: '15:00 - 16:00',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          HelperStyles.Row,
          {
            backgroundColor: colors.primarycolor,
            paddingHorizontal: 15,
            paddingVertical: 15,
          },
        ]}>
        <Icon
          onPress={() => navigation.goBack()}
          type="fa"
          size={35}
          color={colors.white}
          name="angle-left"
        />
        <Text
          style={{
            textAlign: 'center',
            color: colors.white,
            fontFamily: fonts.OpenSansBold,
            fontSize: 14,
            alignSelf: 'center',
            alignContent: 'center',
            textAlignVertical: 'center',
            justifyContent: 'center',
            marginHorizontal: 120,
          }}>
          {route?.params?.title ?? null}
        </Text>
      </View>
      <Calendar
        onDateChange={date => {
          console.log('AAAAAAAAAAA', date);
          setSelectedStartDate({selectedStartDate: date});
        }}
      />

      <FlatList
        data={dates}
        numColumns={2}
        showsVerticalScrollIndicator={!true}
        contentContainerStyle={{
          marginTop: 30,
          marginHorizontal: 10,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectTime(index);
              }}
              style={{
                height: 50,
                flex: 0.5,
                borderColor: selectTime == index ? colors.primarycolor : '',
                borderWidth: selectTime == index ? 2 : 0,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginVertical: 10,
                margin: 10,
              }}>
              <Text style={{color: colors.black}}>{item.date}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default PickupSchedule;
