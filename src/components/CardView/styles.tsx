import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from 'react-native-elements';

const styles = StyleSheet.create({
  cardViewContainer: {
    backgroundColor: colors.white,
    height: 240,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 22,
    marginVertical: 4,
  },
  textStyle: {
    fontWeight: '700',
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.OpenSansMedium,
  },
});
export default styles;
