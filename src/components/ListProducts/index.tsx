import React from 'react'
import { View,  ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { Product } from '../Product';
import { styles } from './styles';


type ListProductProps = {
  data: Array<Object>,
  horizontal: boolean,
}
export type RootStackParamList = {
  ProductDetails: { tittle: string, price: string, photo: string } | undefined,
}

export const ListProducts: React.FC<ListProductProps> = ({
  data,
  horizontal,
},
) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const Products = (data:any) => {
    const { child } = styles;
    return (
      <View key={data.id} style={child}>
        <Product
          name={data.tittle}
          value={data.price}
          imageValue={data.picture}
          onpress={() => navigation.navigate('ProductDetails', { tittle: data.tittle, price: data.price, photo: data.picture })}
        />
      </View>

    )
  }
  const productsView = data.map(Products);
  return (
    <ScrollView
      horizontal={horizontal}
      contentContainerStyle={styles.container}>
      {productsView}
    </ScrollView>
  )

};




