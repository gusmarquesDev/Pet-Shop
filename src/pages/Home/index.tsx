import React, { useState, useEffect } from 'react'
import { View, Text, Linking, ScrollView, FlatList } from 'react-native'
import { SafeAreaContainer, SafeAreaView } from '../../utils/SafeArea'
import { Content } from '../../utils/Page'
import { DATA } from '../../Data/dataProduct'
import { FullHeightScrollView } from '../../theme/globalStyles'
import { AnimatedCard } from '../../components/AnimatedCard'
import { CardInfo } from '../../components/CardInfo'
import { ListProducts } from '../../components/ListProducts'
import { Product } from '../../components/Product'
import { HorizontalScroll } from '../../components/HorizontalScroll'
import { CardBrand } from '../../components/CardBrand'
import theme from '../../theme/theme'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { Title } from '../../theme/globalStyles'
export interface PropsHome { }


type RootStackParamList = {
   shop: undefined
}

const ArrayCardInfo = [
   {
      id: 1,
      title: 'Comprar',
      image: require('../../assets/infoLogoPet.png'),
      subTitle: 'Produtos'
   },
]

const ArrayBrands = [
   {
      id: 1,
      image: require('../../assets/marca1.png'),
   },
   {
      id: 2,
      image: require('../../assets/marca2.png'),
   },
   {
      id: 3,
      image: require('../../assets/marca3.png'),
   },
   {
      id: 4,
      image: require('../../assets/marca4.png'),
   },
   {
      id: 5,
      image: require('../../assets/marca5.png'),
   },
   {
      id: 6,
      image: require('../../assets/marca6.png'),
   },
   {
      id: 7,
      image: require('../../assets/marca7.png'),
   },
   {
      id: 8,
      image: require('../../assets/marca8.png'),
   },
   {
      id: 9,
      image: require('../../assets/marca9.png'),
   },

]

const Home: React.FC<PropsHome> = () => {
   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

   return (
      <SafeAreaContainer color={theme.background.bgPrimary}>
         <FullHeightScrollView scrollEnabled>
            <Content>
               <AnimatedCard />
               {ArrayCardInfo.map((item) => (
                  <CardInfo
                     key={item.id}
                     title={item.title}
                     subTitle={item.subTitle}
                     imageValue={item.image}
                     onpress={() => navigation.navigate('shop')}
                  />
               ))}
               <Title>Mais Procurados</Title>
               <ListProducts
                  data={DATA}
                  horizontal={false}
               />
               <Title>Nossas Marcas</Title>
               <HorizontalScroll>
                  {ArrayBrands.map((item) => (
                     <CardBrand key={item.id} imageValue={item.image} />
                  ))}
               </HorizontalScroll>
            </Content>
         </FullHeightScrollView>
      </SafeAreaContainer>
   )
}

export default Home