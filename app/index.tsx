import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from '../navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App () {

   const [fontsLoaded] = useFonts({
    
   })

   const onLayoutRootView = useCallback(async() => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
   }, [fontsLoaded]);

   if(!fontsLoaded){
    return null;
   }

    return (
      <NavigationIndependentTree>
       <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
               name ="Bottom Navigation"
        
               component={BottomTabNavigation}
               options={{headerShown:false}}
          />
         </Stack.Navigator>
       </NavigationContainer>
      </NavigationIndependentTree>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
    
      fontSize: 20
    }
})