import { View, Text , ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from "./home.style";
import { Fontisto, Ionicons } from '@expo/vector-icons';
import {Welcome} from "../components";
import Heading from "../components/home/Heading"
import ProductRow from '../components/products/ProductRow'
const Home = () => {
  return (
    <SafeAreaView>
     <View style={style.appBarWrap}>
       <View style={style.appBar}>
        <Ionicons name = "location-outline" size={24}/>
        <Text style={style.location}>Trichy, India</Text>

        <View style={{alignItems:"flex-end"}}>
          <View style={style.cartCount}>
            <Text style={style.cartNumber}>7</Text>
          </View>
          <TouchableOpacity>
            <Fontisto name ="shopping-bag" size={24}/>
          </TouchableOpacity>
        </View>
       </View>
     </View>
      <ScrollView>
        <Welcome />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

