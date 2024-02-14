import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Calendar from '../components/Calendar/index';
import {IconProps} from 'react-native-vector-icons/Icon';

export interface ScreenProps {
  navigation?: any;
  props?: any;
}

export interface CardViewProps {
  containerStyle?: null | StyleProp<ViewStyle>;
  data?: Array<Object>;
  maxheight: number;
  children: any;
  onPress?: any;
}

export interface ButtonInterface {
  containerStyle?: null | StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  size?: String;
  textStyle?: null | StyleProp<TextStyle>;
  touchable?: boolean;
  bordered?: boolean;
  icon?: boolean;
  title?: string;
  onPress?: any;
  iconName?: string;
  icontype?: string;
}

export interface Iconprops extends IconProps {
  type?: string;
}
interface InputItem {
  id: string;
  placeholder: string;
  value: string;
  secureText?: boolean;
  isrightIcon?: boolean;
  isLeftIcon?: boolean;
  iconPress?: any;
  iconName?: string;
  icontype?: string;
  error?: string;
  iserror?: boolean;
  keybordType?: string;
  additionalError?: string;
}
export interface InputProps {
  items: InputItem[];
  itemOnchangeText: (
    index: number,
    newText: string,
    isValidEmail?: boolean,
    additionalError?: string,
  ) => void;
  iconPress: (index: number) => void;
  focusindex: number;
  onFocus?: any;
}
export interface CalendarProps {
  onDateChange: any;
}
export interface ToastProps {
  content: string;
  closebtnPress?: any;
  visiable: boolean;
}
export interface InputRef {
  focus: () => void;
}
