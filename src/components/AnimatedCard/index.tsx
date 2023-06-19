import React, { PropsWithChildren, useContext } from 'react'
import { View, Text } from 'react-native'

import LottieView from 'lottie-react-native'
import { styles } from './styles'

type AnimatedCardProps = {

}
export const AnimatedCard: React.FC<PropsWithChildren<AnimatedCardProps>> = ({

}) => {
  return (
    <>
      <View style={styles.cotainer}>
        <View style={styles.contentLottie}>
          <LottieView
            source={require('../../assets/dog.json')}
            autoPlay
            loop
          />
        </View>
        <Text
          style={styles.cardText}>Em breve Adoção de Animais pelo App</Text>
      </View>
    </>
  )
}