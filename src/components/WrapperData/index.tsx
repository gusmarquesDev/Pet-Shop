import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'


type WrapperDataProps = {
  label: string | undefined,
  tittle: string | undefined

}
export const WrapperData: React.FC<WrapperDataProps> = ({
  label,
  tittle,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text>{tittle}</Text>
      </View>
    </>
  )
}