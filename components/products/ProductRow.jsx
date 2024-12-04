import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SIZES } from '@/constants'
import ProductCartView from './ProductCartView';

const ProductRow = () => {
    const products = [1,2,3,4]
    return (
        <View style={{marginTop: SIZES.medium}}>
       <FlatList 
            data={products}
             renderItem={({item}) => <ProductCartView/>}
             horizontal
             contentContainerStyle={{columnGap: SIZES.medium}}
       
       />
       </View>
    )
    
}

export default ProductRow
