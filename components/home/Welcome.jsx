import { View , Text , TouchableOpacity, TextInput} from "react-native";
import React from "react";
import style from "./welcome.style";
import {COLORS, SIZES } from "../../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();

    return(
        <View>
            <View style = {style.container}>
                <Text style={style.welcomeText(COLORS.black, SIZES.xSmall)}>
                    {" "}
                    Find The Most
                </Text>
                <Text style = { style.welcomeText(COLORS.primary, 0)}>
                    {" "}
                    Lavish Furniture
                </Text>
            </View>

            <View style={style.searchContainer}>
                <TouchableOpacity>
                    <Feather name= "search" size={24} style = {style.searchIcon}/>
                </TouchableOpacity>
                <View style = {style.searchWrapper}>
                    <TextInput
                    style = {style.searchInput}
                    value =""
                    onPressIn={() => navigation.navigate("Search")}
                    placeholder="Search you Luxury"/>
                </View>
            </View>
        </View>
    )
}

export default Welcome