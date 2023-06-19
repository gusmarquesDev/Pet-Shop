import React,{ PropsWithChildren, useContext } from 'react'
import { View, Text, Image, ImageURISource } from 'react-native'
import { Container, Label } from './styles'

type CardBrandProps = {
   imageValue: ImageURISource,
   label?: string,
}
export const CardBrand: React.FC<CardBrandProps> = ({
   imageValue,
   label
}) => {
   return (
      <>
         <View>
            <Container>
               <Image
                  source={imageValue}
                  style={{ width: 70, height: 50 }}
                  resizeMode='contain'
               />
            </Container>
            <Text style={{ textAlign: 'center' }}>{label}</Text>
         </View>
      </>
   )
}