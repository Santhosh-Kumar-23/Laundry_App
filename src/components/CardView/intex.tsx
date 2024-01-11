import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CardViewProps} from '../../utils/types';
import styles from './styles';
import {Divider} from '@rneui/themed';

export const CardView: React.FC<CardViewProps> = ({
  containerStyle = null,
  data = [],
}) => {
  return (
    <View style={styles.cardViewContainer}>
      <View style={[styles.textContainer, {marginTop: 20}]}>
        <Text style={styles.textStyle}>Order ID</Text>
        <Text style={styles.textStyle}>#000632</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Date</Text>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
          09 jan, 2024
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
          Delivery Option
        </Text>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
          Online Payment
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
          Payable Amount
        </Text>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
          Rs.100.00
        </Text>
      </View>
      <View style={styles.textContainer}>
        <View style={{backgroundColor: 'pink', flex: 0.5}}>
          <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>Status</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 0.5,
            padding: 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
            Processing
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, {fontWeight: 'normal'}]}>
          Payment Status
        </Text>
        <Text style={[styles.textStyle]}>Paid</Text>
      </View>
      <Divider width={3} style={{marginHorizontal: 20, marginVertical: 6}} />
    </View>
  );
};
