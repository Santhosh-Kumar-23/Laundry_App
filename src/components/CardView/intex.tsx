import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CardViewProps} from '../../utils/types';
import styles from './styles';

export const CardView: React.FC<CardViewProps> = ({
  containerStyle = null,
  data = [],
  maxheight,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardViewContainer, {height: maxheight}]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
