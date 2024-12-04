import {  TextInput, View , TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from "./search.style";
import { Feather } from '@expo/vector-icons';
import { COLORS } from '@/constants';
const Search = () => {
  return (
    <SafeAreaView>
      <View style={style.searchContainer}>
                
                <View style = {style.searchWrapper}>
                    <TextInput
                    style = {style.searchInput}
                    value =""
                    onPressIn={() =>{}}
                    placeholder="Search you Luxury"/>
                </View>
                <View>
                  <TouchableOpacity style={style.searchBtn}>
                    <Feather name="search" size={24} color={COLORS.offwhite} />
                  </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default Search
