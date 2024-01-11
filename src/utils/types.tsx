import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconProps} from 'react-native-elements';

export type ScreenProps = NativeStackScreenProps<{navigation: any}>;
export interface ButtonInterface {
  containerStyle?: null | StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  mode?: String;
  size?: String;
  textStyle?: null | StyleProp<TextStyle>;
  touchable?: boolean;
  bordered?: boolean;
  icon?: boolean;
  title?: string;
  onPress?: any;
}

export interface Iconprops extends IconProps {
  type?: string;
}
