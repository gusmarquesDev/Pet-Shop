import React, { useState, useEffect } from 'react'
import { View, Text, Linking, ScrollView, FlatList } from 'react-native'
import { SafeAreaContainer, SafeAreaView } from '../../utils/SafeArea'
import { Content } from '../../utils/Page'
import { DATA } from '../../Data/dataProduct'
import { FullHeightScrollView } from './styles'
import { AnimatedCard } from '../../components/AnimatedCard'
import { CardInfo } from '../../components/CardInfo'
import { ListProducts } from '../../components/ListProducts'
import { Product } from '../../components/Product'
import { HorizontalScroll } from '../../components/HorizontalScroll'
import { CardBrand } from '../../components/CardBrand'
import theme from '../../theme/theme'
export interface PropsHome {
   navigation: any
}


const ArrayCardInfo = [
   {
      id:1,
      title: 'Comprar',
      image: require('../../assets/infoLogoPet.png'),
      subTitle: 'Produtos'
   },
   {
      id:2,
      title: 'Agendar',
      image: require('../../assets/infoLogo2.png'),
      subTitle: 'Serviços'
   },

]

const ArrayBrands = [
   {
      id:1,
      image: require('../../assets/marca1.png'),
   },
   {
      id:2,
      image: require('../../assets/marca2.png'),
   },
   {
      id:3,
      image: require('../../assets/marca3.png'),
   },
   {
      id:4,
      image: require('../../assets/marca4.png'),
   },
   {
      id:5,
      image: require('../../assets/marca5.png'),
   },
   {
      id:6,
      image: require('../../assets/marca6.png'),
   },
   {
      id:7,
      image: require('../../assets/marca7.png'),
   },
   {
      id:8,
      image: require('../../assets/marca8.png'),
   },
   {
      id:9,
      image: require('../../assets/marca9.png'),
   },

]

const Home: React.FC<PropsHome> = ({ navigation }) => {
   return (
      <SafeAreaContainer color={theme.background.bgPrimary}>
         <FullHeightScrollView scrollEnabled>
            <Content>
               <AnimatedCard />
               {ArrayCardInfo.map((item)=>(
               <CardInfo
               key={item.id}
               title={item.title}
               subTitle={item.subTitle}
               imageValue={item.image}
                />
                ))}  

               <Text style={{
                  fontSize: 16,
                  fontWeight:'bold',
                  marginHorizontal:'2%',
                  marginVertical:15
                  
               }}>Mais Procurados</Text>
               <ListProducts
                  data={DATA}
                  horizontal={false}
               />
               <Text style={{
                  fontSize: 15,
                  fontWeight:'bold',
                  marginHorizontal: '2%'
               }}>Nossas Marcas</Text>

             <HorizontalScroll>
               {ArrayBrands.map((item)=>(
                  <CardBrand imageValue={item.image}/>
               ))}
             </HorizontalScroll>
            </Content>
         </FullHeightScrollView>
      </SafeAreaContainer>
   )
}

export default Home