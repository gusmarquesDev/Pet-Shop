import React, { PropsWithChildren, useContext } from 'react'
import { View, Text, TouchableOpacity, Image,ImageURISource } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ContentCard, Title,SubTitle } from './styles'

type CardInfoProps = {
title:string,
subTitle:string,
onpress?:any,
imageValue:ImageURISource,
}
export const CardInfo: React.FC<PropsWithChildren<CardInfoProps>> = ({
title,
subTitle,
onpress,
imageValue
}) => {
  return (
    <>
    <TouchableOpacity
    style={{}}
    >
      <ContentCard>
        <View>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </View>
          <Image
           source={imageValue}
           style={{width:100, height:80}}
           resizeMode='contain'
          />
        <MaterialIcons
          name='arrow-right'
          size={40}
          color="#000000"
        />

       </ContentCard>
      </TouchableOpacity>
    </>
  )
}