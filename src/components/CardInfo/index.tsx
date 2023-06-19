import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageURISource } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ContentCard, Title, SubTitle } from './styles'

type CardInfoProps = {
  title: string,
  subTitle: string,
  onpress?: () => void,
  imageValue: ImageURISource,
}
export const CardInfo: React.FC<CardInfoProps> = ({
  title,
  subTitle,
  onpress,
  imageValue
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onpress}
        style={{}}
      >
        <ContentCard>
          <View>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </View>
          <Image
            source={imageValue}
            style={{ width: 100, height: 80 }}
            resizeMode='contain'
          />
          <MaterialIcons
            name='chevron-right'
            size={40}
            color="#008C8B"
          />

        </ContentCard>
      </TouchableOpacity>
    </>
  )
}