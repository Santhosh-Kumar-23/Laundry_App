import React, {FC, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {ScreenProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import Icon from '../../components/Icon';
import {fonts} from '../../utils/fonts';
import {launchImageLibrary} from 'react-native-image-picker';
import {Images} from '../../assets/images/images';
import HelperStyles, {flex, marginHV} from '../../utils/helperstyles';
import {useFocusEffect} from '@react-navigation/native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const EditProfile: FC<ScreenProps> = () => {
  const [selectedImage, setSelectedImage] = useState();
  const navigation = useNavigation();
  const [isupload, setIsupload] = useState(false);

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
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(colors.primarycolor);

      return () => StatusBar.setBackgroundColor(colors.white);
    }, []),
  );
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          //   marginHorizontal: 20,
        }}>
        <View
          style={[
            HelperStyles.Row,
            {
              backgroundColor: colors.primarycolor,
              paddingHorizontal: 20,
              paddingVertical: 15,
            },
          ]}>
          <Icon
            onPress={() => navigation.goBack()}
            type="fa"
            size={35}
            color={colors.white}
            name="angle-left"
          />
          <Text
            style={{
              textAlign: 'center',
              color: colors.white,
              fontFamily: fonts.OpenSansBold,
              fontSize: 15,
              alignSelf: 'center',
              alignContent: 'center',
              textAlignVertical: 'center',
              justifyContent: 'center',
              marginHorizontal: 120,
            }}>
            Edit Profile
          </Text>
        </View>
        <ScrollView>
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 15,
                //   padding: 5,
              },
            ]}>
            {selectedImage ? (
              <Image
                style={{width: 100, height: 100, borderRadius: 100 / 2}}
                source={{uri: selectedImage}}></Image>
            ) : (
              <Images.UserProfile fill={colors.primarycolor} />
            )}
            <Pressable
              onPress={() => openImagePicker()}
              style={{position: 'absolute', right: 155, bottom: 2}}>
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
          <TextInput
            placeholder="Name"
            style={{
              borderWidth: 1,
              fontFamily: fonts.OpenSansBold,
              paddingLeft: 12,
              borderRadius: 3,
              marginTop: 20,
              backgroundColor: 'white',
              borderColor: 'gray',
              marginHorizontal: 20,
            }}
          />
          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 1,
              fontFamily: fonts.OpenSansBold,
              marginHorizontal: 20,
              paddingLeft: 12,
              borderColor: 'gray',
              borderRadius: 3,
              marginVertical: 20,
              backgroundColor: 'white',
            }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{
              borderWidth: 1,
              fontFamily: fonts.OpenSansBold,
              marginHorizontal: 20,
              paddingLeft: 12,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'gray',
            }}
          />
          <TextInput
            placeholder="Alternative Phone (Optional)"
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              paddingLeft: 12,
              borderRadius: 3,
              marginVertical: 20,
              marginHorizontal: 20,
              fontFamily: fonts.OpenSansBold,
              backgroundColor: 'white',
            }}
          />
          <View
            style={{
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="Change Password"
              onPress={() => {
                navigation.navigate('ChangePassword');
              }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button title="Update Profile" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default EditProfile;
