import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import HelperStyles, {
  BorderRadius,
  Width_Height,
  bgcolor,
  marginHV,
} from '../../utils/helperstyles';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Images} from '../../assets/images/images';
import {styles} from '../../navigation/root/index';
import Button from '../../components/Button';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from '../../components/Icon';
import {launchImageLibrary} from 'react-native-image-picker';

const Profileupload: FC<ScreenProps> = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState();
  const [isupload, setIsupload] = useState(false);
  const [isupload1, setIsupload1] = useState(false);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        console.log(imageUri);

        setSelectedImage(imageUri);
      }
    });
  };
  useEffect(() => {
    if (isupload === true) {
      setTimeout(() => {
        setIsupload1(true);
        navigation.navigate('Success');
      }, 1000);
    }
  }, [isupload]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar
        barStyle="dark-content"
        // translucent={true}
        backgroundColor={'white'}
      />
      <View style={[HelperStyles.CenterAlign, marginHV(0, 3)]}></View>

      <Text
        style={{
          fontSize: 26,
          fontFamily: fonts.OpenSansBold,
          color: colors.textbold,
          alignSelf: 'center',
        }}>
        Upload Photo
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: colors.textColor,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          alignContent: 'center',
          fontSize: 16,
          fontFamily: fonts.OpenSansMedium,
          marginVertical: 10,
        }}>
        You can upload an image as your Profile {'\n'} Photo
      </Text>
      <View style={[HelperStyles.CenterAlign, [marginHV(0, 8)]]}>
        {selectedImage ? (
          <Image
            style={{width: 120, height: 120, borderRadius: 120 / 2}}
            source={{uri: selectedImage}}></Image>
        ) : (
          <Images.UserProfile fill={'green'} />
        )}
        <Pressable
          onPress={() => openImagePicker()}
          style={{position: 'absolute', right: 145, bottom: 2}}>
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 32 / 2,
              backgroundColor: colors.white,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: colors.black,
              elevation: 3,
            }}>
            <Icon
              name="photo-camera"
              type="material"
              size={22}
              color={colors.primarycolor}
            />
          </View>
        </Pressable>
      </View>
      {isupload1 ? null : (
        <View style={[HelperStyles.CenterAlign, [marginHV(0, 2)]]}>
          {isupload ? (
            <Text
              style={{
                fontFamily: fonts.OpenSansMedium,
                fontSize: 14,
                color: colors.primarycolor,
              }}>
              Success
            </Text>
          ) : (
            <Button
              onPress={() => setIsupload(true)}
              textStyle={{textTransform: 'none'}}
              title="Upload a profile photo"
              containerStyle={{height: hp(8), borderRadius: 18}}
            />
          )}
        </View>
      )}
      <View style={[HelperStyles.CenterAlign, [marginHV(0, 18)]]}>
        <Button
          onPress={() => navigation.navigate('Success')}
          title="Skip, i will update Later"
          textStyle={{textTransform: 'none'}}
          containerStyle={{height: hp(6)}}
          icon={true}
          iconName="arrowright"
          icontype="ant"
        />
      </View>
    </SafeAreaView>
  );
};
export default Profileupload;
