import React from "react";
import { View,Text,StatusBar,SafeAreaView,Image } from "react-native";
import { ScreenProps } from "../../utils/types";
import { Images } from "../../assets/images/images";



const SplashScreen:React.FC<ScreenProps>=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={"white"}
      />
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
            
            <Image source={Images.SplashImage} style={{height:"10%",width:"80%"}} resizeMode="contain"/>

        </View>

  
        </SafeAreaView>
    )
}

export default SplashScreen