import React from "react";
import { View,Text,StatusBar,SafeAreaView } from "react-native";
import { ScreenProps } from "../../utils/types";



const SplashScreen:React.FC<ScreenProps>=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="dark-content"/>
        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text>Splash Screen</Text>
        </View>

  
        </SafeAreaView>
    )
}

export default SplashScreen