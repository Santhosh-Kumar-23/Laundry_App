// import React, {FC} from 'react';
// import {Icon} from 'react-native-elements';
// import {colors} from '../../utils/colors';
// interface Iconprops {
//   name?: string;
//   type?: string;
//   color?: string;
//   size?: number;
//   style?: any;
//   onPress?: any;
// }
// const Icons: FC<Iconprops> = ({
//   name = '',
//   style = {},
//   type = '',
//   size = 20,
//   color = colors.black,
//   onPress,
// }) => {
//   return (
//     <Icon
//       name={name}
//       type={type}
//       color={color}
//       size={size}
//       style={style}
//       onPress={onPress}></Icon>
//   );
// };
// export default Icons;

import React from 'react';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Iconprops} from '../../utils/types';

const getIconFont = (type?: string) => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'material':
      return MaterialIcon;
    case 'evil':
      return EvilIcon;
    case 'feather':
      return Feather;
    case 'ant':
      return AntDesign;
    case 'simpleLine':
      return SimpleLineIcon;
    case 'zocial':
      return ZocialIcon;
    case 'foundation':
      return FoundationIcon;
    case 'fa5':
      return FAIcon5;
    case 'fa':
      return FAIcon;
    case 'ionicon':
      return Ionicon;
    case 'materialCommunity':
      return MaterialCommunityIcon;
    case 'entypo':
      return EntypoIcon;
    case 'octicon':
      return OcticonIcon;
    default:
      return FAIcon;
  }
};

const Icon: React.FC<Iconprops> = ({type, ...props}) => {
  const FontICon = getIconFont(type);

  return <FontICon {...props} />;
};

export default Icon;
