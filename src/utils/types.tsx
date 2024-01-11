import {
 StyleProp,
 ViewStyle,
} from 'react-native';
  import type { NativeStackScreenProps } from "@react-navigation/native-stack"

  export type ScreenProps = NativeStackScreenProps<{navigation:any}>;
  export interface CardViewProps {
    containerStyle?: null | StyleProp<ViewStyle>;
    data?: Array<Object>;
   }
  