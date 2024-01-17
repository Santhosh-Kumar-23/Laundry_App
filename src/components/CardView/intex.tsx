import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CardViewProps} from '../../utils/types';
import styles from './styles';
import {Divider} from '@rneui/themed';
import Icon from '../Icon';
import {colors} from '../../utils/colors';

export const CardView: React.FC<CardViewProps> = ({
  containerStyle = null,
  data = [],
  maxheight,
  children,
}) => {
  return (
    <View style={[styles.cardViewContainer, {height: maxheight}]}>
      {children}
    </View>
  );
};
