import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'


type InputProps = {
  searching: any
}
export const Input: React.FC<InputProps> = ({
  searching,

}) => {
  return (
    <View>
      <Text style={styles.labelInput}>Pesquise um produto</Text>
      <TextInput
        style={styles.input}
        placeholder="digite o nome do produto"
        onChangeText={(e) => searching(e)}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
    </View>
  )
}