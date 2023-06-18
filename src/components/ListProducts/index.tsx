import React, { Component, PropsWithChildren, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { Product } from '../Product';

const window = Dimensions.get('window');


type ListProductProps = {
  data: Array<Object>,
  horizontal: boolean
}

const Products = (data: any,children:any) => {
  const { child } = styles;
  return (
    <View key={data.id} style={child}>
      <Product
        name={data.tittle}
        value={data.price}
        imageValue={data.picture}
      />
    </View>

  )
}
export const ListProducts: React.FC<PropsWithChildren<ListProductProps>> = ({
  data,
  horizontal,
}) => {
  const productsView = data.map(Products);
  return (
    <ScrollView
      horizontal={horizontal}
      contentContainerStyle={styles.container}>
      {productsView}
    </ScrollView>
  )

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  child: {
    width: window.width / 2 - 10,
    alignItems: 'center',
    marginBottom: 25
  },
});




