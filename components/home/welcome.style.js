import { StyleSheet } from "react-native";
import {COLORS ,SIZES} from "../../constants/index";


const style = StyleSheet.create({
    container:{
        width:"100%"
    },
     welcomeText : (color,top) => ({
        
        fontSize: SIZES.xxLarge -6,
        marginTop: top,
        color: color,
        marginHorizontal: 12
    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:'center',
        alignContent:"center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
        marginHorizontal: SIZES.small
        
    },
    searchIcon: {
        marginHorizontal: 10,
        color : COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    }

})

export default style