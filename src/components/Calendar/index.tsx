import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {CalendarProps} from '../../utils/types';
import Icon from '../Icon';
import {colors} from '../../utils/colors';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Calendar: FC<CalendarProps> = ({onDateChange}) => {
  return (
    <View style={styles.container}>
      <CalendarPicker
        initialDate={new Date()}
        height={hp(65)}
        dayLabelsWrapper={{borderBottomWidth: 0, borderTopWidth: 0}}
        previousComponent={
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={20}
            color={colors.black}
            disabled={true}
          />
        }
        nextComponent={
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={20}
            color={colors.black}
            style={{transform: [{rotateY: '180deg'}]}}
          />
        }
        minDate={new Date()}
        selectedDayStyle={{backgroundColor: colors.primarycolor}}
        selectedDayTextColor={colors.white}
        todayBackgroundColor={colors.primarycolor}
        todayTextStyle={{color: colors.white}}
        onDateChange={onDateChange}
        restrictMonthNavigation={true}
        allowBackwardRangeSelect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
export default Calendar;
