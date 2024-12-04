import { StyleSheet, Text, TouchableOpacity, View ,Image } from 'react-native'
import React ,{useState} from 'react'
import styles from './ProductDetails.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '@/constants'
const ProductDetails = ({navigation}) => {

   const [count , setCount] = useState(1)

   const increment = () => {
    setCount(count + 1)
   }

   const decrement = () => {
    if (count > 1){
    setCount(count - 1)
    }
   }

  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons  name ='chevron-back-circle' size={30}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <Ionicons  name ='heart' size={30} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
        <Image 
         source={{uri : "https://www.alankaram.in/wp-content/uploads/2022/12/A7402720-2048x1365-1.jpg"}}
         style={styles.image} 
        />

        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title} >Product</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>$699.6</Text>
                </View>
            </View>
            <View style={styles.ratingRow}>
                <View style={styles.rating}>
                    {[1,2,3,4,5].map ((index) => (
                        <Ionicons 
                        key={index}
                        name='star'
                        size={24}
                        color='gold'
                        />
                    ))}

                    <Text style={styles.ratingText}>  (4.9)</Text>

                </View>
                <View style={styles.rating}>
                    <TouchableOpacity onPress={() => increment()}>
                        <SimpleLineIcons 
                          name ='plus'
                          size={20}
                        />
                    </TouchableOpacity>
                    <Text style={styles.ratingText}>   {count} </Text>
                     
                     <TouchableOpacity onPress={() => decrement()}>
                              <SimpleLineIcons 
                               name='minus'
                               size={20}
                              />
                     </TouchableOpacity>

                </View>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>
                  Description
                </Text>
                <Text style={styles.descriptionText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit suscipit ea a veritatis eligendi, facere explicabo nulla saepe? Repellat eos perspiciatis magni dolor porro minima quidem architecto. Dolore, fugit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, animi et, nesciunt alias laborum esse quibusdam eum, dolorum quia est facilis. Velit eaque ea quibusdam! Laborum harum officia totam ad.
                </Text>
            </View>

            <View style={{marginBottom: SIZES.small}}>
                <View style={styles.location} >
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name='location-outline' size={20}></Ionicons>
                    <Text>  Bangalore </Text>
                  </View>
               

                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons  name='truck-delivery-outline' size={20}/>
                    <Text> Free Delivery</Text>
                </View>
                </View>
            </View>

            <View style={styles.cartRow}>
                <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                    <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                   <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
                </TouchableOpacity>
            </View>
        </View>
     
    </View>
  )
}

export default ProductDetails

