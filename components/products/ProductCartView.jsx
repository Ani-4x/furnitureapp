import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './ProductCartView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants'
import { useNavigation } from '@react-navigation/native';



const ProductCartView = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
           <View style={styles.container}>
             <View style={styles.imageContainer}>
                 <Image 
                 source={{uri : "https://www.alankaram.in/wp-content/uploads/2022/12/A7402720-2048x1365-1.jpg"}}
                 style={styles.image}
                 />
             </View>

             <View style={styles.details}>

                <Text style={styles.title} numberOfLines={1}>Product</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>      
                <Text style={styles.price} numberOfLines={1}>$1234</Text>

             </View>
             <TouchableOpacity style={styles.addBtn}>
                        <Ionicons name='add-circle' size={35} color={COLORS.primary}></Ionicons>
             </TouchableOpacity>
            
           </View>
    </TouchableOpacity>


  )
}

export default ProductCartView